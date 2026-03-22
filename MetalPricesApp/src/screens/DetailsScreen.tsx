import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DetailsScreenRouteProp } from '../navigation/types';
import { styles } from '../styles/DetailsScreen.styles';

/**
 * DetailsScreen component
 * Displays in-depth information about a specific metal
 * Receives metal data via navigation params
 */
export const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation();
  const { metal } = route.params;

  const isPositive = metal.change >= 0;

  return (
    <SafeAreaView style={styles.container}>
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
};

