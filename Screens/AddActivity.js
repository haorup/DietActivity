import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import React from 'react';
import Dropdown from '../Components/Dropdown';
import { useState } from 'react';
import { DataContext } from '../Components/DataProvider';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '../Components/DatePicker';
import { StyleHelper } from '../Components/StyleHelper';


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

  function handleSave() {
    if (checkInputs()) {
      let newActivity = { activity: value, date: formattedDate, duration: durationData };
      addNewActivity(newActivity);
      navigation.navigate('Activity');
    } else {
      Alert.alert('Invalid input', 'Please check your input values');
    }
  }

  return (
    <View style={StyleHelper.container}>

      <Dropdown passedValue={value} setPassedValue={setValue} />

      <Text style={StyleHelper.text}>Duration (min)*</Text>
      <TextInput style={ StyleHelper.input}
        value={durationData} onChangeText={(newDuration) => setDurationData(newDuration)} />

      <DatePicker date={date} setDate={setDate}
        formattedDate={formattedDate} setFormattedDate={setFormattedDate}
        showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} />

      <Button title='Save' onPress={() => { handleSave() }} />
      <Button title='Cancel' onPress={() => { handleCancel() }} />
    </View>
  )
}

const styles = StyleSheet.create({})