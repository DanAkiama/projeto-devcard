import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Preview() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const anos = Number(params.experiencia);
  let nivel = "";
  let corNivel = "";

  if (anos <= 2) {
    nivel = "Júnior";
    corNivel = "#B0BEC5";
  } else if (anos <= 5) {
    nivel = "Pleno";
    corNivel = "#2196F3"; 
  } else {
    nivel = "Sênior";
    corNivel = "#FFD700"; 
  }

  const cores: any = {
    blue: '#1976D2',
    green: '#388E3C',
    purple: '#7B1FA2'
  };
  const corFundoCartao = cores[params.cor as string] || cores.blue;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Seu Cartão</Text>

      {/* Cartão de Visita */}
      <View style={[styles.card, { backgroundColor: corFundoCartao }]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{params.nome?.toString()[0]}</Text>
        </View>

        <Text style={styles.cardNome}>{params.nome}</Text>
        <Text style={styles.cardCargo}>{params.cargo}</Text>
        
        {params.empresa ? (
          <Text style={styles.cardEmpresa}>🏢 {params.empresa}</Text>
        ) : null}

        <Text style={styles.cardTech}>Especialista em {params.tech}</Text>

        {/* Badge de Nível */}
        <View style={[styles.badge, { backgroundColor: corNivel }]}>
          <Text style={styles.badgeText}>{nivel}</Text>
        </View>
      </View>

      {/* Botões de Ação */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Editar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.finalBtn} 
          onPress={() => router.replace('/sucesso')}
        >
          <Text style={styles.finalBtnText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E3F2FD', padding: 20, paddingTop: 100, alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', marginTop: 10, marginBottom: 30, color: '#6200EE' },
  card: {
    width: '100%',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: { fontSize: 40, fontWeight: 'bold', color: '#fff' },
  cardNome: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 5 },
  cardCargo: { fontSize: 16, color: '#eee', marginBottom: 5 },
  cardEmpresa: { fontSize: 14, color: '#ddd', marginBottom: 15 },
  cardTech: { fontSize: 16, fontWeight: '600', color: '#fff', marginTop: 10 },
  badge: {
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  badgeText: { fontWeight: 'bold', color: '#333' },
  footer: { width: '100%', marginTop: 40, gap: 15 },
  finalBtn: { backgroundColor: '#6200EE', padding: 15, borderRadius: 12, alignItems: 'center' },
  finalBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  backButton: { padding: 15, alignItems: 'center' },
  backButtonText: { color: '#6200EE', fontWeight: '600' }
});