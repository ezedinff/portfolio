import React from 'react';
import Link from 'next/link';
import { useGA4 } from '@/app/hooks/useGA4';

interface BookingButtonProps {
  className?: string;
}

const BookingButton: React.FC<BookingButtonProps> = ({ className }) => {
  const { trackEvent, trackPurchase } = useGA4();

  const handleBooking = () => {
    trackEvent('book_session', {
      session_type: 'support',
      duration: '30min'
    });

    // Simulate a purchase (you would typically do this after payment confirmation)
    trackPurchase('T_12345', 25.42, 'USD', 'Tech Support Session', 'SKU_12345');

    // Your booking logic here
    console.log('Booking a session...');
  };
  return (
    <Link href="/book-session" passHref>
      <button 
        onClick={handleBooking}
        className={`${className} bg-warm-orange text-white font-bold py-2 px-4 rounded hover:bg-warm-orange/90 transition-colors`}
      >
        Book Free Tech Triage
      </button>
    </Link>
  );
};

export default BookingButton;