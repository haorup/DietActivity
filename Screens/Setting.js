import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import BackgroundContainer from '../Components/BackgroundContainer'
import { useColor } from '../Components/ColorContext'
import { ColorHelper, StyleHelper } from '../Components/StyleHelper'
import PressButton from '../Components/PressButton'

export default function Setting() {
  const { setBackgdColor } = useColor();

  // function to toggle the background color
  function handlePress() {
    setBackgdColor((preColor) =>
      preColor === ColorHelper.firstBackgroundColor
        ? ColorHelper.secondBackgroundColor
        : ColorHelper.firstBackgroundColor
    );
  }
  return (
    <BackgroundContainer>
      <View style={styles.container}>
        <PressButton passedOnPress={handlePress}
        componentStyle={styles.toggleButton}
        passedStyle={styles.pressedtoggleButton}>
          <Text style={[StyleHelper.text,
            {color: ColorHelper.headerTintColor,
            marginBottom: 0}]}>Toggle Background Color</Text>
        </PressButton>
      </View>
    </BackgroundContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButton: {
    backgroundColor: ColorHelper.headerColor,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  pressedtoggleButton: {
    opacity: 0.8,
    backgroundColor: ColorHelper.saveButtonColor,
  },
})