import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../pages/Home';
import Weeks from '../pages/Weeks';

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) =>
         <Icon name="home" size={35} color={tintColor} />,
    },
  },
  Weeks: {
    screen: Weeks,
    navigationOptions: {
      tabBarLabel: 'Weeks',
      tabBarIcon: ({ tintColor }) =>
         <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
})
