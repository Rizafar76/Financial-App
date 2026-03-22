import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp, MetalData } from '../navigation/types';
import { MetalCard } from '../components/MetalCard';
import { styles } from '../styles/HomeScreen.styles';

/**
 * Mock data for the metal price tracking app
 * In a real app, this would be fetched from an API
 */
const METAL_DATA: MetalData[] = [
  {
    id: '1',
    name: 'Gold',
    symbol: 'XAU',
    price: 2150.45,
    change: 1.25,
    description: 'Gold is a precious metal that has been used for coinage, jewelry, and other arts throughout recorded history.',
    color: '#FFD700',
  },
  {
    id: '2',
    name: 'Silver',
    symbol: 'XAG',
    price: 24.85,
    change: -0.45,
    description: 'Silver is a chemical element with the symbol Ag and atomic number 47. A soft, white, lustrous transition metal.',
    color: '#C0C0C0',
  },
  {
    id: '3',
    name: 'Platinum',
    symbol: 'XPT',
    price: 915.20,
    change: 0.15,
    description: 'Platinum is a chemical element with the symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, silver-white transition metal.',
    color: '#E5E4E2',
  },
  {
    id: '4',
    name: 'Palladium',
    symbol: 'XPD',
    price: 1050.75,
    change: -1.10,
    description: 'Palladium is a chemical element with the symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal.',
    color: '#444444',
  },
];

/**
 * HomeScreen component
 * Displays a list of metals with their current prices and navigation to details
 */
export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Function to handle navigation with params
  const handlePress = (metal: MetalData) => {
    navigation.navigate('Details', { metal });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Market Overview</Text>
        <Text style={styles.subtitle}>Real-time metal price tracking</Text>
      </View>

      <FlatList
        data={METAL_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MetalCard
            metal={item}
            onPress={() => handlePress(item)}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

