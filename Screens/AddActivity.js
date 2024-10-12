import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';


export default function AddActivity() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [activities, setActivities] = useState([
    {label: 'Walking', value: 'Walking'},
    {label: 'Running', value: 'Running'},
    {label: 'Swimming', value: 'Swimming'},
    {label: 'Weights', value: 'Weights'},
    {label: 'Yoga', value: 'Yoga'},]);
  return (
    <View>
      <DropDownPicker
        placeholder="Select An Activity"
        open={open}
        value={value}
        items={activities}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setActivities}
      />
    </View>
  )
}

const styles = StyleSheet.create({})