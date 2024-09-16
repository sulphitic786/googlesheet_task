
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from './components/HomePage';
import Index from './components/index';


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

  return (
    <>
   {/* <HomePage/> */}
   <Index/>
    </>
  );
}

export default App;
