// App.js - VERSÃO CORRIGIDA
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importações das telas
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import DriversScreen from './src/screens/DriversScreen';
import TeamsScreen from './src/screens/TeamsScreen';
import CircuitsScreen from './src/screens/CircuitsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator para as principais funcionalidades
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0A0A0A',
          borderTopColor: '#222222',
          height: 60,
        },
        tabBarActiveTintColor: '#E10600',
        tabBarInactiveTintColor: '#666666',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen 
        name="Home" // MUDADO: era "HomeTab" - precisa bater com o HomeScreen.js
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Dashboard" // MUDADO: era "DashboardTab"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Icon name="dashboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Drivers" // MUDADO: era "DriversTab"
        component={DriversScreen}
        options={{
          tabBarLabel: 'Pilotos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Teams" // MUDADO: era "TeamsTab"
        component={TeamsScreen}
        options={{
          tabBarLabel: 'Equipes',
          tabBarIcon: ({ color, size }) => (
            <Icon name="groups" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" // MUDADO: era "ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Navegador principal
function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* Tela de Login */}
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      
      {/* Tabs principais */}
      <Stack.Screen 
        name="Main" 
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      
      {/* Telas adicionais (se precisar fora das tabs) */}
      <Stack.Screen 
        name="Circuits" 
        component={CircuitsScreen}
        options={{ 
          title: 'Circuitos 2025',
          headerStyle: {
            backgroundColor: '#E10600',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}