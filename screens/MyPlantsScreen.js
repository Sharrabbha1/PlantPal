import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const rows = [
  ['🌿', '🌱', '🌾'],
  ['🪴', '🪴', '🪴'],
  ['🍀', '🪴', '+']
];

export default function MyPlantsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Plants</Text>

      {rows.map((row, i) => (
        <View key={i} style={styles.shelf}>
          {row.map((plant, j) =>
            plant === '+' ? (
              <TouchableOpacity key={j} style={styles.addPlant}>
                <Text style={styles.addText}>＋</Text>
              </TouchableOpacity>
            ) : (
              <View key={j} style={styles.plantBox}>
                <Text style={styles.plantEmoji}>{plant}</Text>
              </View>
            )
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F8E9', padding: 20 },
  header: { fontSize: 32, fontWeight: 'bold', color: '#2E7D32', marginBottom: 20 },
  shelf: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 },
  plantBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    elevation: 2,
    alignItems: 'center',
    width: 70,
    height: 70,
    justifyContent: 'center',
  },
  plantEmoji: { fontSize: 32 },
  addPlant: {
    backgroundColor: '#E8F5E9',
    borderColor: '#4CAF50',
    borderWidth: 2,
    borderRadius: 16,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: { fontSize: 36, color: '#4CAF50' },
});
