import { Text, TextInput, View, Button, Alert } from 'react-native';
import React from 'react';
import Dropdown from '../Components/Dropdown';
import { useState } from 'react';
import { DataContext } from '../Components/DataProvider';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '../Components/DatePicker';
import { StyleHelper } from '../Components/StyleHelper';
import BackgroundContainer from '../Components/BackgroundContainer';
import { writeToDB } from '../Firebase/firebaseHelper';


export default function AddActivity() {

  const [value, setValue] = useState(null); //activity
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [durationData, setDurationData] = useState(''); //duration
  const [formattedDate, setFormattedDate] = useState(''); //date string
  const { addNewActivity } = useContext(DataContext);
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

  // save the new activity data
  function handleSave() {
    if (checkInputs()) {
      let newActivity = { activity: value, date: formattedDate, duration: durationData };
      writeToDB('activity', newActivity);
      addNewActivity(newActivity);
      navigation.navigate('Activity');
    } else {
      Alert.alert('Invalid input', 'Please check your input values');
    }
  }

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
