import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {useEffect} from 'react'


export default function Diet({navigation}) {
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
    <View>
      <Text>Diet</Text>
    </View>
  )
}

const styles = StyleSheet.create({})