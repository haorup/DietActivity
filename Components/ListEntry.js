import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StyleHelper } from './StyleHelper';

export default function ListEntry({ itemObj }) {
  return (
    <View style={styles.boxStyle}>

      <View style={styles.activityBox}>
        {itemObj.activity && <Text style={styles.textEntry}>{itemObj.activity}</Text>}

        {itemObj.description && <Text style={styles.textEntry}>{itemObj.description}</Text>}

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
    backgroundColor: 'rgba(3, 201, 169, 1)',
    borderRadius: 5,
    flexDirection: 'row', // Arrange elements in a row
    alignItems: 'center', // Align elements vertically center
    justifyContent: 'flex-start', // Spread items evenly with space between
  },
  activityBox: {
    width: '40%',
    justifyContent: 'center',
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
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
});
