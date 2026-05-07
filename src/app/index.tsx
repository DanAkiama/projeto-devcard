import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.contentCenter}>
        <Text style={styles.title}>DevCard</Text>
        <Text style={styles.subtitle}>
          Seu cartão de visita digital de dev mobile
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/cadastro')}
      >
        <Text style={styles.buttonText}>Criar meu cartão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E3F2FD', 
  },
  contentCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#444',
    marginBottom: 40,
    maxWidth: '80%',
  },
  button: {
    backgroundColor: '#6200EE', 
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 12,
    elevation: 3, 
    marginBottom: 40,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});