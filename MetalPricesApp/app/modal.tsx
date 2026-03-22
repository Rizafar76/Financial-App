import { Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

/**
 * Clean Modal Screen for the metal prices app
 * Replaces the broken boilerplate that relied on missing components
 */
export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Metal Tracker</Text>
      <Text style={styles.text}>
        This is a high-performance price tracking application for precious metals, built with React Native and Expo Router.
      </Text>
      <Link href="/" dismissTo style={styles.link}>
        <Text style={styles.linkText}>Back to Market</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 32,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 32,
  },
  link: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
