import React, { useState, useEffect } from 'react';
import HeroCorporate from './HeroCorporate';
import ElevateYourWorkforce from './ElevateYourWorkforce'; 
import CorporateChallenge from './CorporateChallenge';
import CorporateAppoarch from './CorporateAppoarch';
import ContactForm from './ContactForm';
import ConnectWithUs from './ConnectWithUs';
import LoadingSpinner from './LoadingSpinner'; // Import your LoadingSpinner component

const CorporateTraining = () => {
  const [loading, setLoading] = useState(true);
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  useEffect(() => {
    const loadComponents = async () => {
      // Simulate component loading (e.g., fetching data or performing async tasks)
      await Promise.all([
        // Here you can add any async tasks if your components need them
        new Promise(resolve => setTimeout(resolve, 1000)), // Simulate delay for all components
      ]);

      // After all components are "loaded"
      setComponentsLoaded(true);
      setLoading(false);
    };

    loadComponents();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner /> // Use the LoadingSpinner component here
      ) : (
        <>
          {componentsLoaded && (
            <>
              <HeroCorporate />
              <ElevateYourWorkforce />
              <CorporateChallenge />
              <CorporateAppoarch />
              <ContactForm />
              <ConnectWithUs />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CorporateTraining;
