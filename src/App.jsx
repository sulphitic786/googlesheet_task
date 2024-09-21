import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes, Navigate } from "react-router-dom"; // Add Navigate for redirection
import Index from './components/index';
import constants from './utils/constants';

function App() {
  const [isAOSActive, setIsAOSActive] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsAOSActive(false);
      } else {
        setIsAOSActive(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isAOSActive) {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
      });
    }
  }, [isAOSActive]);

  // Get the first key from constants object for default redirect
  const defaultSection = Object.keys(constants)[0];

  return (
    <>
      <Routes>
        {/* Redirect the base path "/" to the first section */}
        <Route path="/" element={<Navigate to={`/${defaultSection}`} replace />} />
        
        {/* Dynamically create routes based on keys in constants.json */}
        {Object.keys(constants).map((section) => (
          <Route 
            key={section} 
            path={`/${section}`} 
            element={<Index section={section} />} 
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
