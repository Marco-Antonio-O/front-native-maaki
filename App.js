import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Tabs from './src/components/Tabs'
import { useEffect, useState } from "react"
import useSession from "./src/hooks/useSession"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from './src/pages/Login';

const App = () => {
  const [initial, setInitial] = useState('')
  const { usuario } = useSession()
  const Stack = createNativeStackNavigator()
  useEffect(() => {
    if(usuario === null) {
      setInitial('Login')
    } else {
      setInitial('Inicio')
    }
  })
  return (
    <>
      <NavigationContainer>
         <Stack.Navigator initialRouteName={initial}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
              }}
            />
            <Stack.Screen
              name="Inicio"
              component={Tabs}
              options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
              }}
            />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App