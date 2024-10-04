import React from 'react';
import Link from 'next/link';

interface BookingButtonProps {
  className?: string;
}

const BookingButton: React.FC<BookingButtonProps> = ({ className }) => {
  return (
    <Link href="/book-session" passHref>
      <button 
        className={`${className} bg-warm-orange text-white font-bold py-2 px-4 rounded hover:bg-warm-orange/90 transition-colors`}
      >
        Book Free Tech Triage
      </button>
    </Link>
  );
};

export default BookingButton;