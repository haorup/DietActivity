import { View, Pressable } from 'react-native'
import React from 'react'
import { StyleHelper } from './StyleHelper'

export default function PressButton({ children,
    passedStyle,
    componentStyle,
    passedOnPress }) {
        return (
            <View>
                <Pressable
                style={({ pressed }) => {
                    return [
                        StyleHelper.pressButtonDefaultStyle,
                        componentStyle,
                        pressed && StyleHelper.defaultPressedSytle,
                        pressed && passedStyle,
                    ]
                }}
                    onPress={passedOnPress}>
                    {children}
                </Pressable>
            </View>
        )
}