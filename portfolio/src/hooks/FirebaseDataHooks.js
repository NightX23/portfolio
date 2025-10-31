import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseService';

const FirebaseDataCollection = (collectionPath) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!collectionPath) return;
    const collectionRef = collection(db, collectionPath);
    let cancelled = false;

    const fetchCollection = async () => {
      setLoading(true);
      setError(null);
      try {
        const querySnapshot = await getDocs(collectionRef);
        let results = {};
        querySnapshot.forEach((d) => {
          results[d.id] = d.data();
        });

        if (!cancelled) {
          setItems(results);
        }
      } catch (err) {
        console.error('Error fetching collection:', collectionPath, err);
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCollection();

    return () => {
      cancelled = true;
    };
  }, [collectionPath]);

  return { items, loading, error };
};

const useFirebase = () => {
  return {
    getSectionsData: FirebaseDataCollection(
      import.meta.env.VITE_COLLECTION_SECTIONS
    ),
    getWorkExperienceData: FirebaseDataCollection(
      import.meta.env.VITE_COLLECTION_WORK_EXPERIENCE
    ),
  };
};

export default useFirebase;
