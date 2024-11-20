import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Tipo para as propriedades do status
interface ChargingStatus {
  message: string;
  percentage: number;
}

// Propriedades esperadas pelo componente
interface ChargingStatusCardProps {
  status: ChargingStatus;
}

const ChargingStatusCard: React.FC<ChargingStatusCardProps> = ({ status }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.statusText}>{status.message}</Text>
      <Text style={styles.statusDetails}>Carregando: {status.percentage}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 16, margin: 16, backgroundColor: '#fff', borderRadius: 8, elevation: 2 },
  statusText: { fontSize: 18, fontWeight: 'bold' },
  statusDetails: { marginTop: 4, fontSize: 14, color: '#555' },
});

export default ChargingStatusCard;
