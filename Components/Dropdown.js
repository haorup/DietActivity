import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { StyleHelper } from './StyleHelper';

export default function Dropdown({passedValue, setPassedValue}) {
    const [open, setOpen] = useState(false);
    const [activities, setActivities] = useState([
      { label: 'Walking', value: 'Walking' },
      { label: 'Running', value: 'Running' },
      { label: 'Swimming', value: 'Swimming' },
      { label: 'Weights', value: 'Weights' },
      { label: 'Yoga', value: 'Yoga' },
      { label: 'Cycling', value: 'Cycling' },
      { label: 'Hiking', value: 'Hiking' },]);
  return (
    <View style={{ zIndex: open ? 1000 : 0 }}>
        <Text style={StyleHelper.text}>Activity *</Text>
        <DropDownPicker
        style={StyleHelper.dropDown}
        textStyle={{ fontSize: 15 }}
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