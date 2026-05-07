# DevCard - Seu Cartão de Visita Digital Mobile 📱

Um aplicativo Expo que permite criar cartões de visita digitais para desenvolvedores mobile de forma rápida e prática.

## 📋 Visão Geral

DevCard é uma aplicação mobile desenvolvida com Expo e React Native que facilita a criação de cartões de visita digitais para desenvolvedores. Com uma interface intuitiva, você pode rapidamente cadastrar seus dados profissionais e gerar um cartão visual profissional.

## 🚀 Getting Started

### Instalação

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o app:

   ```bash
   npx expo start
   ```

3. Escolha uma opção para executar:
   - [development build](https://docs.expo.dev/develop/development-builds/introduction/)
   - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go)

## 📱 Telas da Aplicação

### 1️⃣ Tela Inicial (Welcome)

**Arquivo:** [src/app/index.tsx](src/app/index.tsx)

**Descrição:** Tela de boas-vindas que apresenta o aplicativo DevCard. É o primeiro ponto de contato do usuário, com um título atrativo e subtítulo explicativo sobre o propósito do app.

**Funcionalidades:**
- Apresentação visual do nome "DevCard"
- Subtítulo descritivo
- Botão "Criar meu cartão" que navega para a tela de cadastro

**Screenshot:**
![DevCard Welcome Screen](assets\images\screenshots\ExpoGoHome.jpg)

---

### 2️⃣ Tela de Cadastro

**Arquivo:** [src/app/cadastro.tsx](src/app/cadastro.tsx)

**Descrição:** Formulário completo para coleta de dados profissionais do desenvolvedor. Esta tela valida os dados em tempo real e garante que todas as informações obrigatórias sejam preenchidas corretamente.

**Campos:**
- **Nome Completo** ⭐ (obrigatório - mínimo 3 caracteres)
- **Cargo** ⭐ (obrigatório)
- **Empresa** (opcional)
- **Anos de Experiência** ⭐ (obrigatório - deve ser maior que zero)
- **Tecnologias/Especialidade** ⭐ (obrigatório)
- **Cor do Cartão** (opções: azul, verde, roxo)

**Validações:**
- Nome com mínimo de 3 caracteres
- Todos os campos obrigatórios preenchidos
- Anos de experiência deve ser um número positivo

**Screenshot:**
![DevCard Registration Screen](assets\images\screenshots\ExpoGoCadastro.jpg)

---

### 3️⃣ Tela de Preview

**Arquivo:** [src/app/preview.tsx](src/app/preview.tsx)

**Descrição:** Visualização em tempo real do cartão de visita digital com todos os dados cadastrados. O cartão exibe informações de forma profissional com cores personalizáveis e um badge de nível técnico calculado automaticamente.

**Elementos Exibidos:**
- Avatar com a inicial do nome
- Nome completo do desenvolvedor
- Cargo profissional
- Empresa (se informada)
- Especialidade técnica
- **Badge de Nível** (calculado automaticamente):
  - 🥉 **Júnior:** 0-2 anos de experiência
  - 🥈 **Pleno:** 2-5 anos de experiência
  - 🥇 **Sênior:** 5+ anos de experiência

**Cores Disponíveis:**
- 🔵 Azul (#1976D2)
- 🟢 Verde (#388E3C)
- 🟣 Roxo (#7B1FA2)

**Ações:**
- Voltar para editar dados
- Confirmar e prosseguir para sucesso
- Compartilhar cartão

**Screenshot:**
![DevCard Preview Screen](assets\images\screenshots\ExpoGoCard.jpg)

---

### 4️⃣ Tela de Sucesso

**Arquivo:** [src/app/sucesso.tsx](src/app/sucesso.tsx)

**Descrição:** Tela de confirmação que aparece após a criação bem-sucedida do cartão. Celebra a conclusão do processo e oferece a opção de criar um novo cartão.

**Elementos:**
- Ícone de sucesso (checkmark) em círculo verde
- Mensagem de parabéns
- Texto motivacional
- Botão "Criar outro cartão" que retorna à tela inicial

**Screenshot:**
![DevCard Success Screen](assets\images\screenshots\ExpoGoFinalizado.jpg)

---

## 🎨 Estrutura do Projeto

```
src/
├── app/
│   ├── _layout.tsx      # Configuração de rotas
│   ├── index.tsx        # Tela inicial (Welcome)
│   ├── cadastro.tsx     # Tela de cadastro
│   ├── preview.tsx      # Tela de preview do cartão
│   └── sucesso.tsx      # Tela de sucesso
├── components/          # Componentes reutilizáveis
└── constants/           # Constantes do app
```

## 🔧 Tecnologias Utilizadas

- **Expo** - Framework para desenvolvimento mobile
- **React Native** - Framework para UI mobile
- **Expo Router** - Roteamento baseado em arquivos
- **TypeScript** - Tipagem estática

## 📚 Aprenda Mais

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)

## 🤝 Comunidade

- [Expo GitHub](https://github.com/expo/expo)
- [Expo Discord Community](https://chat.expo.dev)
