import { View, Button } from 'react-native';
import React from 'react';
import { useEffect } from 'react';
import { DataContext, DataProvider } from '../Components/DataProvider';
import { useContext } from 'react';
import ItemList from '../Components/ItemList';
import { StyleHelper } from '../Components/StyleHelper';


export default function Activity({ navigation }) {

  const { state } = useContext(DataContext);

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
    <View style={StyleHelper.container}>
      <DataProvider>
        <ItemList dataArr={state.activity} />
      </DataProvider>
    </View>
  )
}
