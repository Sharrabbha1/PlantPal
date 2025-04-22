import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const careItems = [
  { emoji: '🪴', title: 'Care for this plant', desc: 'The plant is in good health' },
  { emoji: '🌱', title: 'Required soil renewal', desc: 'Water twice a week' },
  { emoji: '💧', title: 'Water your plant today (Living Room)', desc: 'High humidity, needs sunlight' },
];

const suggestions = [
  { emoji: '🌞', title: 'Increase sunlight exposure', desc: 'for healthier growth' },
  { emoji: '💧', title: 'Check soil moisture', desc: 'for proper watering' },
  { emoji: '🐛', title: 'Pest control', desc: 'preventing plant disease' },
  { emoji: '✂️', title: 'Trim yellow leaves', desc: 'encourage new growth' },
];

export default function CareScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Care</Text>

      <TouchableOpacity style={styles.viewAll}>
        <Text style={styles.viewText}>View all</Text>
      </TouchableOpacity>

      {careItems.map((item, idx) => (
        <View key={idx} style={styles.card}>
          <Text style={styles.emoji}>{item.emoji}</Text>
          <View style={styles.textBlock}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>
      ))}

      <Text style={styles.subheading}>Suggestions</Text>

      {suggestions.map((item, idx) => (
        <View key={idx} style={styles.card}>
          <Text style={styles.emoji}>{item.emoji}</Text>
          <View style={styles.textBlock}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F8E9', padding: 20 },
  header: { fontSize: 32, fontWeight: 'bold', color: '#2E7D32', marginBottom: 10 },
  viewAll: { alignSelf: 'flex-end', marginBottom: 20 },
  viewText: { color: '#388E3C', fontWeight: 'bold' },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
  },
  emoji: { fontSize: 28, marginRight: 12 },
  textBlock: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold' },
  desc: { fontSize: 13, color: '#555' },
  arrow: { fontSize: 24, color: '#aaa' },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#2E7D32',
  },
});
