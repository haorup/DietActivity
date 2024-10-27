import { Button } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from '../Components/ItemList';
import  BackgroundContainer  from '../Components/BackgroundContainer';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { database } from '../Firebase/firebaseSetup';


export default function Activity({ navigation }) {

  const [activityArr, setActivityArr] = useState([]);

  function handleAddButton() {
    navigation.push('AddActivity');
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Add"
          onPress={handleAddButton}>
        </Button>
      ),
    });
  });

  useEffect(() => {
    const q = query(collection(database, 'activity'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let dataArrFromDB = [];
      let newEntry = {};
      snapshot.forEach((doc) => {
        newEntry = doc.data();
        newEntry = { ...newEntry, id: doc.id };
        dataArrFromDB.push(newEntry);
      });
      setActivityArr(dataArrFromDB);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BackgroundContainer>
        <ItemList dataArr={activityArr} />
    </BackgroundContainer>
  )
}
