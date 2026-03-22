import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

/**
 * Simplified Explore Screen for the metal prices app
 * Replaces the broken boilerplate
 */
export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Market Analysis</Text>
        <Text style={styles.subtitle}>Insights and trends for precious metals</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Global Trends</Text>
          <Text style={styles.cardText}>
            Gold prices are showing steady growth due to market fluctuations. Silver remains a strong diversification asset.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Expert Predictions</Text>
          <Text style={styles.cardText}>
            Analysts predict a bullish run for Platinum in the coming quarter.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666666',
  },
});
