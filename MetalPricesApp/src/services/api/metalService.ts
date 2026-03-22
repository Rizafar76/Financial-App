import { MetalData } from '../../navigation/types';

/**
 * Metal API Service
 * Handles real-time data fetching with mock fallback
 */

const API_KEY = ''; // User can provide their goldapi.io key here
const BASE_URL = 'https://www.goldapi.io/api';

// Mock data generator for testing and fallback
const MOCK_METALS: Record<string, Partial<MetalData>> = {
  '1': { name: 'Gold', symbol: 'XAU', price: 2150.45, change: 1.25, color: '#D4AF37', description: 'Premium 24K Gold' },
  '2': { name: 'Silver', symbol: 'XAG', price: 24.85, change: -0.45, color: '#C0C0C0', description: 'Pure Industrial Silver' },
  '3': { name: 'Platinum', symbol: 'XPT', price: 915.20, change: 0.15, color: '#E5E4E2', description: 'Rare Platinum Group Metal' },
  '4': { name: 'Palladium', symbol: 'XPD', price: 1050.75, change: -1.10, color: '#8E8E93', description: 'Catalytic Palladium' },
};

/**
 * Fetches real-time price for a specific metal
 * @param id The internal ID of the metal (1-4)
 */
export async function fetchMetalPrice(id: string): Promise<MetalData> {
  const mockBase = MOCK_METALS[id];
  if (!mockBase) throw new Error(`Invalid metal ID: ${id}`);

  // Simulate network delay for premium feel and testing loaders
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

  if (API_KEY) {
    try {
      const response = await fetch(`${BASE_URL}/${mockBase.symbol}/USD`, {
        headers: {
          'x-access-token': API_KEY,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) throw new Error('API request failed');
      
      const data = await response.json();
      
      return {
        ...mockBase,
        id,
        price: data.price,
        open: data.open_price,
        close: data.prev_close_price,
        high: data.high_price,
        low: data.low_price,
        change: parseFloat(((data.price - data.open_price) / data.open_price * 100).toFixed(2)),
        timestamp: new Date().toLocaleTimeString(),
      } as MetalData;
    } catch (error) {
      console.warn(`API Fetch failed for ${mockBase.symbol}, falling back to mock:`, error);
    }
  }

  // Fallback to Mock Data with slight randomized fluctuation
  const fluctuation = (Math.random() - 0.5) * 2;
  const currentPrice = (mockBase.price || 0) + fluctuation;
  const openPrice = (mockBase.price || 0) * 0.99;

  return {
    ...mockBase,
    id,
    price: parseFloat(currentPrice.toFixed(2)),
    open: parseFloat(openPrice.toFixed(2)),
    close: parseFloat((openPrice * 1.01).toFixed(2)),
    high: parseFloat((Math.max(currentPrice, openPrice) * 1.002).toFixed(2)),
    low: parseFloat((Math.min(currentPrice, openPrice) * 0.998).toFixed(2)),
    timestamp: new Date().toLocaleTimeString(),
    change: parseFloat(((currentPrice - openPrice) / openPrice * 100).toFixed(2)),
  } as MetalData;
}
