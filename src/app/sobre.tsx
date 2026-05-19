import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../styles/contants";
import { Button } from "../components/Buttons";
import { useRouter } from "expo-router";

export default function SobreScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fbff" }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleLogo}>Sobre o DevCard</Text>
          <Text style={styles.subtitle}>
            Conheça mais sobre o projeto
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.description}>
            O <Text style={{ fontWeight: "bold", color: THEME.colors.primary }}>DevCard</Text> é um aplicativo interativo feito para desenvolvedores mobile criarem, visualizarem e compartilharem seus cartões de visita digitais de forma personalizada e rápida.
          </Text>

          <View style={styles.cardInfo}>
            <Text style={styles.cardInfoTitle}>Informações Acadêmicas</Text>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Desenvolvedor:</Text>
              <Text style={styles.infoValue}>Daniel Akiama</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Professor:</Text>
              <Text style={styles.infoValue}>Brendo Vale</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Matéria:</Text>
              <Text style={styles.infoValue}>Aplicações Móveis</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Versão:</Text>
              <Text style={styles.infoValue}>1.0.0 (Desafios Extras)</Text>
            </View>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Button label="Voltar ao início" onPress={() => router.back()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    gap: 8,
  },
  titleLogo: {
    color: THEME.colors.primary,
    fontSize: THEME.text.heading.h2,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: THEME.colors.subtitle,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 24,
    marginVertical: 20,
  },
  description: {
    color: THEME.colors.heading,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  cardInfo: {
    backgroundColor: THEME.colors.primary_foreground,
    borderRadius: THEME.border.radius.lg,
    borderWidth: 1,
    borderColor: THEME.colors.border.input,
    padding: 20,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardInfoTitle: {
    color: THEME.colors.heading,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f2f5",
    paddingBottom: 8,
  },
  infoLabel: {
    color: THEME.colors.subtitle,
    fontSize: 14,
    fontWeight: "500",
  },
  infoValue: {
    color: THEME.colors.heading,
    fontSize: 14,
    fontWeight: "bold",
  },
  footerContainer: {
    flexDirection: "column",
    gap: 12,
    marginBottom: 20,
  },
});
