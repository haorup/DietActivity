import React, { useEffect } from 'react'
import BackgroundContainer from '../Components/BackgroundContainer'
import AddActivity from './AddActivity'
import AddDiet from './AddDiet'
import { deleteDB } from '../Firebase/firebaseHelper'
import PressButton from '../Components/PressButton'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Alert } from 'react-native';


export default function Edit({navigation, route}) {

  function handleDelete() {
    let collectionName = route.params.itemData.activity ? 'activity' : 'diet';
    Alert.alert('Delete', 'Are you sure you want to delete this entry?', [
      {text: 'Yes', onPress: () => {
        deleteDB(collectionName, route.params.itemData.id);
        navigation.navigate(route.params.itemData.activity ? 'Activity' : 'Diet');
      }},
      {text: 'No'}
    ]);

  }

  useEffect(() => {
    navigation.setOptions({
      headerRight : () => (
        <PressButton passedOnPress={handleDelete}>
          <MaterialCommunityIcons name='trash-can' size={28} color='white' />
        </PressButton>
      ),
    });
  }
  );

  return (
    <BackgroundContainer>
      {route.params.itemData.activity ?
      <AddActivity itemData={route.params.itemData} />
      : <AddDiet itemData={route.params.itemData} />}
    </BackgroundContainer>
  )
}
