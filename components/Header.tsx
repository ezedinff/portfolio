import Link from "next/link";
import React from "react";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hideMenu?: boolean;
  title: string;
}

const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  title,
  hideMenu,
}) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-bold text-deep-blue">
            <Link href="/">TP</Link>
          </span>
          <span className="ml-2 text-xl font-semibold">{title}</span>
        </div>
        {!hideMenu && (
          <>
            <nav className="hidden md:flex space-x-6">
              {["Home", "Services", "How It Works", "Pricing", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-deep-blue transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </>
        )}
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          {["Home", "Services", "How It Works", "Pricing", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
