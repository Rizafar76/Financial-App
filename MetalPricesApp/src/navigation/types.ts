import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

/**
 * Metal data structure for the app
 */
export interface MetalData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  description: string;
  color: string;
}

/**
 * Define the parameter list for our root stack navigator
 * This ensures type safety when navigating between screens
 */
export type RootStackParamList = {
  Home: undefined; // Home screen doesn't take any params
  Details: { metal: MetalData }; // Details screen requires metal data
};

/**
 * Helper type for navigation prop in Home Screen
 */
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

/**
 * Helper type for route prop in Details Screen
 */
export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
