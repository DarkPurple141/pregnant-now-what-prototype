import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Main from '@pages/Main';
import Weeks from '@pages/Weeks';
import Article from '@pages/Article';

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
     Main: {
       screen: Main,
       navigationOptions: {
         tabBarLabel: 'This Week',
         tabBarIcon: ({ tintColor }) =>
            <Icon name="update" size={36} color={tintColor} />,
       }
     },
     Weeks: {
       screen: FeedStack,
       navigationOptions: {
         tabBarLabel: 'Weeks',
         tabBarIcon: ({ tintColor }) =>
            <Icon name="account-circle" size={36} color={tintColor} />
       }
     },
     Info: {
       screen: Weeks,
       navigationOptions: {
         tabBarLabel: 'Info',
         tabBarIcon: ({ tintColor }) =>
            <Icon name="info" size={36} color={tintColor} />
       }
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

export const Root = StackNavigator({
   Tabs: {
     screen: Tabs,
     navigationOptions: ({ navigation }) => ({
        title: 'App the Duff',//`${navigation.state.routes[navigation.state.index].routeName}`
        headerStyle: {
           backgroundColor: '#ff616f'
        }
     })
  }
})
