'use client'

import { useCallback } from 'react';

declare global {
    interface Window {
      gtag: (
        type: string,
        action: string,
        data?: Record<string, any>
      ) => void;
    }
  }

export const useGA4 = () => {
  const trackEvent = useCallback((action: string, params?: Record<string, any>) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, params);
    }
  }, []);

  const setUserProperties = useCallback((properties: Record<string, any>) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('set', 'user_properties', properties);
    }
  }, []);

  const trackPurchase = useCallback((transactionId: string, value: number, currency: string, itemName: string, itemId: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: value,
        currency: currency,
        items: [
          {
            item_name: itemName,
            item_id: itemId,
            price: value,
            quantity: 1
          }
        ]
      });
    }
  }, []);

  return { trackEvent, setUserProperties, trackPurchase };
};