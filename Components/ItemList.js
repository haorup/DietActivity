import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function ItemList({ dataArr }) {
    console.log(dataArr);
    return (
        <View>

            <FlatList data={dataArr}
                renderItem={({ item }) => (
                    <View>
                        {item.activity && <Text>Activity: {item.activity}</Text>}
                        {item.description && <Text>Description: {item.description}</Text>}
                        {item.date && <Text>Date: {item.date}</Text>}
                        {item.duration && <Text>Duration: {item.duration}</Text>}
                        {item.calories && <Text>Calories: {item.calories}</Text>}
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})