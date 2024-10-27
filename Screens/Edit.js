import { StyleSheet, Button } from 'react-native'
import React, { useEffect } from 'react'
import BackgroundContainer from '../Components/BackgroundContainer'
import AddActivity from './AddActivity'
import AddDiet from './AddDiet'
import { deleteDB } from '../Firebase/firebaseHelper'


export default function Edit({navigation, route}) {

  function handleDelete() {
    let collectionName = route.params.itemData.activity ? 'activity' : 'diet';
    deleteDB(collectionName, route.params.itemData.id);
    navigation.navigate(route.params.itemData.activity ? 'Activity' : 'Diet');
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight : () => (
        <Button
          title="delete"
          onPress={handleDelete}>
        </Button>
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

const styles = StyleSheet.create({})