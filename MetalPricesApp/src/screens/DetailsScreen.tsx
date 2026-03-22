import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, useWindowDimensions, StatusBar, ActivityIndicator, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { 
  FadeIn, 
  FadeInDown, 
  ZoomIn, 
  Layout, 
  FadeOut
} from 'react-native-reanimated';
import { DetailsScreenRouteProp, MetalData } from '../navigation/types';
import { getStyles } from '../styles/DetailsScreen.styles';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors, Spacing } from '../styles/GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { CustomButton } from '../components/CustomButton';
import { PriceAlertModal } from '../components/PriceAlertModal';
import { fetchMetalPrice } from '../services/api/metalService';

// Background Assets
const BACKGROUND_IMAGES: Record<string, any> = {
  XAU: require('../../assets/images/metals/gold_bg.png'),
  XAG: require('../../assets/images/metals/silver_bg.png'),
  XPT: require('../../assets/images/metals/platinum_bg.png'),
  XPD: require('../../assets/images/metals/palladium_bg.png'),
};

/**
 * DetailsScreen component
 * Displays in-depth information about a specific metal with a premium layout
 * Enhanced with Reanimated entrance effects and metallic backgrounds.
 */
export const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [metal, setMetal] = useState<MetalData>(route.params.metal);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [alertPrice, setAlertPrice] = useState<number | null>(null);
  
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  const { width } = useWindowDimensions();
  const styles = getStyles(colorScheme, width) || {};

  const isPositive = metal.change >= 0;

  const handleSetAlert = (price: number) => {
    setAlertPrice(price);
    // In a real app, you'd save this to a backend or local storage
  };

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      try {
        const details = await fetchMetalPrice(metal.id);
        setMetal(details);
      } catch (err) {
        setError('Could not update latest details');
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [metal.id]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      
      <Animated.View 
        entering={FadeIn.delay(300)}
        style={[styles.backButton, { top: insets.top + 8, left: insets.left + 16 }]}
      >
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
        >
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
      </Animated.View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { 
            paddingLeft: insets.left,
            paddingRight: insets.right,
          }
        ]}
      >
        {/* Immersive Hero Section with Metallic Texture */}
        <View style={[styles.hero, { backgroundColor: metal.color + '05', paddingTop: insets.top + 60, overflow: 'hidden' }]}>
          {BACKGROUND_IMAGES[metal.symbol] && (
            <Animated.View 
              entering={FadeIn.duration(1000)}
              style={styles.backgroundContainer}
            >
              <Image 
                source={BACKGROUND_IMAGES[metal.symbol]} 
                style={{ width: '100%', height: '100%' }} 
                resizeMode="cover"
              />
            </Animated.View>
          )}

          <Animated.View 
            entering={ZoomIn.duration(600).springify()}
            style={[styles.iconContainer, { backgroundColor: metal.color }]}
          >
            <Text style={styles.symbolLarge}>{metal.symbol}</Text>
          </Animated.View>

          <Animated.Text 
            entering={FadeInDown.delay(200).duration(500)}
            style={styles.name}
          >
            {metal.name}
          </Animated.Text>

          {alertPrice && (
            <Animated.View 
              entering={FadeIn.delay(600)}
              style={styles.alertBadge}
            >
              <Ionicons name="notifications" size={12} color={theme.success} />
              <Text style={styles.alertBadgeText}>Alert: ${alertPrice.toLocaleString()}</Text>
            </Animated.View>
          )}

          <Animated.View 
            entering={FadeInDown.delay(300).duration(500)}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={styles.price}>${metal.price.toLocaleString()}</Text>
            {loading && <ActivityIndicator size="small" color={theme.secondary} style={{ marginLeft: 10 }} />}
          </Animated.View>
          
          <Animated.View 
            entering={FadeInDown.delay(400).duration(500)}
            style={[
              styles.changeBadge,
              { backgroundColor: isPositive ? theme.success + '15' : theme.error + '15' }
            ]}
          >
            <Text style={[
              styles.changeText,
              { color: isPositive ? theme.success : theme.error }
            ]}>
              {isPositive ? '▲' : '▼'}{Math.abs(metal.change)}% Today
            </Text>
          </Animated.View>
          
          {metal.timestamp && (
            <Animated.Text 
              entering={FadeIn.delay(800)}
              style={{ ...styles.description, fontSize: 10, marginTop: 12, opacity: 0.6 }}
            >
              Market State: Open • Last Update: {metal.timestamp}
            </Animated.Text>
          )}
        </View>

        {/* Error State */}
        {error && (
          <Animated.View 
            entering={FadeInDown}
            style={{ padding: 16, backgroundColor: theme.error + '10', margin: 16, borderRadius: 8 }}
          >
            <Text style={{ color: theme.error, textAlign: 'center' }}>{error}</Text>
          </Animated.View>
        )}

        {/* Info Section */}
        <Animated.View 
          entering={FadeInDown.delay(500).duration(600)}
          style={styles.infoSection}
        >
          <Text style={styles.sectionTitle}>Performance Analysis</Text>
          <Text style={styles.description}>{metal.description}</Text>

          <View style={styles.statsGrid}>
            <View style={styles.statRow}>
              <Animated.View 
                entering={FadeInDown.delay(600).duration(400)}
                style={styles.statBox}
              >
                <Text style={styles.statLabel}>Open Price</Text>
                <Text style={styles.statValue}>${metal.open?.toLocaleString() || '---'}</Text>
              </Animated.View>
              <Animated.View 
                entering={FadeInDown.delay(700).duration(400)}
                style={styles.statBox}
              >
                <Text style={styles.statLabel}>Prev Close</Text>
                <Text style={styles.statValue}>${metal.close?.toLocaleString() || '---'}</Text>
              </Animated.View>
            </View>

            <View style={styles.statRow}>
              <Animated.View 
                entering={FadeInDown.delay(800).duration(400)}
                style={styles.statBox}
              >
                <Text style={styles.statLabel}>Day High</Text>
                <Text style={styles.statValue}>${metal.high?.toLocaleString() || '---'}</Text>
              </Animated.View>
              <Animated.View 
                entering={FadeInDown.delay(900).duration(400)}
                style={styles.statBox}
              >
                <Text style={styles.statLabel}>Day Low</Text>
                <Text style={styles.statValue}>${metal.low?.toLocaleString() || '---'}</Text>
              </Animated.View>
            </View>
          </View>
        </Animated.View>

        {/* Action Button */}
        <Animated.View 
          entering={FadeInDown.delay(1000).duration(500)}
          style={styles.actionContainer}
        >
          <CustomButton 
            label={alertPrice ? "Update Price Alert" : "Set Price Alert"} 
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              setIsModalVisible(true);
            }} 
            variant="outline"
            iconName="notifications-outline"
            style={styles.alertButton}
            textStyle={styles.alertButtonText}
          />
        </Animated.View>
      </ScrollView>

      <PriceAlertModal 
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSetAlert={handleSetAlert}
        currentPrice={metal.price}
        metalName={metal.name}
        initialValue={alertPrice || undefined}
      />
    </View>
  );
};
