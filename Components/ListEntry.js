import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StyleHelper, ColorHelper } from './StyleHelper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ListEntry({ itemObj }) {
    const activityData = itemObj?.activity ?? null;
    const durationData = itemObj?.duration ? parseInt(itemObj.duration) : null;
    const caloriesData = itemObj?.calories ? parseInt(itemObj.calories) : null;

    let showActivityIcon = (activityData === 'Running'
                    || activityData === 'Weights') && (durationData > 60);

    let showDietIcon = caloriesData > 800;

    return (
        <View style={styles.boxStyle}>

            <View style={styles.activityBox}>
                {/* activity data and reminder icon */}
                {itemObj.activity && <Text style={styles.textEntry}>{itemObj.activity}</Text>}
                {showActivityIcon && <MaterialCommunityIcons name='alert' size={24} color={ColorHelper.activeTabColor} />}

                {/* diet data and reminder icon */}
                {itemObj.description && <Text style={styles.textEntry}>{itemObj.description}</Text>}
                {showDietIcon && <MaterialCommunityIcons name='alert' size={24} color={ColorHelper.activeTabColor} />}

            </View>


            <View style={styles.calorieBox}>
                {itemObj.date && <Text>{itemObj.date}</Text>}
            </View>


            <View style={[styles.calorieBox, { width: '15%' }]}>
                {itemObj.duration && <Text>{itemObj.duration}</Text>}
                {itemObj.calories && <Text>{itemObj.calories}</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boxStyle: {
        width: '100%',
        height: 50,
        padding: 5,
        margin: 5,
        backgroundColor: 'rgba(3, 201, 169, 1)',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    activityBox: {
        width: '40%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    calorieBox: {
        width: '40%',
        height: 30,
        padding: 5,
        marginLeft: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textEntry: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
});
