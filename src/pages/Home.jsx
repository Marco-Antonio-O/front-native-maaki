import React from 'react'
import { Text, TouchableOpacity, View } from "react-native"
import AnunciosList from '../components/AnunciosList'
import { containerHome, container2 } from '../styles/style'

const Home = ({ navigation }) => {
  return (
    <>
        <View style={containerHome}>
          <AnunciosList></AnunciosList>
        </View>
    </>
  )
}

export default Home