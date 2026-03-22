import { StyleSheet, Platform, PixelRatio } from 'react-native';

/**
 * Premium Financial UI Theme System
 * Focuses on minimalist design, responsive spacing, and high contrast.
 */

export const Colors = {
  light: {
    primary: '#1A1A1A',        // Deep Charcoal
    secondary: '#D4AF37',      // Metallic Gold Accent
    accent: '#B8860B',         // Dark Goldenrod
    background: '#FDFDFD',     // Clean White
    surface: '#FFFFFF',        // Pure White for cards
    border: '#F0F0F0',         // Soft Grey
    text: '#121212',           // Near Black
    textMuted: '#666666',      // Medium Grey
    success: '#10B981',        // Emerald Green
    error: '#EF4444',          // Vibrant Red
    shadow: '#000000',
    glass: 'rgba(255, 255, 255, 0.8)',
  },
  dark: {
    primary: '#FFFFFF',
    secondary: '#FFD700',      // Bright Gold
    accent: '#D4AF37',
    background: '#0A0A0A',     // True Black
    surface: '#151515',        // Slightly lighter black for cards
    border: '#2A2A2A',
    text: '#EDEDED',           // Soft White
    textMuted: '#999999',      // Darker Grey
    success: '#059669',
    error: '#DC2626',
    shadow: '#000000',
    glass: 'rgba(20, 20, 20, 0.8)',
  },
};

// Responsive Spacing System (8pt Grid)
export const Spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 48,
};

export const MAX_CONTENT_WIDTH = 1000;

// Rounded Corners
export const BorderRadius = {
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  full: 9999,
};

// Typography
export const Typography = {
  header1: {
    fontSize: 32,
    fontWeight: '800' as const,
    letterSpacing: -0.5,
  },
  header2: {
    fontSize: 24,
    fontWeight: '700' as const,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 22,
  },
  body: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: '500' as const,
    letterSpacing: 0.5,
  },
};

/**
 * Global functional styles for premium feel
 */
export const GlobalStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  // Premium Card Shadow
  cardShadow: {
    ...Platform.select({
      ios: {
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
      },
      android: {
        elevation: 8,
      },
    }),
  },
  // Soft Outer Glow (for accents)
  goldGlow: {
    ...Platform.select({
      ios: {
        boxShadow: '0px 0px 8px rgba(212, 175, 55, 0.2)',
      },
      android: {
        elevation: 4,
      },
    }),
  },
  // Responsive Container
  container: {
    flex: 1,
    paddingHorizontal: Spacing.m,
  },
  tabletContainer: {
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
});
