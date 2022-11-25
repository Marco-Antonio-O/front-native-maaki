import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
const Algo = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("Home")
    }}>

      <Text>Aqui no hay nada, vayase porfas</Text>

    </TouchableOpacity>
  )
}

export default Algo