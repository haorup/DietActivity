import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {DataContext, DataProvider} from '../Components/DataProvider';
import { useContext } from 'react';
import ItemList from '../Components/ItemList';


export default function Activity({navigation}) {

  const {state} = useContext(DataContext);

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

  return (
    <View>
      <DataProvider>
        <Text>Activity</Text>
      <ItemList dataArr={state.activity} />
      </DataProvider>
    </View>
  )
}

const styles = StyleSheet.create({})