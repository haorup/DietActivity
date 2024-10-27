import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { StyleHelper, ColorHelper } from './StyleHelper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function ListEntry({ itemObj }) {
    const activityLimit = 60;
    const dietLimit = 800;
    const activityData = itemObj?.activity ?? null;
    const durationData = itemObj?.duration ? parseInt(itemObj.duration) : null;
    const caloriesData = itemObj?.calories ? parseInt(itemObj.calories) : null;
    const navigation = useNavigation();

    let showActivityIcon = (activityData === 'Running'
        || activityData === 'Weights') && (durationData > activityLimit);

    let showDietIcon = caloriesData > dietLimit;

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
                {showActivityIcon && <MaterialCommunityIcons
                    name='alert' size={24} color={ColorHelper.activeTabColor} />}

                {/* diet data and reminder icon */}
                {itemObj.description && <Text
                    style={[StyleHelper.textEntry,
                    { color: 'white', fontSize: 15 }]}>{itemObj.description}</Text>}
                {showDietIcon && <MaterialCommunityIcons
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
