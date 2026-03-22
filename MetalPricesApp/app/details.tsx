import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { MetalData } from '@/src/navigation/types';
import { styles } from '@/src/styles/DetailsScreen.styles';

/**
 * Details Screen for Expo Router
 * Uses local search params to receive metal data
 */
export default function DetailsScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  
  // Parse metal data from params
  const metal: MetalData = params.metal ? JSON.parse(params.metal as string) : null;

  if (!metal) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Metal data not found</Text>
      </SafeAreaView>
    );
  }

  const isPositive = metal.change >= 0;

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: `${metal.name} Details`,
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: '#1A1A1A'
        }} 
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={[styles.hero, { backgroundColor: metal.color + '20' }]}>
          <View style={[styles.iconContainer, { backgroundColor: metal.color }]}>
            <Text style={styles.symbolLarge}>{metal.symbol}</Text>
          </View>
          <Text style={styles.name}>{metal.name}</Text>
          <Text style={styles.price}>${metal.price.toLocaleString()}</Text>
          <View style={[
            styles.changeBadge,
            { backgroundColor: isPositive ? '#E8F5E9' : '#FFEBEE' }
          ]}>
            <Text style={[
              styles.changeText,
              { color: isPositive ? '#4CAF50' : '#F44336' }
            ]}>
              {isPositive ? '▲' : '▼'} {Math.abs(metal.change)}% Today
            </Text>
          </View>
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>About {metal.name}</Text>
          <Text style={styles.description}>{metal.description}</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Market Cap</Text>
              <Text style={styles.statValue}>$12.5B</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Circulation</Text>
              <Text style={styles.statValue}>Heavy</Text>
            </View>
          </View>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.buyButton} activeOpacity={0.8}>
          <Text style={styles.buyButtonText}>Trade {metal.name}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

