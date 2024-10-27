import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Activity from './Screens/Activity';
import Diet from './Screens/Diet';
import Settings from './Screens/Setting';
import AddActivity from './Screens/AddActivity';
import AddDiet from './Screens/AddDiet';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ColorHelper } from './Components/StyleHelper';
import { ColorProvider } from './Components/ColorContext';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;
        if (route.name === 'Activity') {
          iconName = 'run';
        } else if (route.name === 'Settings') {
          iconName = 'account-settings';
        } else if (route.name === 'Diet') {
          iconName = 'food';
        }
        return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
      },
      tabBarStyle: { backgroundColor: ColorHelper.headerColor },
      tabBarActiveTintColor: ColorHelper.activeTabColor,
      tabBarInactiveTintColor: ColorHelper.inactiveTabColor,
      headerStyle: { backgroundColor: ColorHelper.headerColor },
      headerTintColor: ColorHelper.headerTintColor,

    })}>
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Diet" component={Diet} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <ColorProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerStyle: { backgroundColor: ColorHelper.headerColor },
            headerTintColor: ColorHelper.headerTintColor,
          }
        }>
          <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name='AddActivity' component={AddActivity} options={{ headerBackTitle: 'Back' }} />
          <Stack.Screen name='AddDiet' component={AddDiet} options={{ headerBackTitle: 'Back' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ColorProvider>
  );
}
