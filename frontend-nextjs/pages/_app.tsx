import type { AppProps } from 'next/app';
import '@/styles/globals.css';

// Main App component with global styles
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}