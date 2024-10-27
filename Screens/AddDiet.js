import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '../Components/DatePicker';
import { StyleHelper } from '../Components/StyleHelper';
import BackgroundContainer from '../Components/BackgroundContainer';
import { writeToDB } from '../Firebase/firebaseHelper';

export default function AddDiet({ itemData = null }) {

  const [description, setDescription] = useState(''); // diet description
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [calorieData, setCalorieData] = useState(''); //duration
  const [formattedDate, setFormattedDate] = useState(''); //date string
  const navigation = useNavigation();

  // check if the inputs are valid
  function checkInputs() {
    if (description.trim() === ''
      || calorieData.trim() === ''
      || formattedDate === '') {
      return false;
    }
    if (isNaN(calorieData)) {
      return false;
    }
    if (parseInt(calorieData) < 0) {
      return false;
    }
    return true;
  }

  // save the new diet data
  function handleSave() {
    if (checkInputs()) {
      let newDiet = { description: description, date: formattedDate, calories: calorieData };
      writeToDB('diet', newDiet);
      navigation.navigate('Diet');
    } else {
      Alert.alert('Invalid input', 'Please check your input values');
    }
  }

  function handleCancel() {
    navigation.navigate('Diet');
  }

  useEffect(() => {
    if (itemData !== null) {
      setDescription(itemData.description);
      setCalorieData(itemData.calories);
      setFormattedDate(itemData.date);
    }
  }, [itemData]);

  return (
    <BackgroundContainer>
      <Text style={StyleHelper.text}>Description *</Text>
      <TextInput style={[StyleHelper.input, { height: 100 }]}
        multiline={true}
        value={description} onChangeText={(newDescription) => setDescription(newDescription)} />

      <Text style={StyleHelper.text}>Calories *</Text>
      <TextInput style={StyleHelper.input}
        value={calorieData} onChangeText={(newCalories) => setCalorieData(newCalories)} />

      <DatePicker date={date} setDate={setDate}
        formattedDate={formattedDate} setFormattedDate={setFormattedDate}
        showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} />

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={StyleHelper.buttonContainer}>
          <Button title='Cancel' onPress={() => { handleCancel() }} />
          <Button title='Save' onPress={() => { handleSave() }} />
        </View>
      </View>
    </BackgroundContainer>
  )
}

const styles = StyleSheet.create({})