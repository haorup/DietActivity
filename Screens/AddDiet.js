import { Text, View, TextInput, Alert } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '../Components/DatePicker';
import { StyleHelper, ColorHelper } from '../Components/StyleHelper';
import BackgroundContainer from '../Components/BackgroundContainer';
import { writeToDB, updateDB } from '../Firebase/firebaseHelper';
import Checkerbox from '../Components/Checkerbox';
import PressButton from '../Components/PressButton';

export default function AddDiet({ itemData = null }) {
  const dietLimit = 800;
  const [description, setDescription] = useState(''); // diet description
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [calorieData, setCalorieData] = useState(''); //duration
  const [formattedDate, setFormattedDate] = useState(''); //date string
  const [showSpecialIcon, setShowSpecialIcon] = useState(false);
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

  function makeNewDiet() {
    let calorieNum = parseInt(calorieData);
    let ifShowSpecialIcon = calorieNum > dietLimit;
    let newDiet = {
      description: description,
      date: formattedDate,
      calories: calorieData,
      showSpecialDiet: ifShowSpecialIcon,
    };
    return newDiet;
  }

  // save the new diet data
  function handleSave() {
    if (checkInputs()) {
      let newEntry = makeNewDiet();
      {
        itemData === null ? writeToDB('diet', newEntry)
        : Alert.alert('Important', 'Are you sure you want to save these changes?', [
          {
            text: 'Yes', onPress: () => {
              newEntry.showSpecialDiet = showSpecialIcon;
              updateDB('diet', itemData.id, newEntry);
              navigation.navigate('Diet');
            }
          },
          { text: 'No' }
        ])
      }

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
      setShowSpecialIcon(itemData.showSpecialDiet);
    }
  }, [itemData]);

  return (
    <BackgroundContainer>
      <Text style={StyleHelper.text}>Description *</Text>
      <TextInput style={[StyleHelper.input, { height: 100 }]}
        multiline={true}
        value={description} onChangeText={(newDescription) =>
          setDescription(newDescription)} />

      <Text style={StyleHelper.text}>Calories *</Text>
      <TextInput style={StyleHelper.input}
        value={calorieData} onChangeText={(newCalories) =>
          setCalorieData(newCalories)} />

      <DatePicker date={date} setDate={setDate}
        formattedDate={formattedDate}
        setFormattedDate={setFormattedDate}
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker} />

      <View style={{
        flex: 1, justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        {itemData && itemData.showSpecialDiet &&
        <Checkerbox ifChecked={showSpecialIcon}
          setIfChecked={setShowSpecialIcon} />}
        <View style={StyleHelper.buttonContainer}>
          <PressButton passedOnPress={handleCancel}
            componentStyle={StyleHelper.cancelButton}>
            <Text style={[StyleHelper.text,
            {
              color: ColorHelper.headerTintColor,
              marginBottom: 0
            }]}>Cancel</Text>
          </PressButton>
          <PressButton passedOnPress={handleSave}
            componentStyle={StyleHelper.saveButton}>
            <Text style={[StyleHelper.text,
            {
              color: ColorHelper.headerTintColor,
              marginBottom: 0
            }]}>Save</Text>
          </PressButton>
        </View>
      </View>
    </BackgroundContainer>
  )
}
