import { useState, useEffect, useCallback } from 'react';
import { MetalData } from '../navigation/types';
import { fetchMetalPrice } from '../services/api/metalService';

/**
 * Custom hook to fetch and manage individual metal price data
 * @param id The ID of the metal to track
 */
export function useMetalPrice(id: string) {
  const [data, setData] = useState<MetalData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchMetalPrice(id);
      setData(result);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch price');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
    
    // Auto-refresh every 60 seconds (standard for financial price trackers)
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [fetchData]);

  return { data, loading, error, refresh: fetchData };
}
