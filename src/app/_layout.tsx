import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#f5f5f5' },
        headerTintColor: '#333',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="cadastro" options={{ title: 'Cadastro' }} />
      <Stack.Screen name="preview" options={{ title: 'Seu Cartão' }} />
      <Stack.Screen name="sucesso" options={{ title: 'Finalizado' }} />
    </Stack>
  );
}