import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function ItemList({dataArr}) {
  return (
    <View>
      <FlatList data={dataArr}
        renderItem={({item}) => (
          <View>
            <Text>{item.activity}</Text>
            <Text>{item.date}</Text>
            <Text>{item.duration}</Text>
          </View>
        )}
        />
    </View>
  )
}

const styles = StyleSheet.create({})