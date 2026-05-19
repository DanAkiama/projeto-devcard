import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../styles/contants";
import { Button } from "../components/Buttons";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fbff" }}>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <TouchableOpacity onPress={() => router.push("/sobre")} style={styles.aboutButton}>
            <Text style={styles.aboutButtonText}>Sobre o App</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.titleLogo}>DevCard</Text>
          <Text style={styles.subtitle}>
            Seu cartão de visita digital de dev mobile
          </Text>
        </View>

        <Button label="Criar meu cartão" onPress={() => router.push("/cadastro")} />
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
    paddingBottom: 40,
  },
  topHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 10,
  },
  aboutButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: THEME.border.radius.md,
    borderWidth: 1.5,
    borderColor: THEME.colors.primary,
  },
  aboutButtonText: {
    color: THEME.colors.primary,
    fontSize: 14,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
  titleLogo: {
    color: THEME.colors.primary,
    fontSize: 50,
    fontWeight: "bold",
  },
  subtitle: {
    color: THEME.colors.subtitle,
    fontSize: 16,
    fontWeight: "400",
    width: 200,
    textAlign: "center",
  }
});