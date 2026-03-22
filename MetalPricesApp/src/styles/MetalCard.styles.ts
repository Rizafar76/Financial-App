import { StyleSheet, useWindowDimensions } from 'react-native';
import { Colors, Spacing, Typography, BorderRadius, GlobalStyles } from './GlobalStyles';

export const getStyles = (colorScheme: 'light' | 'dark') => {
  const theme = Colors[colorScheme];
  
  const styles = {
    cardWrapper: {
      marginBottom: Spacing.l,
      flex: 1,
      alignSelf: 'stretch' as const,
      width: '100%' as any,
    },
    card: {
      backgroundColor: theme.surface,
      borderRadius: 24, // More premium rounded corners
      borderWidth: 1,
      borderColor: theme.border,
      overflow: 'hidden' as const,
      ...GlobalStyles.cardShadow,
      minHeight: 160, // Reduced for minimalism
    },
    header: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
      padding: Spacing.m,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 12,
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      marginRight: Spacing.m,
    },
    mainInfo: {
      flex: 1,
    },
    name: {
      ...Typography.subtitle,
      fontWeight: '700' as const,
      color: theme.text,
    },
    symbol: {
      ...Typography.caption,
      color: theme.textMuted,
      textTransform: 'uppercase' as const,
      letterSpacing: 1,
    },
    content: {
      paddingHorizontal: Spacing.m,
      paddingBottom: Spacing.m,
      alignItems: 'center' as const,
    },
    priceContainer: {
      alignItems: 'center' as const,
    },
    price: {
      ...Typography.header1,
      fontSize: 32,
      color: theme.text,
    },
    changeContainer: {
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
      marginTop: 4,
      paddingHorizontal: 10,
      paddingVertical: 2,
      borderRadius: 10,
    },
    changeText: {
      ...Typography.caption,
      fontWeight: '800' as const,
      fontSize: 12,
    },
    // Background Overlay Styles
    backgroundContainer: {
      ...StyleSheet.absoluteFillObject,
      zIndex: -1,
      opacity: 0.15, // Subtle background
    },
    backgroundImage: {
      width: '100%' as any,
      height: '100%' as any,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.surface,
      opacity: 0.85, // Layer for readability
      zIndex: -1,
    },
    // Error State
    errorContainer: {
      padding: Spacing.l,
      alignItems: 'center' as const,
    },
    errorText: {
      ...Typography.body,
      color: theme.error,
      textAlign: 'center' as const,
      marginTop: 8,
    }
  };

  return StyleSheet.create(styles);
};
