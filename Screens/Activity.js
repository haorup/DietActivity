import { Button } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import { DataContext, DataProvider } from '../Components/DataProvider';
import { useContext } from 'react';
import ItemList from '../Components/ItemList';
import  BackgroundContainer  from '../Components/BackgroundContainer';
import { readFromDB } from '../Firebase/firebaseHelper';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { database } from '../Firebase/firebaseSetup';


export default function Activity({ navigation }) {

  const { state } = useContext(DataContext);
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
      const dataArrFromDB = [];
      snapshot.forEach((doc) => {
        dataArrFromDB.push(doc.data());
      });
      setActivityArr(dataArrFromDB);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BackgroundContainer>
      <DataProvider>
        <ItemList dataArr={activityArr} />
      </DataProvider>
    </BackgroundContainer>
  )
}
