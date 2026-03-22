import { StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { Colors, Spacing, Typography, BorderRadius, GlobalStyles, MAX_CONTENT_WIDTH } from './GlobalStyles';

export const getStyles = (colorScheme: 'light' | 'dark', width: number) => {
  const theme = Colors[colorScheme];
  const isTablet = width > 600;
  
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {}, // Failsafe for legacy access
    scrollContent: {
      paddingBottom: Spacing.xxl,
    },
    hero: {
      paddingTop: Spacing.xxl * 1.5,
      paddingBottom: Spacing.m,
      alignItems: 'center',
      borderBottomLeftRadius: BorderRadius.xl,
      borderBottomRightRadius: BorderRadius.xl,
    },
    iconContainer: {
      width: 80,
      height: 80,
      borderRadius: BorderRadius.l,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: Spacing.s,
      ...GlobalStyles.cardShadow,
    },
    symbolLarge: {
      ...Typography.header1,
      color: theme.surface,
      fontSize: 28,
    },
    name: {
      ...Typography.header2,
      color: theme.text,
      marginTop: Spacing.s,
    },
    price: {
      ...Typography.header1,
      fontSize: 48,
      color: theme.text,
      marginTop: Spacing.m, // Increased space from name
      marginBottom: Spacing.xs,
    },
    changeBadge: {
      paddingHorizontal: Spacing.m,
      paddingVertical: Spacing.xs,
      borderRadius: BorderRadius.full,
      marginTop: Spacing.s,
    },
    changeText: {
      ...Typography.caption,
      fontWeight: '800',
    },
    infoSection: {
      padding: Spacing.l,
      ...(isTablet ? {
        alignSelf: 'center',
        maxWidth: 800,
        width: '100%',
      } : {}),
    },
    sectionTitle: {
      ...Typography.header2,
      color: theme.text,
      marginBottom: Spacing.s,
    },
    description: {
      ...Typography.body,
      color: theme.textMuted,
      lineHeight: 24,
      marginBottom: Spacing.l,
    },
    statsGrid: {
      flexDirection: 'column',
      gap: Spacing.m,
      marginBottom: Spacing.xl,
    },
    statRow: {
      flexDirection: 'row',
      gap: Spacing.m,
    },
    statBox: {
      flex: 1,
      flexGrow: 1,
      minWidth: isTablet ? 180 : (width - Spacing.l * 2 - Spacing.m) / 2, // Perfect 2-column grid
      backgroundColor: theme.surface,
      padding: Spacing.m,
      borderRadius: BorderRadius.m,
      borderWidth: 1,
      borderColor: theme.border,
      ...GlobalStyles.cardShadow,
    },
    statLabel: {
      ...Typography.caption,
      color: theme.textMuted,
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: 4,
    },
    statValue: {
      ...Typography.subtitle,
      color: theme.text,
      fontSize: 18,
    },
    actionContainer: {
      padding: Spacing.l,
      ...(isTablet ? {
        alignSelf: 'center',
        maxWidth: 400,
        width: '100%',
      } : {}),
    },
    backButton: {
      position: 'absolute',
      zIndex: 10,
      width: 44,
      height: 44,
      borderRadius: 22,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.glass,
      ...GlobalStyles.cardShadow,
    },
    backgroundContainer: {
      ...StyleSheet.absoluteFillObject,
      zIndex: -1,
      opacity: 0.15,
    },
    alertBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.success + '20',
      paddingHorizontal: Spacing.m,
      paddingVertical: 6,
      borderRadius: BorderRadius.full,
      marginTop: Spacing.m,
      borderWidth: 1,
      borderColor: theme.success + '40',
    },
    alertBadgeText: {
      ...Typography.caption,
      color: theme.success,
      fontWeight: '800',
      marginLeft: 6,
    },
    alertButton: {
      borderColor: theme.success,
      backgroundColor: theme.success + '05',
      marginTop: Spacing.m,
    },
    alertButtonText: {
      color: theme.success,
      fontWeight: '700',
    }
  });
};
