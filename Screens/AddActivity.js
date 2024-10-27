import { Text, TextInput, View, Button, Alert } from 'react-native';
import React from 'react';
import Dropdown from '../Components/Dropdown';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '../Components/DatePicker';
import { StyleHelper } from '../Components/StyleHelper';
import BackgroundContainer from '../Components/BackgroundContainer';
import { writeToDB, updateDB } from '../Firebase/firebaseHelper';


export default function AddActivity({ itemData = null }) {
  const activityLimit = 60;
  const [value, setValue] = useState(null); //activity
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [durationData, setDurationData] = useState(''); //duration
  const [formattedDate, setFormattedDate] = useState(''); //date string
  const [showSpecialIcon, setShowSpecialIcon] = useState(false);
  const navigation = useNavigation();

  function handleCancel() {
    navigation.navigate('Activity');
  }

  // check if the inputs are valid
  function checkInputs() {
    if (value === null
      || durationData.trim() === ''
      || formattedDate === '') {
      return false;
    }
    if (isNaN(durationData)) {
      return false;
    }
    if (parseInt(durationData) < 0) {
      return false;
    }
    return true;
  }

  // create a new activity object
  function makeNewActivity() {
    let durationNum = parseInt(durationData);
    let ifShowSpecialIcon = (value === 'Running'
      || value === 'Weights') && (durationNum > activityLimit);
    let newActivity = {
      activity: value,
      date: formattedDate,
      duration: durationData,
      showSpecialActivity: ifShowSpecialIcon,
    };
    return newActivity;
  }

  // save the new activity data
  function handleSave() {
    if (checkInputs()) {
      let newEntry = makeNewActivity();
      itemData ? updateDB('activity', itemData.id, newEntry)
        : writeToDB('activity', newEntry);
      navigation.navigate('Activity');
    } else {
      Alert.alert('Invalid input', 'Please check your input values');
    }
  }

  useEffect(() => {
    if (itemData !== null) {
      setValue(itemData.activity);
      setDurationData(itemData.duration);
      setFormattedDate(itemData.date);
    }
  }, [itemData]);

  return (
    <BackgroundContainer>
      <Dropdown passedValue={value} setPassedValue={setValue} />

      <Text style={StyleHelper.text}>Duration (min)*</Text>
      <TextInput style={StyleHelper.input}
        value={durationData} onChangeText={(newDuration) => setDurationData(newDuration)} />

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
