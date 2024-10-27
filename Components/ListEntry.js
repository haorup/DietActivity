import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { StyleHelper, ColorHelper } from './StyleHelper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function ListEntry({ itemObj }) {

    const navigation = useNavigation();

    function handleNavigation() {
        navigation.navigate('Edit', { itemData: itemObj });
    }

    return (
        <Pressable onPress={handleNavigation}>
        <View style={StyleHelper.boxStyle}>
            <View style={StyleHelper.activityBox}>
                {/* activity data and reminder icon */}
                {itemObj.activity && <Text
                    style={[StyleHelper.textEntry,
                    { color: 'white', fontSize: 15 }]}>{itemObj.activity}</Text>}
                {itemObj.showSpecialActivity && <MaterialCommunityIcons
                    name='alert' size={24} color={ColorHelper.activeTabColor} />}

                {/* diet data and reminder icon */}
                {itemObj.description && <Text
                    style={[StyleHelper.textEntry,
                    { color: 'white', fontSize: 15 }]}>{itemObj.description}</Text>}
                {itemObj.showSpecialDiet && <MaterialCommunityIcons
                    name='alert' size={24} color={ColorHelper.activeTabColor} />}
            </View>

            <View style={StyleHelper.calorieBox}>
                {itemObj.date && <Text
                    style={StyleHelper.textEntry}>{itemObj.date}</Text>}
            </View>

            <View style={[StyleHelper.calorieBox, { width: '25%' }]}>
                {itemObj.duration && <Text
                    style={StyleHelper.textEntry}>{`${itemObj.duration} mins`}</Text>}
                {itemObj.calories && <Text
                    style={StyleHelper.textEntry}>{itemObj.calories}</Text>}
            </View>
        </View>
        </Pressable>
    );
}
