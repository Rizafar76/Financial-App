import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

// Import Screens
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';

// Create Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * AppNavigator setup using React Navigation Stack
 * Configures the navigation structure with Home and Details screens
 * Includes clean header styling for a modern financial app feel
 */
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerShadowVisible: false, // Clean, minimal look
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 18,
            color: '#1A1A1A',
          },
          headerTintColor: '#1A1A1A', // Back button color
          contentStyle: {
            backgroundColor: '#F8F9FA',
          },
        }}
      >
        {/* Home Screen */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Metal Tracker', // Custom title for Home
            headerShown: false, // We'll use a custom header in HomeScreen for better control
          }} 
        />

        {/* Details Screen */}
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={({ route }) => ({ 
            title: `${route.params.metal.name} Details`,
            headerTransparent: true, // Seamless look with hero section
            headerTitle: '', // Hide title if we want a cleaner look, or keep it
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
