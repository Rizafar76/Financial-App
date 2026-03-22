import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

/**
 * Simplified Explore Screen for the metal prices app
 * Replaces the broken boilerplate
 */
export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.maxWidthWrapper}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  content: {
    padding: 24,
    paddingTop: 48,
    alignItems: 'center',
  },
  maxWidthWrapper: {
    maxWidth: 800,
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#121212',
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
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
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
