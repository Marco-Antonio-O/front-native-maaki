import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../pages/Home'
import Algo from "../pages/Algo"
import { View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
        <View style={{
            backgroundColor: "#2E4053",
            flex:1,
        }}>
        <Tab.Navigator
        screenOptions={{ 
            tabBarShowLabel: true,
            tabBarStyle:{
                posotion: "absolute",
                bottom:25,
                left:10,
                right:20,
                elevation: 0,
                borderRadius:15,
                height:80,
                backgroundColor:"#E8ECF1",
                width:480
            },
        }}
        >
            <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarLabel: "Mi cuenta",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={26}
                  />
                ),
              }}
            >
            </Tab.Screen>
            <Tab.Screen 
            name='Lista' 
            component={Algo}
            options={{
                tabBarLabel: "Cosas",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="book"
                    color={color}
                    size={26}
                  />
                )
              }}
            ></Tab.Screen>
        </Tab.Navigator>
        </View>
    )
}

export default Tabs