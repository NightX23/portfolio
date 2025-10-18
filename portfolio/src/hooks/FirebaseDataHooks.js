import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseService';

export const useFirebaseData = () => {
  const [sectionsInfo, setSectionsInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, 'sections_data');
    let cancelled = false; // prevent state updates after unmount

    const getSectionsData = async () => {
      setLoading(true);
      setError(null);
      try {
        const querySnapshot = await getDocs(collectionRef);
        const items = {};
        querySnapshot.forEach((d) => {
          items[d.id] = d.data();
        });
        if (!cancelled) setSectionsInfo(items);
      } catch (err) {
        console.error('Error fetching sections data:', err);
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    getSectionsData();

    return () => {
      cancelled = true;
    };
  }, []);

  return { sectionsInfo, loading, error };
};
