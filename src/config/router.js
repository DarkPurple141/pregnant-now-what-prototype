import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../pages/Home';
import Weeks from '../pages/Weeks';
import Article from '../pages/Article';

export const FeedStack = StackNavigator({
  Weeks: {
    screen: Weeks,
    navigationOptions: {
      title: 'Weeks',
    },
  },
  Article: {
    screen: Article,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
    }),
  },
});

export const Tabs = TabNavigator({
     Home: {
       screen: Home,
       navigationOptions: {
         tabBarLabel: 'Home',
         tabBarIcon: ({ tintColor }) =>
            <Icon name="home" size={36} color={tintColor} />,
       },
     },
     Weeks: {
       screen: FeedStack,
       navigationOptions: {
         tabBarLabel: 'Weeks',
         tabBarIcon: ({ tintColor }) =>
            <Icon name="account-circle" size={36} color={tintColor} />
       },
     },
     Stuff: {
       screen: Weeks,
       navigationOptions: {
         tabBarLabel: 'Info',
         tabBarIcon: ({ tintColor }) =>
            <Icon name="info" size={36} color={tintColor} />
       },
     }
  },
  {
     tabBarOptions: {
        style: {
          height: 56
        }
     }
  }
)
