import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Sobre() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Sobre o DevCard</Text>
        <Text style={styles.subtitle}>Conheça mais sobre o projeto</Text>

        <Text style={styles.description}>
          O DevCard é um aplicativo interativo feito para desenvolvedores mobile criarem, visualizarem e compartilharem seus cartões de visita digitais de forma personalizada e rápida.
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
            <Text style={styles.infoValue}>1.0.0 (Extras)</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => router.back()}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotaoVoltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
    color: "#1F2937",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 32,
  },
  description: {
    fontSize: 16,
    color: "#374151",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 8,
  },
  cardInfo: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
    gap: 16,
  },
  cardInfoTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    paddingBottom: 8,
  },
  infoLabel: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "500",
  },
  infoValue: {
    color: "#1F2937",
    fontSize: 14,
    fontWeight: "700",
  },
  botaoVoltar: {
    backgroundColor: "#6C63FF",
    paddingVertical: 18,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    shadowColor: "#6C63FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  textoBotaoVoltar: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
