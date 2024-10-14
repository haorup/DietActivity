import { StyleSheet, Button } from 'react-native'
import React from 'react'
import {useEffect} from 'react'
import {DataContext, DataProvider} from '../Components/DataProvider'
import { useContext } from 'react'
import ItemList from '../Components/ItemList'
import BackgroundContainer from '../Components/BackgroundContainer'


export default function Diet({navigation}) {

  const {state} = useContext(DataContext);
  function handleAddButton() {
    navigation.push('AddDiet');
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

  return (
    <BackgroundContainer>
      <DataProvider>
      <ItemList dataArr={state.diet} />
      </DataProvider>
      </BackgroundContainer>
  )
}

const styles = StyleSheet.create({})