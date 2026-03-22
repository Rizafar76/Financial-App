import { Tabs } from 'expo-router';
import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Colors, MAX_CONTENT_WIDTH } from '@/src/styles/GlobalStyles';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';

/**
 * Simplified TabLayout for Expo Router
 * Enhanced with responsive centered tab bar for tablets.
 */
export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  const { width } = useWindowDimensions();
  const isTablet = width > 600;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.secondary,
        tabBarInactiveTintColor: theme.textMuted,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.surface,
          borderTopColor: theme.border,
          height: 60,
          paddingBottom: 8,
          ...(isTablet ? {
            alignSelf: 'center',
            maxWidth: MAX_CONTENT_WIDTH,
            borderRadius: 30,
            bottom: 20,
            marginHorizontal: (width - MAX_CONTENT_WIDTH) / 2,
            position: 'absolute',
            left: 0,
            right: 0,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            elevation: 5,
          } : {}),
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Market',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="stats-chart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Analysis',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="analytics" color={color} />,
        }}
      />
    </Tabs>
  );
}
