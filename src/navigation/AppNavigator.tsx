import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChargingStatusScreen from '../screens/ChargingStatusScreen';
import EnergyPreferencesScreen from '../screens/EnergyPreferencesScreen';

// Definindo e exportando o tipo 'RootStackParamList'
export type RootStackParamList = {
  ChargingStatusScreen: undefined;
  EnergyPreferencesScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChargingStatusScreen">
        <Stack.Screen
          name="ChargingStatusScreen"
          component={ChargingStatusScreen}
          options={{ title: 'Status de Recarga' }}
        />
        <Stack.Screen
          name="EnergyPreferencesScreen"
          component={EnergyPreferencesScreen}
          options={{ title: 'Preferências de Energia' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
