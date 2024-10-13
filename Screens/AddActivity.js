import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DataContext } from '../Components/DataProvider';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function AddActivity() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [activities, setActivities] = useState([
    { label: 'Walking', value: 'Walking' },
    { label: 'Running', value: 'Running' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Weights', value: 'Weights' },
    { label: 'Yoga', value: 'Yoga' },]);
  const [date, setDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const [durationData, setDurationData] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const {addNewActivity} = useContext(DataContext);
  const navigation = useNavigation();

  function handleDatePicker() {
    const currentDate = new Date();
    setDate(currentDate);
    setFormattedDate(currentDate.toLocaleDateString('en-US', options).replace(/,/g, ''));
    setShowDatePicker((prev) => !prev);
  }

  function handleDateChange(e, selectedDate) {
    if (e.type === 'set') {
      setDate(selectedDate);
      setShowDatePicker(false);
      setFormattedDate(selectedDate.toLocaleDateString('en-US', options).replace(/,/g, ''));
    } else {
      setShowDatePicker(false);
    }
  }

  function handleSave() {
    let newActivity = {activity: value, date: formattedDate, duration: durationData};
    addNewActivity(newActivity);
    navigation.navigate('Activity');

  }

  return (
    <View>
        <Text>Activity *</Text>
        <DropDownPicker
          placeholder="Select An Activity"
          open={open}
          value={value}
          items={activities}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setActivities}
        />
        <Text>Duration *</Text>
        <TextInput style={{ borderWidth: 2, borderColor: 'black', height: 50 }}
        value={durationData} onChangeText={(newDuration)=>setDurationData(newDuration)}/>
        <Text>Date *</Text>
        <TextInput style={{ borderWidth: 2, borderColor: 'black', height: 50 }}
          onPressIn={handleDatePicker}
          value={formattedDate} />
        {showDatePicker && <DateTimePicker
          value={new Date()}
          mode='date'
          display="inline"
          onChange={handleDateChange} />}
          <Button title='Save' onPress={() => {handleSave()}} />
    </View>
  )
}

const styles = StyleSheet.create({})