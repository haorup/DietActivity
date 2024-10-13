import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../Components/DataProvider';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '../Components/DatePicker';

export default function AddDiet() {

  const [description, setDescription] = useState(null);
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [calorieData, setCalorieData] = useState(''); //duration
  const [formattedDate, setFormattedDate] = useState(''); //date string
  const { addNewDiet } = useContext(DataContext);
  const navigation = useNavigation();

  function handleSave() {
    let newDiet = { description: description, date: formattedDate, calories: calorieData };
    addNewDiet(newDiet);
    navigation.navigate('Diet');
  }

  return (
    <View>
      <Text>Description *</Text>
      <TextInput style={{ borderWidth: 2, borderColor: 'black', height: 50 }}
        value={description} onChangeText={(newDescription) => setDescription(newDescription)} />

      <Text>Calories *</Text>
      <TextInput style={{ borderWidth: 2, borderColor: 'black', height: 50 }}
        value={calorieData} onChangeText={(newCalories) => setCalorieData(newCalories)} />

      <DatePicker date={date} setDate={setDate}
        formattedDate={formattedDate} setFormattedDate={setFormattedDate}
        showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} />
    </View>
  )
}

const styles = StyleSheet.create({})