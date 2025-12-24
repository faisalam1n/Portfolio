import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 py-8 text-center border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <p className="text-gray-500 dark:text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Faisal Amin. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;