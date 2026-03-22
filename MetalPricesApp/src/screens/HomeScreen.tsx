import React from 'react';
import { View, Text, FlatList, useWindowDimensions, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeScreenNavigationProp, MetalData } from '../navigation/types';
import { MetalCard } from '../components/MetalCard';
import { MetalCardSkeleton } from '../components/MetalCardSkeleton';
import { AppHeader } from '../components/AppHeader';
import { getStyles } from '../styles/HomeScreen.styles';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useMetalPrice } from '../hooks/useMetalPrice';

/**
 * Metal Card Wrapper
 * Handles independent fetching and loading logic for each metal
 */
const ConnectedMetalCard: React.FC<{ id: string; name: string; symbol: string; color: string; onPress: (metal: MetalData) => void }> = ({ id, name, symbol, color, onPress }) => {
  const { data, loading, error, refresh } = useMetalPrice(id);

  if (loading && !data) {
    return <MetalCardSkeleton />;
  }

  // If error, we still show the card but with error indicators (optional)
  // For now, we'll just show the last known data or a fallback
  const displayData: MetalData = data || {
    id,
    name,
    symbol,
    price: 0,
    change: 0,
    description: '',
    color,
  };

  return (
    <MetalCard 
      metal={displayData} 
      onPress={() => !loading && onPress(displayData)} 
      error={error ? 'Failed to fetch balance data' : undefined}
    />
  );
};

// Metadata for metals to initiate fetching
const METAL_METADATA = [
  { id: '1', name: 'Gold', symbol: 'XAU', color: '#D4AF37' },
  { id: '2', name: 'Silver', symbol: 'XAG', color: '#C0C0C0' },
  { id: '3', name: 'Platinum', symbol: 'XPT', color: '#E5E4E2' },
  { id: '4', name: 'Palladium', symbol: 'XPD', color: '#8E8E93' },
];

/**
 * HomeScreen component
 * Real-time data integration with independent card loading
 */
export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? 'light';
  const { width } = useWindowDimensions();
  const styles = getStyles(colorScheme, width) || {};

  const isTablet = width > 600;
  const isLaptop = width > 1024;
  const numColumns = 2;

  const handlePress = (metal: MetalData) => {
    navigation.navigate('details', { metal });
  };

  const renderHeader = () => (
    <View style={{ paddingLeft: insets.left, paddingRight: insets.right, marginBottom: 16 }}>
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>PORTFOLIO ESTIMATE (XAU)</Text>
        <Text style={styles.heroValue}>$12,450.80</Text>
      </View>
      <Text style={styles.sectionTitle}>Live Markets</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppHeader />
      
      <FlatList
        data={METAL_METADATA}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        key={`columns-${numColumns}`} 
        renderItem={({ item }) => (
          <ConnectedMetalCard
            id={item.id}
            name={item.name}
            symbol={item.symbol}
            color={item.color}
            onPress={handlePress}
          />
        )}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={[
          styles.listContent,
          { 
            paddingLeft: insets.left,
            paddingRight: insets.right,
          }
        ]}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
