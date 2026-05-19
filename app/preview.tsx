import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Clipboard } from "react-native";

const coresMap: { [key: string]: string } = {
  Azul: "#3B82F6",
  Verde: "#10B981",
  Roxo: "#8B5CF6",
};

const coresEscurasMap: { [key: string]: string } = {
  Azul: "#1E40AF",
  Verde: "#065F46",
  Roxo: "#5B21B6",
};

const CHIP_COLORS = ["#e056fd", "#ff7979", "#ffbe76", "#10ac84", "#2e86de", "#00d2d3", "#feca57", "#ff9ff3"];

export default function Preview() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    nome: string;
    cargo: string;
    empresa: string;
    anos: string;
    tecnologia: string;
    tecnologias: string;
    cor: string;
  }>();

  const {
    nome = "Nome",
    cargo = "Cargo",
    empresa = "",
    anos = "0",
    tecnologia = "Tech",
    tecnologias = "",
    cor = "Azul",
  } = params;

  const anosNum = parseInt(anos, 10);
  let nivel = "Júnior";
  let corBadge = "#9CA3AF";

  if (anosNum >= 3 && anosNum <= 5) {
    nivel = "Pleno";
    corBadge = "#3B82F6";
  } else if (anosNum >= 6) {
    nivel = "Sênior";
    corBadge = "#D97706";
  }

  const corEscura = coresEscurasMap[cor] || coresEscurasMap.Azul;
  const inicial = nome.charAt(0).toUpperCase();

  const tags = tecnologias
    ? tecnologias.split(",").map(t => t.trim()).filter(t => t.length > 0)
    : [];

  const handleShare = () => {
    const formattedData = `--- DevCard de ${nome} ---
Cargo: ${cargo}
${empresa ? `Empresa: ${empresa}\n` : ""}Anos de Experiência: ${anos} ${Number(anos) === 1 ? "ano" : "anos"} (${nivel})
Tecnologia Favorita: ${tecnologia}
Outras Tecnologias: ${tecnologias}
`;

    Clipboard.setString(formattedData);
    Alert.alert("Sucesso!", "Dados do seu cartão foram copiados para a área de transferência!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloPagina}>Seu Cartão</Text>

      <View style={[styles.card, { backgroundColor: corEscura }]}>
        <View style={styles.avatar}>
          <Text style={[styles.avatarTexto, { color: corEscura }]}>
            {inicial}
          </Text>
        </View>

        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.cargo}>
          {cargo}
          {empresa ? ` • ${empresa}` : ""}
        </Text>

        <View style={styles.divisor} />

        <Text style={styles.especialidade}>
          Especialista em{" "}
          <Text style={styles.tecnologiaDestaque}>{tecnologia}</Text>
        </Text>

        {tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {tags.map((tag, idx) => (
              <View key={idx} style={[styles.tagChip, { backgroundColor: CHIP_COLORS[idx % CHIP_COLORS.length] }]}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={[styles.badge, { backgroundColor: corBadge }]}>
          <Text style={styles.badgeTexto}>{nivel}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.botaoCompartilhar}
        onPress={handleShare}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotaoCompartilhar}>Compartilhar Cartão</Text>
      </TouchableOpacity>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.botaoEditar}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.textoBotaoEditar}>Editar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoFinalizar}
          onPress={() => router.replace("/sucesso")}
          activeOpacity={0.8}
        >
          <Text style={styles.textoBotaoFinalizar}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  
  tituloPagina: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 24,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },

  card: {
    borderRadius: 24,
    padding: 36,
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 14,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  avatarTexto: {
    fontSize: 40,
    fontWeight: "bold",
  },

  nome: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  cargo: {
    fontSize: 16,
    color: "#E5E7EB",
    marginBottom: 4,
  },

  divisor: {
    width: 40,
    height: 3,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 2,
    marginVertical: 20,
  },

  especialidade: {
    fontSize: 15,
    color: "#D1D5DB",
    marginBottom: 24,
  },

  tecnologiaDestaque: {
    fontWeight: "700",
    color: "#FFFFFF",
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
    marginBottom: 24,
    maxWidth: "100%",
  },

  tagChip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },

  tagText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },

  badge: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 24,
  },

  badgeTexto: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 0.5,
  },

  botoes: {
    flexDirection: "row",
    marginTop: 16,
    gap: 16,
    width: "100%",
  },

  botaoEditar: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6B7280",
  },

  textoBotaoEditar: {
    fontWeight: "600",
    color: "#374151",
    fontSize: 15,
  },

  botaoFinalizar: {
    flex: 1,
    backgroundColor: "#10B981",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  textoBotaoFinalizar: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },

  botaoCompartilhar: {
    width: "100%",
    backgroundColor: "transparent",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#10B981",
    marginTop: 20,
  },

  textoBotaoCompartilhar: {
    fontWeight: "700",
    color: "#10B981",
    fontSize: 15,
  },
});