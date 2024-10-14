import { View } from 'react-native'
import React from 'react'
import { StyleHelper } from './StyleHelper'
import { useColor } from './ColorContext'

export default function BackgroundContainer({ children }) {
    const { backgdColor } = useColor();
  return (
    <View style={[StyleHelper.container, {backgroundColor: backgdColor}]}>
      {children}
    </View>
  )
}
