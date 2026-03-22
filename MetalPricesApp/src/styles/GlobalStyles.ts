import { StyleSheet } from 'react-native';

/**
 * Global styling tokens and layout constants
 * Centralizes common values like background colors and shadows
 */
export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
});

export const Colors = {
  primary: '#1A1A1A',
  secondary: '#666666',
  background: '#F8F9FA',
  white: '#FFFFFF',
  border: '#EEEEEE',
  success: '#4CAF50',
  error: '#F44336',
  textHeader: '#1A1A1A',
  textSecondary: '#666666',
};
