import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox'
import { ColorHelper, StyleHelper } from './StyleHelper'

export default function Checkerbox({ ifChecked, setIfChecked }) {
  return (
    <View style={StyleHelper.checkboxSection}>
        <Checkbox
            style={{margin: 5}}
            value={ifChecked}
            onValueChange={() => {setIfChecked()}}
            color= {ifChecked ? ColorHelper.checkedCheckboxColor : undefined}
        />
        <Text style={[StyleHelper.text, {fontSize: 13}]}>This item is marked as special. Select the checkbox
            if you would like to approve this item.
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({})