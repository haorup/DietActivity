import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

export default function Dropdown({passedValue, setPassedValue}) {
    const [open, setOpen] = useState(false);
    const [activities, setActivities] = useState([
      { label: 'Walking', value: 'Walking' },
      { label: 'Running', value: 'Running' },
      { label: 'Swimming', value: 'Swimming' },
      { label: 'Weights', value: 'Weights' },
      { label: 'Yoga', value: 'Yoga' },]);
  return (
    <View style={{ zIndex: open ? 1000 : 0 }}>
        <Text>Activity *</Text>
        <DropDownPicker
          placeholder="Select An Activity"
          open={open}
          value={passedValue}
          items={activities}
          setOpen={setOpen}
          setValue={setPassedValue}
          setItems={setActivities}
        />
        </View>
  )
}

const styles = StyleSheet.create({})