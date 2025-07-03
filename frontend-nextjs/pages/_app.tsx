import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '@/styles/globals.css';

// Main App component with global styles and dark mode initialization
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Enable dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return <Component {...pageProps} />;
}