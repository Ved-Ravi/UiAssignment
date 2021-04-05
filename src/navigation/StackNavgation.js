import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SurveyScreen from '../screens/survey';
import AuthScreen from '../screens/auth';
import BlogScreen from '../screens/blogs';
import IntroScreen from '../screens/intro';
import DrawerNavigator from './DrawerNavigation';

const Stack = createStackNavigator();

export default class StackNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Stack.Navigator initialRouteName={'Intro'}>
        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}
