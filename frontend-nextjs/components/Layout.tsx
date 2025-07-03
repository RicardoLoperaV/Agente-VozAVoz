import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

// Main layout component with header and animated content
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-16"
        role="main"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;