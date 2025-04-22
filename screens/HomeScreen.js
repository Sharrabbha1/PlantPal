import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>Home</Text>

        {/* ROOM STATUS CARDS */}
        <View style={styles.roomCard}>
          <View style={styles.roomGroup}>
            <View style={styles.roomBox}>
              <Text style={styles.roomLabel}>🌞</Text>
              <Text style={styles.roomText}>Living Room</Text>
              <Text style={styles.roomStat}>100%</Text>
            </View>
            <View style={styles.roomBox}>
              <Text style={styles.roomLabel}>💧</Text>
              <Text style={styles.roomText}>Kitchen</Text>
              <Text style={styles.roomStat}>50%</Text>
            </View>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>

        {/* URGENT CARE */}
        <View style={styles.careCard}>
          <View style={styles.careHeader}>
            <Text style={styles.careTitle}>Urgent Care</Text>
            <Text style={styles.badge}>28%</Text>
          </View>
          <View style={styles.iconRow}>
            <Text style={styles.emoji}>💧</Text>
            <Text style={styles.emoji}>🌞</Text>
            <Text style={styles.emoji}>🪴</Text>
          </View>
        </View>

        {/* UPCOMING CARE */}
        <View style={styles.careCard}>
          <Text style={styles.careTitle}>Upcoming Care</Text>
          <View style={styles.iconRow}>
            <Text style={styles.emoji}>🪴</Text>
            <Text style={styles.emoji}>🪴</Text>
            <Text style={styles.emoji}>🪴</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F8E9', padding: 20 },
  header: { fontSize: 32, fontWeight: 'bold', color: '#2E7D32', marginBottom: 24 },

  roomCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E0F2F1',
    padding: 16,
    borderRadius: 20,
    marginBottom: 20,
  },
  roomGroup: { flexDirection: 'row', gap: 20 },
  roomBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
    alignItems: 'center',
    width: 100,
  },
  roomLabel: { fontSize: 24 },
  roomText: { fontSize: 14, marginTop: 6, fontWeight: '600' },
  roomStat: { fontSize: 16, color: '#4CAF50', marginTop: 4 },
  arrow: { fontSize: 26, color: '#999' },

  careCard: {
    backgroundColor: '#E0F2F1',
    padding: 16,
    borderRadius: 20,
    marginBottom: 20,
  },
  careHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  careTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  badge: {
    backgroundColor: '#E53935',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 14,
    fontWeight: '600',
  },
  iconRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  emoji: { fontSize: 40 },
});
