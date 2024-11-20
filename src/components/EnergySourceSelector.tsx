import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Definição do tipo para uma fonte de energia
interface EnergySource {
  id: string;
  name: string;
}

// Propriedades esperadas pelo componente
interface EnergySourceSelectorProps {
  sources: EnergySource[];
  onSelect: (id: string) => void;
}

const EnergySourceSelector: React.FC<EnergySourceSelectorProps> = ({ sources, onSelect }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fontes de Energia</Text>
      {sources.map((source) => (
        <TouchableOpacity 
          key={source.id} 
          style={styles.sourceButton} 
          onPress={() => onSelect(source.id)}
        >
          <Text>{source.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  sourceButton: { padding: 12, marginBottom: 8, backgroundColor: '#f0f0f0', borderRadius: 8 },
});

export default EnergySourceSelector;
