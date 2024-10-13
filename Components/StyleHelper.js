import { StyleSheet } from 'react-native';

export const ColorHelper = {
    activeTabColor: 'orange',
    inactiveTabColor: 'gray',
}

const commonStyles = {
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        paddingTop: 60,
        paddingBottom: 120,
      },
}

export const StyleHelper = StyleSheet.create(commonStyles);
