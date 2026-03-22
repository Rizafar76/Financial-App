import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';
import { getStyles } from '../styles/PriceAlertModal.styles';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomButton } from './CustomButton';
import { Colors } from '../styles/GlobalStyles';

interface PriceAlertModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSetAlert: (price: number) => void;
  currentPrice: number;
  metalName: string;
  initialValue?: number;
}

/**
 * PriceAlertModal Component
 * Premium modal for setting price alerts with glassmorphism touches.
 */
export const PriceAlertModal: React.FC<PriceAlertModalProps> = ({ 
  isVisible, 
  onClose, 
  onSetAlert, 
  currentPrice, 
  metalName,
  initialValue
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  const styles = getStyles(colorScheme);
  const [price, setPrice] = useState(initialValue?.toString() || '');

  const handleSetAlert = () => {
    const numericPrice = parseFloat(price);
    if (!isNaN(numericPrice) && numericPrice > 0) {
      onSetAlert(numericPrice);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      onClose();
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ width: '100%', alignItems: 'center' }}
          >
            <TouchableWithoutFeedback onPress={(e) => {
              // This stops the tap from bubbling up to the outer "close on tap outside" touchable
            }}>
              <View style={styles.modalContainer}>
                <View style={styles.header}>
                  <Text style={styles.title}>Set Price Alert</Text>
                  <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Ionicons name="close" size={24} color={theme.textMuted} />
                  </TouchableOpacity>
                </View>

                <View style={styles.content}>
                  <Text style={styles.label}>{metalName} Target Price</Text>
                  <View style={styles.inputContainer}>
                    <Text style={styles.currencyPrefix}>$</Text>
                    <TextInput
                      style={styles.input}
                      value={price}
                      onChangeText={setPrice}
                      keyboardType="numeric"
                      placeholder={currentPrice.toLocaleString()}
                      placeholderTextColor={theme.textMuted + '60'}
                      autoFocus
                    />
                  </View>
                  <Text style={styles.helperText}>
                    Current: ${currentPrice.toLocaleString()}
                  </Text>
                </View>

                <View style={styles.footer}>
                  <CustomButton 
                    label="Set Alert" 
                    onPress={handleSetAlert} 
                    variant="primary"
                    disabled={!price || isNaN(parseFloat(price))}
                  />
                  <CustomButton 
                    label="Cancel" 
                    onPress={onClose} 
                    variant="ghost"
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
