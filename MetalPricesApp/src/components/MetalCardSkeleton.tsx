import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Colors, Spacing, BorderRadius, GlobalStyles } from '../styles/GlobalStyles';
import { useColorScheme } from '@/hooks/use-color-scheme';

/**
 * Premium Shimmer Skeleton for MetalCard
 */
export const MetalCardSkeleton: React.FC = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  const shimmerValue = new Animated.Value(0);

  useEffect(() => {
    const shimmerAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    shimmerAnimation.start();
    return () => shimmerAnimation.stop();
  }, []);

  const opacity = shimmerValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <View style={styles.cardWrapper}>
      <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        {/* Header Skeleton */}
        <View style={styles.header}>
          <Animated.View style={[styles.iconContainer, { backgroundColor: theme.border, opacity }]} />
          <View style={{ flex: 1 }}>
            <Animated.View style={[styles.skeletonLine, { width: '60%', height: 16, backgroundColor: theme.border, opacity }]} />
            <Animated.View style={[styles.skeletonLine, { width: '30%', height: 10, marginTop: 4, backgroundColor: theme.border, opacity }]} />
          </View>
        </View>
        
        <View style={styles.content}>
          {/* Price Skeleton */}
          <View style={styles.priceSection}>
            <Animated.View style={[styles.skeletonLine, { width: 120, height: 32, backgroundColor: theme.border, opacity }]} />
            <Animated.View style={[styles.skeletonLine, { width: 60, height: 16, marginTop: 12, borderRadius: 12, backgroundColor: theme.border, opacity }]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: Spacing.l,
    flex: 1,
  },
  card: {
    borderRadius: 24,
    borderWidth: 1,
    height: 160, // Match the new minimalist card height
    ...GlobalStyles.cardShadow,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.m,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginRight: Spacing.m,
  },
  content: {
    paddingHorizontal: Spacing.m,
    paddingBottom: Spacing.m,
    alignItems: 'center',
  },
  priceSection: {
    alignItems: 'center',
  },
  skeletonLine: {
    height: 16,
    borderRadius: 4,
  },
});
