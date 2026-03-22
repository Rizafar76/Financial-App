import React from 'react';
import { Text, StyleSheet, Pressable, ViewStyle, TextStyle } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring 
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, Typography, BorderRadius } from '../styles/GlobalStyles';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'ghost' | 'accent' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
}

/**
 * Premium Interactive Button with Reanimated Feedback
 */
export const CustomButton: React.FC<CustomButtonProps> = ({ 
  label, 
  onPress, 
  variant = 'primary',
  style,
  textStyle,
  disabled = false,
  iconName,
  iconSize = 20,
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  const scale = useSharedValue(1);

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: theme.primary,
          text: theme.background,
        };
      case 'accent':
        return {
          bg: theme.secondary,
          text: theme.primary,
        };
      case 'outline':
        return {
          bg: 'transparent',
          text: theme.primary,
          border: theme.primary,
        };
      case 'ghost':
        return {
          bg: 'transparent',
          text: theme.primary,
          border: theme.border,
        };
      default:
        return {
          bg: theme.primary,
          text: theme.background,
        };
    }
  };

  const variantStyle = getVariantStyles();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: disabled ? 0.5 : 1,
  }));

  const handlePressIn = () => {
    if (!disabled) {
      scale.value = withSpring(0.96);
    }
  };

  const handlePressOut = () => {
    if (!disabled) {
      scale.value = withSpring(1);
    }
  };

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
    >
      <Animated.View style={[
        styles.button,
        { 
          backgroundColor: variantStyle.bg,
          borderColor: variantStyle.border || 'transparent',
          borderWidth: variantStyle.border ? 1 : 0,
          flexDirection: 'row', // Support icon layout
        },
        animatedStyle,
        style
      ]}>
        {iconName && (
          <Ionicons 
            name={iconName} 
            size={iconSize} 
            color={variantStyle.text} 
            style={{ marginRight: 8 }} 
          />
        )}
        <Text style={[
          styles.label,
          { color: variantStyle.text },
          textStyle
        ]}>
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: Spacing.m,
    paddingHorizontal: Spacing.xl,
    borderRadius: BorderRadius.m,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    ...Typography.subtitle,
  },
});
