import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Buttons";
import { THEME } from "../styles/contants";
import { Input } from "../components/Input";
import { ButtonGroupColors } from "../components/ButtonGroupColors";
import { useState } from "react";
import { useRouter } from "expo-router";

const CARD_COLORS = [
    {
      id: "c1",
      name: "Azul",
      colorCode: "#4446f0",
    },
    {
      id: "c2",
      name: "Verde",
      colorCode: "#4ca35b",
    },
    {
      id: "c3",
      name: "Roxo",
      colorCode: "#3f1072",
    },
    {
      id: "c4",
      name: "Rose",
      colorCode: "#970957"
    },
]

export type Form = {
  fullName: string,
  role: string,
  company?: string,
  experience: number,
  technology: string,
  technologies: string,
  cardColor: string,
}

type Error = {
  fullName?: string,
  role?: string,
  company?: string,
  experience?: string,
  technology?: string,
  technologies?: string,
  cardColor?: string,
}

export default function CadastroScreen() {
  const router = useRouter()

  const [form, setForm] = useState<{ data: Form, errors: Error }>({
    data: {
      fullName: "",
      role: "",
      company: "",
      experience: 0,
      technology: "",
      technologies: "",
      cardColor: "",
    },
    errors: { }
  })

  function handleSubmit() {
    router.push({
      pathname: "/preview",
      params: form.data
    })
  }

  function handleInputChange(fieldName: keyof Form, value: string | number) {
    setForm((currentForm) => {
      return {
        ...currentForm,
        data: {
          ...currentForm.data,
          [fieldName]: value
        }
      }
    })

    handleInputValidation(fieldName)
  }

  function handleInputValidation(field: keyof Form){
    setForm((currentForm) => {
      const { fullName, role, experience, technology, technologies } = currentForm.data
      let error: string | undefined = undefined

      switch(field){
        case "fullName":
          if (fullName.length === 0) {
            error = "Informe o nome completo"
          } else if (fullName.length < 3) {
            error = "Informe pelo menos 3 caracteres"
          }
          break
        case "role":
          if (role.length === 0) {
            error = "Informe seu cargo"
          }
          break
        case "experience":
          if (experience < 1) {
            error = "Você deve ter pelo menos 1 ano de experiência"
          }
          break
        case "technology":
          if (technology.length === 0) {
            error = "Informe sua tecnologia favorita"
          }
          break
        case "technologies":
          if (!technologies || technologies.trim().length === 0) {
            error = "Informe suas tecnologias separadas por vírgula"
          }
          break
      }

      return {
        ...currentForm,
        errors: {
          ...currentForm.errors,
          [field]: error
        }
      }
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8fbff" }}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>Cadastro</Text>
              <Text style={styles.subtitle}>Preencha seus dados de dev</Text>
            </View>

            <View style={{ gap: 12, marginBottom: 16 }}>
              <Input 
                onChangeText={(text) => handleInputChange('fullName', text)}
                label="Nome Completo"
                placeholder="Daniel Akiama"
                defaultValue={form.data.fullName}
                onChange={() => {
                  handleInputValidation("fullName")
                }}
                onBlur={() => {
                  handleInputValidation("fullName")
                }}
                errorMessage={form.errors["fullName"]}
              />
              <Input
                onChangeText={(text) => handleInputChange('role', text)}
                label="Cargo"
                placeholder="Desenvolvedor Full Stack"
                defaultValue={form.data.role}
                onChange={() => {
                  handleInputValidation("role")
                }}
                onBlur={() => {
                  handleInputValidation("role")
                }}
                errorMessage={form.errors["role"]}
              />
              <Input
                onChangeText={(text) => handleInputChange('company', text)}
                label="Empresa (opcional)"
                placeholder="UNIVAG"
                defaultValue={form.data.company}
                onChange={() => {
                  handleInputValidation("company")
                }}
                onBlur={() => {
                  handleInputValidation("company")
                }}
                errorMessage={form.errors["company"]}
              />
              <Input 
                onChangeText={(text) => handleInputChange('experience', text ? parseInt(text) : 0)}
                label="Anos de Experiência"
                placeholder="4"
                keyboardType="numeric"
                defaultValue={form.data.experience ? form.data.experience.toString() : ""}
                onChange={() => {
                  handleInputValidation("experience")
                }}
                onBlur={() => {
                  handleInputValidation("experience")
                }}
                errorMessage={form.errors["experience"]}
              />
              <Input 
                onChangeText={(text) => handleInputChange('technology', text)}
                label="Tecnologia Favorita"
                placeholder="React Native"
                defaultValue={form.data.technology}
                onChange={() => {
                  handleInputValidation("technology")
                }}
                onBlur={() => {
                  handleInputValidation("technology")
                }}
                errorMessage={form.errors["technology"]}
              />
              <Input 
                onChangeText={(text) => handleInputChange('technologies', text)}
                label="Outras Tecnologias (separadas por vírgula)"
                placeholder="TypeScript, Expo, Node.js"
                defaultValue={form.data.technologies}
                onChange={() => {
                  handleInputValidation("technologies")
                }}
                onBlur={() => {
                  handleInputValidation("technologies")
                }}
                errorMessage={form.errors["technologies"]}
              />
            </View>

            <ButtonGroupColors onSelect={(colorCode) => handleInputChange('cardColor', colorCode)} group={CARD_COLORS} />
            
            <View style={styles.footerContainer}>
              <Button 
                onPress={handleSubmit}
                label="Gerar Cartão"
                disabled={
                  !form.data.fullName || 
                  !form.data.role || 
                  form.data.experience < 1 ||
                  !form.data.technology ||
                  !form.data.technologies ||
                  Object.entries(form.errors).filter(([key, value]) => !!value).length > 0
                }
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 24,
    gap: 10,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 4,
  },
  title: {
    color: THEME.colors.heading,
    fontSize: THEME.text.heading.h3,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 22,
  },
  footerContainer: {
    flexDirection: "column",
    gap: 12,
    marginTop: 20,
  },
  subtitle: {
    color: THEME.colors.subtitle,
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
});