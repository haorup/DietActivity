import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';


export default function DatePicker({ date, setDate,
    formattedDate, setFormattedDate,
    showDatePicker, setShowDatePicker }) {

    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    function handleDatePicker() {
        const currentDate = new Date();
        setDate(currentDate);
        setFormattedDate(currentDate.toLocaleDateString('en-US', options).replace(/,/g, ''));
        setShowDatePicker((prev) => !prev);
    }

    function handleDateChange(e, selectedDate) {
        if (e.type === 'set') {
            setDate(selectedDate);
            setShowDatePicker(false);
            setFormattedDate(selectedDate.toLocaleDateString('en-US', options).replace(/,/g, ''));
        } else {
            setShowDatePicker(false);
        }
    }
    return (
        <View>
            <Text>Date *</Text>
            <TextInput style={{ borderWidth: 2, borderColor: 'black', height: 50 }}
                onPressIn={handleDatePicker}
                value={formattedDate} />
            {showDatePicker && <DateTimePicker
                value={new Date()}
                mode='date'
                display="inline"
                onChange={handleDateChange} />}
        </View>
    )
}

const styles = StyleSheet.create({})