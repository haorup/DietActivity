import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ListEntry from './ListEntry';

export default function ItemList({ dataArr }) {
    console.log(dataArr);
    return (
        <View>

            <FlatList data={dataArr}
                renderItem={({ item }) => (
                    <ListEntry itemObj={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})