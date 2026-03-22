import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Spacing, Typography, BorderRadius, GlobalStyles } from './GlobalStyles';

const { width, height } = Dimensions.get('window');

export const getStyles = (colorScheme: 'light' | 'dark') => {
  const theme = Colors[colorScheme];
  
  return StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: Spacing.l,
    },
    modalContainer: {
      width: '100%',
      maxWidth: 400,
      backgroundColor: theme.surface,
      borderRadius: BorderRadius.xl,
      padding: Spacing.l,
      ...GlobalStyles.cardShadow,
      borderWidth: 1,
      borderColor: theme.border,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: Spacing.l,
    },
    title: {
      ...Typography.header2,
      color: theme.text,
    },
    closeButton: {
      padding: Spacing.xs,
    },
    content: {
      marginBottom: Spacing.xl,
    },
    label: {
      ...Typography.caption,
      color: theme.textMuted,
      marginBottom: Spacing.s,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.background,
      borderRadius: BorderRadius.m,
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: Spacing.m,
      height: 60,
    },
    currencyPrefix: {
      ...Typography.header2,
      color: theme.textMuted,
      marginRight: Spacing.xs,
    },
    input: {
      flex: 1,
      ...Typography.header2,
      color: theme.text,
      padding: 0, // Reset default padding
    },
    helperText: {
      ...Typography.caption,
      color: theme.textMuted,
      marginTop: Spacing.s,
    },
    footer: {
      gap: Spacing.m,
    },
  });
};
