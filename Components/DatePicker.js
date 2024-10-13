import { StyleSheet, Text, View, TextInput, Platform } from 'react-native'
import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleHelper } from './StyleHelper';


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
            <Text style={StyleHelper.text}>Date *</Text>
            <TextInput style={[StyleHelper.input, { marginBottom: 0 }]}
                onPressIn={handleDatePicker}
                value={formattedDate} />
            {showDatePicker && <DateTimePicker
                value={new Date()}
                mode='date'
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
                onChange={handleDateChange} />}
        </View>
    )
}

const styles = StyleSheet.create({})