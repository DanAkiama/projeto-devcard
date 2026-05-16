import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Cadastro() {
  const router = useRouter();

  // Estados para os campos
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [tech, setTech] = useState('');
  const [cor, setCor] = useState('blue'); // Cor padrão

  // Função de validação
  const handleAvancar = () => {
    if (nome.length < 3) {
      Alert.alert("Erro", "O nome deve ter pelo menos 3 caracteres.");
      return;
    }
    if (!cargo || !experiencia || !tech) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios!");
      return;
    }
    if (Number(experiencia) <= 0) {
      Alert.alert("Erro", "Anos de experiência deve ser um número maior que zero.");
      return;
    }

    // Se estiver certo, ele deve navegar para o Preview passando os dados, professor o/
    router.push({
      pathname: '/preview',
      params: { nome, cargo, empresa, experiencia, tech, cor }
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 40, paddingBottom: 40 }}>
      <Text style={styles.header}>Cadastro</Text>
      <Text style={styles.subHeader}>Preencha seus dados de dev</Text>

      <Text style={styles.label}>Nome Completo *</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Ex: João Silva" />

      <Text style={styles.label}>Cargo *</Text>
      <TextInput style={styles.input} value={cargo} onChangeText={setCargo} placeholder="Ex: Desenvolvedor Mobile" />

      <Text style={styles.label}>Empresa (Opcional)</Text>
      <TextInput style={styles.input} value={empresa} onChangeText={setEmpresa} placeholder="Ex: Tech Solutions" />

      <Text style={styles.label}>Anos de Experiência *</Text>
      <TextInput style={styles.input} value={experiencia} onChangeText={setExperiencia} placeholder="Ex: 4" keyboardType="numeric" />

      <Text style={styles.label}>Tecnologia Favorita *</Text>
      <TextInput style={styles.input} value={tech} onChangeText={setTech} placeholder="Ex: React Native" />

      <Text style={styles.label}>Cor do Cartão</Text>
      <View style={styles.colorContainer}>
        <TouchableOpacity style={[styles.colorOption, cor === 'blue' && styles.colorOptionSelected]} onPress={() => setCor('blue')}>
          <View style={[styles.colorBtn, { backgroundColor: 'blue' }]} />
          <Text style={styles.colorLabel}>Azul</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.colorOption, cor === 'green' && styles.colorOptionSelected]} onPress={() => setCor('green')}>
          <View style={[styles.colorBtn, { backgroundColor: 'green' }]} />
          <Text style={styles.colorLabel}>Verde</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.colorOption, cor === 'purple' && styles.colorOptionSelected]} onPress={() => setCor('purple')}>
          <View style={[styles.colorBtn, { backgroundColor: 'purple' }]} />
          <Text style={styles.colorLabel}>Roxo</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitBtn} onPress={handleAvancar}>
        <Text style={styles.submitBtnText}>Gerar Cartão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 40 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  subHeader: { fontSize: 16, color: '#666', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 5, color: '#444' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 15, fontSize: 16 },
  colorContainer: { flexDirection: 'row', gap: 12, marginBottom: 30, justifyContent: 'space-between' },
  colorOption: { flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1, borderWidth: 2, borderColor: '#ddd', borderRadius: 8, paddingHorizontal: 14, paddingVertical: 12 },
  colorOptionSelected: { borderColor: '#6200EE', backgroundColor: '#f5f0ff', elevation: 3 },
  colorBtn: { width: 24, height: 24, borderRadius: 12, borderWidth: 1, borderColor: '#999' },
  colorLabel: { fontSize: 14, fontWeight: '600', color: '#444' },
  submitBtn: { backgroundColor: '#6200EE', padding: 15, borderRadius: 8, alignItems: 'center' },
  submitBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});