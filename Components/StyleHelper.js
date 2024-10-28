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
    checkedCheckboxColor: '#4630EB',
}

const commonStyles = {
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        paddingBottom: 50,
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
    boxStyle: {
        height: 50,
        padding: 5,
        margin: 5,
        backgroundColor: ColorHelper.headerColor,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    activityBox: {
        width: '35%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    calorieBox: {
        width: '35%',
        height: 30,
        padding: 2,
        marginLeft: 5,
        backgroundColor: ColorHelper.headerTintColor,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textEntry: {
        color: ColorHelper.blackColor,
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
    checkboxSection: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    pressButtonDefaultStyle: {
        padding: 5,
        radius: 5,
        opacity: 1,
    },
    defaultPressedSytle: {
        // backgroundColor: 'purple',
        opacity: 0.2,
    },
}

export const StyleHelper = StyleSheet.create(commonStyles);
