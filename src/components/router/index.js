import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import Home from '../../pages/Home'
import Lojas from '../../pages/Lojas'
import Produtos from '../../pages/Produtos'
import Login from '../../pages/Login'



const Tab = createMaterialBottomTabNavigator();

const Routes = () => {
    return (
        <Tab.Navigator inactiveColor="rgba(255, 255, 255, 0.5)" activeColor="#fff">
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    //#983DFF
                    tabBarColor: '#000',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Produtos"
                component={Produtos}
                options={{
                    tabBarLabel: 'Produtos',
                    //#FF7B3D
                    tabBarColor: '#111111',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="basket" color={color} size={26} />
                    ),
                }}
            />


            <Tab.Screen
                name="Lojas"
                component={Lojas}
                options={{
                    tabBarLabel: 'Lojas',
                    tabBarColor: '#252525',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="heart" color={color} size={26} />
                    ),
                }}
            />

<Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarLabel: 'Login',
                    tabBarColor: '#323232',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" color={color} size={26} />
                    ),
                }}
            />

{/* <Tab.Screen
                name="Lojas"
                component={}
                options={{
                    tabBarLabel: 'Lojas',
                    tabBarColor: '#FF6800',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="heart" color={color} size={26} />
                    ),
                }}
            /> */}
        </Tab.Navigator>
    )
}

export default Routes