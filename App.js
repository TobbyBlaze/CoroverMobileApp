// import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import Home from './components/Home';
import About from './components/About';
// import Search from './components/Search';
import Statistics from './components/Statistics';
import Diagnosis from './components/Diagnosis';

// import Home from './ocomponents/Home';
// import Profile from './ocomponents/Profile';
// import About from './components/About';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          // } else if (route.name === 'Search') {
          //   iconName = focused ? 'ios-pulse' : 'ios-pulse';
          } else if (route.name === 'Statistics') {
            iconName = focused ? 'ios-pulse' : 'ios-pulse';
          } else if (route.name === 'Diagnosis') {
            iconName = focused ? 'ios-pulse' : 'ios-pulse';
          } else if (route.name === 'About') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'navy',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Search" component={Search} /> */}
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Diagnosis" component={Diagnosis} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
});

// App.js
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation";

// import Home from './components/Home';
// import About from './components/About';


// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: Home
//   },
//   About: {
//     screen: About
//   }
// },{
//         initialRouteName: "Home"
// });

// const AppContainer = createAppContainer(AppNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
