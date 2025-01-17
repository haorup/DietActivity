import { StyleSheet, View, Button } from 'react-native'
import React from 'react'
import BackgroundContainer from '../Components/BackgroundContainer'
import { useColor } from '../Components/ColorContext'
import { ColorHelper } from '../Components/StyleHelper'


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
        <Button title='Toggle Background'
          onPress={() => handlePress()} />
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
})