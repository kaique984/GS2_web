import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Button } from 'react-native';
import ChargingStatusCard from '../components/ChargingStatusCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator'; 

type ChargingStatusScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ChargingStatusScreen'>;

const initialChargingStatuses = [
  { id: '1', message: 'Carregando...', percentage: 80, vehicle: 'Tesla Model 3' },
  { id: '2', message: 'Em espera', percentage: 50, vehicle: 'Nissan Leaf' },
  { id: '3', message: 'Completado', percentage: 100, vehicle: 'Chevrolet Bolt' },
];

const ChargingStatusScreen: React.FC = () => {
  const [chargingStatuses, setChargingStatuses] = useState(initialChargingStatuses);
  const navigation = useNavigation<ChargingStatusScreenNavigationProp>(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setChargingStatuses((prevStatuses) => prevStatuses.map((status) => {
        if (status.percentage < 100 && status.message === 'Carregando...') {
          return { ...status, percentage: status.percentage + 10 };
        }
        return status;
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Função de navegação para EnergyPreferencesScreen
  const navigateToPreferences = () => {
    navigation.navigate('EnergyPreferencesScreen');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chargingStatuses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Text style={styles.vehicleName}>{item.vehicle}</Text>
            <ChargingStatusCard status={{ message: item.message, percentage: item.percentage }} />
          </View>
        )}
      />
      <Button title="Ir para Preferências de Energia" onPress={navigateToPreferences} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  cardContainer: { marginBottom: 16, paddingHorizontal: 16 },
  vehicleName: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
});

export default ChargingStatusScreen;
