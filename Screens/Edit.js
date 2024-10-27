import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundContainer from '../Components/BackgroundContainer'
import AddActivity from './AddActivity'
import AddDiet from './AddDiet'

export default function Edit({route}) {
  return (
    <BackgroundContainer>
      {route.params.itemData.activity ?
      <AddActivity itemData={route.params.itemData} />
      : <AddDiet itemData={route.params.itemData} />}
    </BackgroundContainer>

  )
}

const styles = StyleSheet.create({})