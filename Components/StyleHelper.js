import { StyleSheet, TextInput } from 'react-native';

export const ColorHelper = {
    activeTabColor: 'orange',
    inactiveTabColor: 'black',
    inputBackgroundColor: '#d3d3d3',
    blackColor: 'black',
    headerColor: 'rgba(3, 201, 169, 1)',
    headerTintColor: 'white',
    firstBackgroundColor: 'lightgreen',
    secondBackgroundColor: '#FFB6C1',
}

const commonStyles = {
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
    //    alignItems: 'center',
        // justifyContent: 'center',
        padding: 30,
        paddingTop: 30,
        paddingBottom: 100,
      },

    text: {
        color: ColorHelper.blackColor,
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
      },
    input: {
        width: '100%',
        borderWidth: 2,
        borderColor: ColorHelper.blackColor,
        height: 50,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: ColorHelper.inputBackgroundColor,
        fontSize: 15,
        padding: 10,
    },
    dropDown: {
        backgroundColor: ColorHelper.inputBackgroundColor,
        borderColor: ColorHelper.blackColor,
        borderWidth: 2,
        marginBottom: 10,
    },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginBottom: 5,
    },
}

export const StyleHelper = StyleSheet.create(commonStyles);
