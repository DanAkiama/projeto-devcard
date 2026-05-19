import { Alert, Clipboard, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Buttons";
import { THEME } from "../styles/contants";
import { DevCard } from "../components/DevCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Form } from "./cadastro";

export default function PreviewScreen() {
  const router = useRouter()
  const params = useLocalSearchParams() as unknown as Form

  function handleShare() {
    if (!params) return;
    
    const badgeLabel = Number(params.experience) <= 2 ? "Júnior" : Number(params.experience) <= 5 ? "Pleno" : "Sênior";
    const formattedData = `--- DevCard de ${params.fullName} ---
Cargo: ${params.role}
${params.company ? `Empresa: ${params.company}\n` : ""}Anos de Experiência: ${params.experience} ${Number(params.experience) === 1 ? "ano" : "anos"} (${badgeLabel})
Tecnologia Favorita: ${params.technology}
Outras Tecnologias: ${params.technologies}
`;

    Clipboard.setString(formattedData);
    Alert.alert("Sucesso!", "Dados do seu cartão foram copiados para a área de transferência!");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fbff" }}>
      <View style={styles.container}>
        {/* Cabeçalho do App */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Seu cartão</Text>
        </View>

        {!!params && <DevCard data={params} />}

        {/* Rodapé do App */}
        <View style={styles.footerContainer}>
          <Button label="Compartilhar" variant="secondary" onPress={handleShare} />
          <Button label="Editar dados" variant="outline" onPress={() => router.back()} />
          <Button label="Finalizar" onPress={() => router.replace("/sucesso")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 24,
    gap: 15,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 16,
  },
  title: {
    color: THEME.colors.heading,
    fontSize: THEME.text.heading.h3,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 22,
  },
  footerContainer: {
    flexDirection: "column",
    gap: 12,
    marginTop: 10,
  },
});