import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import {useEffect} from 'react';

export default function Activity({navigation}) {

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
      <Text>Activity</Text>
    </View>
  )
}

const styles = StyleSheet.create({})