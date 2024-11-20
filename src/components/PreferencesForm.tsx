import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TextInput } from 'react-native';

interface EnergyPreferences {
  renewablePriority: boolean;
  lowDemandOnly: boolean;
  preferredTime?: string;
}

interface PreferencesFormProps {
  preferences: EnergyPreferences;
  onSave: (updatedPreferences: EnergyPreferences) => void;
}

const PreferencesForm: React.FC<PreferencesFormProps> = ({ preferences, onSave }) => {
  const [renewablePriority, setRenewablePriority] = useState(preferences.renewablePriority);
  const [lowDemandOnly, setLowDemandOnly] = useState(preferences.lowDemandOnly);
  const [preferredTime, setPreferredTime] = useState(preferences.preferredTime || '');

  const handleSave = () => {
    onSave({
      renewablePriority,
      lowDemandOnly,
      preferredTime: preferredTime || undefined,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Priorizar Energias Renováveis</Text>
      <Switch value={renewablePriority} onValueChange={setRenewablePriority} />

      <Text style={styles.label}>Carregar Apenas em Horários de Baixa Demanda</Text>
      <Switch value={lowDemandOnly} onValueChange={setLowDemandOnly} />

      <Text style={styles.label}>Horário Preferido (opcional)</Text>
      <TextInput
        style={styles.input}
        placeholder="HH:mm"
        value={preferredTime}
        onChangeText={setPreferredTime}
        onBlur={handleSave}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontSize: 16, marginVertical: 8 },
  input: { borderWidth: 1, padding: 8, borderRadius: 8, borderColor: '#ddd' },
});

export default PreferencesForm;
