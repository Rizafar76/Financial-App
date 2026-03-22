import { StyleSheet, Platform } from 'react-native';
import { Colors, Spacing, Typography, GlobalStyles, MAX_CONTENT_WIDTH } from './GlobalStyles';

export const getStyles = (colorScheme: 'light' | 'dark', width: number) => {
  const theme = Colors[colorScheme];
  const isTablet = width > 600;
  
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {}, // Failsafe for legacy access
    listContent: {
      paddingHorizontal: Spacing.m,
      paddingTop: Spacing.xxl + Spacing.m, 
      paddingBottom: Spacing.xl,
      alignSelf: isTablet ? 'center' : 'stretch',
      width: isTablet ? '100%' : 'auto',
      maxWidth: isTablet ? MAX_CONTENT_WIDTH : undefined,
    },
    // Hero section styling
    heroCard: {
      backgroundColor: theme.secondary,
      borderRadius: 24,
      padding: Spacing.l,
      marginBottom: Spacing.xl,
      ...GlobalStyles.goldGlow,
    },
    heroTitle: {
      ...Typography.caption,
      color: theme.primary,
      opacity: 0.8,
      paddingHorizontal: Spacing.xs,
    },
    heroValue: {
      ...Typography.header1,
      color: theme.primary,
      marginTop: Spacing.xs,
    },
    sectionTitle: {
      ...Typography.header2,
      color: theme.text,
      marginBottom: Spacing.m,
      paddingHorizontal: Spacing.xs,
    },
    columnWrapper: {
      justifyContent: 'space-between' as const, 
      gap: Spacing.m,
    }
  });
};
