import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEME } from "../styles/contants";
import { Button } from "../components/Buttons";
import { useRouter } from "expo-router";

export default function SucessoScreen() {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fbff" }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.successBadgeContainer}>
            <View style={styles.successBadgeCircle}>
              <Text style={styles.successBadgeIcon}>✓</Text>
            </View>
          </View>
          
          <Text style={styles.title}>Cartão criado com sucesso!</Text>
          <Text style={styles.subtitle}>Seu cartão de visita digital está pronto. Compartilhe com a galera!</Text>
        </View>

        <View style={styles.footerContainer}>
          <Button label="Criar outro cartão" onPress={() => router.replace('/')} />
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
    paddingBottom: 40,
  },

  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 16,
  },

  successBadgeContainer: {
    backgroundColor: "rgba(16, 172, 132, 0.15)",
    padding: 10,
    borderRadius: 60,
    marginBottom: 8,
  },

  successBadgeCircle: {
    backgroundColor: "#10ac84",
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  successBadgeIcon: {
    color: "#ffffff",
    fontSize: 50,
    fontWeight: "bold",
    lineHeight: 55,
  },

  title: {
    color: THEME.colors.heading,
    fontSize: THEME.text.heading.h3,
    fontWeight: "bold",
    textAlign: "center",
    width: 250,
  },

  subtitle: {
    color: THEME.colors.subtitle,
    fontSize: 16,
    fontWeight: "400",
    width: 250,
    textAlign: "center",
    lineHeight: 22,
  },

  footerContainer: {
    flexDirection: "column",
    gap: 12,
  },
});