import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Certifique-se de que o caminho esteja correto

// Tipando o navigation com o tipo correto
type EnergyPreferencesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EnergyPreferencesScreen'>;

// Dados de exemplo das fontes de energia
const energySources = [
  { id: '1', name: 'Solar', type: 'Renovável', status: 'Em uso' },
  { id: '2', name: 'Eólica', type: 'Renovável', status: 'Em espera' },
  { id: '3', name: 'Gasolina', type: 'Não renovável', status: 'Em uso' },
  { id: '4', name: 'Carvão', type: 'Não renovável', status: 'Não disponível' },
];

const EnergyPreferencesScreen: React.FC = () => {
  const navigation = useNavigation<EnergyPreferencesScreenNavigationProp>();

  // Estado para armazenar preferências de carregamento
  const [preferences, setPreferences] = useState({
    renewablePriority: true,  
    lowDemandOnly: false,     
    preferredTime: '22:00',   
  });

  // Função para navegar de volta
  const navigateBack = () => {
    navigation.goBack();
  };

  // Função para ajustar preferências de energia
  const adjustPreferences = () => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      renewablePriority: !prevPreferences.renewablePriority,
      lowDemandOnly: !prevPreferences.lowDemandOnly,         
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferências de Energia</Text>
      <Text style={styles.description}>Aqui você pode ajustar suas preferências de energia.</Text>

      {/* Exibindo as fontes de energia */}
      <Text style={styles.subtitle}>Fontes de Energia Utilizadas:</Text>
      <FlatList
        data={energySources}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.energyItem}>
            <Text style={styles.energyName}>{item.name}</Text>
            <Text style={styles.energyType}>{item.type} - {item.status}</Text>
          </View>
        )}
      />

      {/* Exibindo as preferências atuais */}
      <Text style={styles.subtitle}>Preferências Atuais:</Text>
      <Text>Priorizar fontes renováveis: {preferences.renewablePriority ? 'Sim' : 'Não'}</Text>
      <Text>Carregar apenas em horários de menor demanda: {preferences.lowDemandOnly ? 'Sim' : 'Não'}</Text>
      <Text>Hora preferencial de carregamento: {preferences.preferredTime}</Text>

      {/* Botão para ajustar as preferências */}
      <Button title="Ajustar Preferências" onPress={adjustPreferences} />

      {/* Botão para voltar à tela anterior */}
      <Button title="Voltar para Status de Recarga" onPress={navigateBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  description: { fontSize: 16, marginBottom: 16 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  energyItem: { marginBottom: 12, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 8 },
  energyName: { fontSize: 16, fontWeight: 'bold' },
  energyType: { fontSize: 14, color: '#666' },
});

export default EnergyPreferencesScreen;
