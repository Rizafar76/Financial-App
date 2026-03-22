import React from 'react';
import { View, Text, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Spacing, Typography, BorderRadius, MAX_CONTENT_WIDTH } from '../styles/GlobalStyles';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  rightComponent?: React.ReactNode;
}

/**
 * Premium Header Component with Glassmorphism Support
 */
export const AppHeader: React.FC<AppHeaderProps> = ({ title, subtitle, rightComponent }) => {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  const { width } = useWindowDimensions();
  const isTablet = width > 600;

  const content = (
    <View style={[
      styles.container, 
      { 
        paddingTop: insets.top + Spacing.s,
        paddingLeft: insets.left + Spacing.m,
        paddingRight: insets.right + Spacing.m,
      },
      isTablet && styles.tabletContainer
    ]}>
      <View style={styles.contentRow}>
        {(title || subtitle) && (
          <View style={styles.titleArea}>
            {title && <Text style={[styles.title, { color: theme.text }]}>{title}</Text>}
            {subtitle && (
              <Text style={[styles.subtitle, { color: theme.textMuted }]}>{subtitle}</Text>
            )}
          </View>
        )}
        {rightComponent && <View>{rightComponent}</View>}
      </View>
      {(title || subtitle || rightComponent) && (
        <View style={[styles.divider, { backgroundColor: theme.border }]} />
      )}
    </View>
  );

  if (Platform.OS === 'ios') {
    return (
      <BlurView intensity={80} tint={colorScheme} style={styles.headerWrapper}>
        {content}
      </BlurView>
    );
  }

  return (
    <View style={[styles.headerWrapper, { backgroundColor: theme.glass }]}>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    alignItems: 'center', // Essential for centering tabletContainer
  },
  container: {
    paddingBottom: Spacing.s,
  },
  tabletContainer: {
    maxWidth: MAX_CONTENT_WIDTH,
    width: '100%',
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: Spacing.s,
  },
  titleArea: {
    flex: 1,
  },
  title: {
    ...Typography.header1,
  },
  subtitle: {
    ...Typography.body,
    marginTop: 2,
  },
  divider: {
    height: 1,
    marginTop: Spacing.s,
    opacity: 0.5,
  },
});
