import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function EcoCheckScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Eco Check 🌞</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Sunlight Level: 85%</Text>
        <Text style={styles.label}>Humidity: 65%</Text>
        <Text style={styles.label}>Soil Moisture: 72%</Text>
      </View>

      <View style={styles.emojiRow}>
        <Text style={styles.emoji}>🪴</Text>
        <Text style={styles.emoji}>🌿</Text>
        <Text style={styles.emoji}>🌱</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F8E9', padding: 20 },
  header: { fontSize: 32, fontWeight: 'bold', color: '#2E7D32', marginBottom: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 2,
  },
  label: { fontSize: 16, marginBottom: 10 },
  emojiRow: { flexDirection: 'row', justifyContent: 'space-around' },
  emoji: { fontSize: 36 },
});
