import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React from 'react';
import Dropdown from '../Components/Dropdown';
import { useState } from 'react';

import { DataContext } from '../Components/DataProvider';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '../Components/DatePicker';


export default function AddActivity() {

  const [value, setValue] = useState(null); //activity
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [durationData, setDurationData] = useState(''); //duration
  const [formattedDate, setFormattedDate] = useState(''); //date string
  const { addNewActivity } = useContext(DataContext);
  const navigation = useNavigation();



  function handleSave() {
    let newActivity = { activity: value, date: formattedDate, duration: durationData };
    addNewActivity(newActivity);
    navigation.navigate('Activity');
  }

  return (
    <View>

      <Dropdown passedValue={value} setPassedValue={setValue} />

      <Text>Duration *</Text>
      <TextInput style={{ borderWidth: 2, borderColor: 'black', height: 50 }}
        value={durationData} onChangeText={(newDuration) => setDurationData(newDuration)} />

      <DatePicker date={date} setDate={setDate}
        formattedDate={formattedDate} setFormattedDate={setFormattedDate}
        showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} />

      <Button title='Save' onPress={() => { handleSave() }} />
    </View>
  )
}

const styles = StyleSheet.create({})