import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { MetalData } from '../navigation/types';
import { getStyles } from '../styles/MetalCard.styles';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '../styles/GlobalStyles';

// Background Assets
const BACKGROUND_IMAGES: Record<string, any> = {
  XAU: require('../../assets/images/metals/gold_bg.png'),
  XAG: require('../../assets/images/metals/silver_bg.png'),
  XPT: require('../../assets/images/metals/platinum_bg.png'),
  XPD: require('../../assets/images/metals/palladium_bg.png'),
};

interface MetalCardProps {
  metal: MetalData;
  onPress: () => void;
  error?: string;
}

/**
 * MetalCard Component
 * Modern vertical layout with premium metallic backgrounds and structured stats.
 */
export const MetalCard: React.FC<MetalCardProps> = ({ metal, onPress, error }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  const styles = getStyles(colorScheme);
  const scale = useSharedValue(1);

  const isPositive = metal.change >= 0;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => (scale.value = withSpring(0.97));
  const handlePressOut = () => (scale.value = withSpring(1));

  // Dynamic icon based on metal
  const getMetalIcon = (symbol: string) => {
    switch (symbol) {
      case 'XAU': return 'gold';
      case 'XAG': return 'silverware-clean';
      case 'XPT': return 'diamond-stone';
      case 'XPD': return 'molecule';
      default: return 'help-circle';
    }
  };

  const bgImage = BACKGROUND_IMAGES[metal.symbol];

  return (
    <Animated.View style={[styles.cardWrapper, animatedStyle]}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
        style={styles.card}
      >
        {/* Metallic Background Layer */}
        {bgImage && (
          <View style={styles.backgroundContainer}>
            <Image 
              source={bgImage} 
              style={styles.backgroundImage as any} 
              resizeMode="cover"
            />
            <View style={styles.overlay} />
          </View>
        )}

        <View style={styles.header}>
          <View style={[styles.iconContainer, { backgroundColor: metal.color + '20' }]}>
            <MaterialCommunityIcons name={getMetalIcon(metal.symbol) as any} size={24} color={metal.color} />
          </View>
          <View style={styles.mainInfo}>
            <Text style={styles.name}>{metal.name}</Text>
            <Text style={styles.symbol}>{metal.symbol}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={theme.textMuted} />
        </View>

        {error ? (
          <View style={styles.errorContainer}>
            <Ionicons name="alert-circle" size={32} color={theme.error} />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : (
          <View style={styles.content}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>${metal.price.toLocaleString()}</Text>
              <View style={[
                  styles.changeContainer,
                  { backgroundColor: isPositive ? theme.success + '15' : theme.error + '15' }
              ]}>
                <Ionicons 
                  name={isPositive ? 'trending-up' : 'trending-down'} 
                  size={14} 
                  color={isPositive ? theme.success : theme.error} 
                />
                <Text style={[
                  styles.changeText,
                  { color: isPositive ? theme.success : theme.error, marginLeft: 4 }
                ]}>
                  {isPositive ? '+' : ''}{metal.change}%
                </Text>
              </View>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};
