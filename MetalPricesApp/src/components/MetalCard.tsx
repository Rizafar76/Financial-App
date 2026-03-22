import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MetalData } from '../navigation/types';
import { styles } from '../styles/MetalCard.styles';

interface MetalCardProps {
  metal: MetalData;
  onPress: () => void;
}

/**
 * A clean, modern card for displaying metal price information
 * Features a minimalist design with price change indicators
 */
export const MetalCard: React.FC<MetalCardProps> = ({ metal, onPress }) => {
  const isPositive = metal.change >= 0;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.colorIndicator, { backgroundColor: metal.color }]} />
      
      <View style={styles.content}>
        <View>
          <Text style={styles.name}>{metal.name}</Text>
          <Text style={styles.symbol}>{metal.symbol}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${metal.price.toLocaleString()}</Text>
          <Text style={[
            styles.change,
            { color: isPositive ? '#4CAF50' : '#F44336' }
          ]}>
            {isPositive ? '+' : ''}{metal.change}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

