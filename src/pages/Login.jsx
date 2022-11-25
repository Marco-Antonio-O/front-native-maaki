import { StatusBar } from "expo-status-bar"
import { container, text, input, button, image, text2, container2 } from "../styles/style"
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { NativeBaseProvider } from "native-base"
import { useState } from "react"
import useSession from "../hooks/useSession"
import SERVER from "../services";

export function Login({ navigation }) {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const { login } = useSession()

  const validate = () => {
    // if (form.usuario === undefined) {
    //   setErrors({ ...errors, usuario: "* Campo obligatorio" })
    //   return false
    // } else if (form.password === undefined) {
    //   setErrors({ ...errors, password: "* Campo obligatorio" })
    //   return false
    // }
    return true
  }

  const handleSubmitForm = async () => {
    const datos = {
      email: form.usuario,
      password: form.password
    }
    // console.log(datos)
    const url = `${SERVER}/login`
    const content = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    }
    const response = await fetch(url, content)
    const json = await response.json()
    if (response.ok) {
      setForm({})
      setErrors({})
      login(json.usuario)
      navigation.navigate('Inicio')
    } else {
      setErrors({ ...errors, login: json.message })
    }
  }

  const onSubmit = () => {
    validate() && handleSubmitForm()
  }

  return (
    <NativeBaseProvider>
      <View style={container}>
        <View style={container2}>
          <View>
            <Text style={text2}>Logueate para acceder</Text>
            <StatusBar style="auto" />
            <View style={input}>
              <TextInput
                name="usuario"
                style={text}
                placeholder="Usuario"
                placeholderTextColor="#a3a3a3"
                value={form.usuario}
                onChangeText={(value) => setForm({ ...form, usuario: value })}
              />
            </View>

            <View style={input}>
              <TextInput
                name="password"
                style={text}
                placeholder="Contraseña"
                placeholderTextColor="#a3a3a3"
                secureTextEntry={true}
                value={form.password}
                onChangeText={(value) => setForm({ ...form, password: value })}
              />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            </TouchableOpacity>

            <TouchableOpacity onPress={onSubmit}>
              <Text style={button}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}