// App.js - Modifique assim
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Importações
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import DriversScreen from './src/screens/DriversScreen';
import TeamsScreen from './src/screens/TeamsScreen';
import CircuitsScreen from './src/screens/CircuitsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator APENAS para Home e outras telas
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
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Drivers"
        component={DriversScreen}
        options={{
          tabBarLabel: 'Pilotos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Teams"
        component={TeamsScreen}
        options={{
          tabBarLabel: 'Equipes',
          tabBarIcon: ({ color, size }) => (
            <Icon name="groups" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile"
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

// Stack Navigator principal - Dashboard como tela separada
function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* Tela de Login */}
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      
      {/* Tab Navigator */}
      <Stack.Screen 
        name="Main" 
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      
      {/* Dashboard como tela Stack separada */}
      <Stack.Screen 
        name="Dashboard"
        component={DashboardScreen}
        options={{ 
          title: 'Dashboard F1 2025',
          headerStyle: {
            backgroundColor: '#E10600',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      
      {/* Tela de Circuits */}
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