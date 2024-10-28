import { View } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from '../Components/ItemList';
import  BackgroundContainer  from '../Components/BackgroundContainer';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { database } from '../Firebase/firebaseSetup';
import PressButton from '../Components/PressButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Activity({ navigation }) {

  const [activityArr, setActivityArr] = useState([]);

  function handleAddButton() {
    navigation.push('AddActivity');
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressButton passedOnPress={handleAddButton}>
          <View style={{flexDirection: 'row'}}>
          <MaterialCommunityIcons name='plus' size={28} color='white' />
          <MaterialCommunityIcons name='run' size={28} color='white' />
          </View>
        </PressButton>

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
