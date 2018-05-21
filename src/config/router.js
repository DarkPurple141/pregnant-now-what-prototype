import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Main from '@pages/Main';
import Weeks from '@pages/Weeks';
import Article from '@pages/Article';
import Profile from '@pages/Profile';

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
     'This Week': {
       screen: Main,
       navigationOptions: {
         tabBarLabel: 'This Week',
         tabBarIcon: ({ tintColor }) =>
            <Icon name="update" size={36} color={tintColor} />,
       }
     },
     Calendar: {
       screen: FeedStack,
       navigationOptions: {
         tabBarLabel: 'Calendar',
         tabBarIcon: ({ tintColor }) =>
            <Icon name="event-note" size={36} color={tintColor} />
       }
     },
     Me: {
       screen: Profile,
       navigationOptions: {
         tabBarLabel: 'Me',
         tabBarIcon: ({ tintColor }) =>
            <Icon name="account-circle" size={36} color={tintColor} />
       }
     }
  },
  {
     tabBarOptions: {
        style: {
          height: 56
       },
       activeTintColor: '#ff616f',
       labelStyle: {
          fontSize: 12,
       },
     }
  }
)

const titles = ["This Week", "Weeks", "More Info"]

export const RootNavigator = StackNavigator({
   Tabs: {
     screen: Tabs,
     navigationOptions: ({ navigation }) => ({
        //title: 'App the Duff', //`${titles[navigation.state.index]}`, //'',
        headerStyle: {
           backgroundColor: '#ff616f',
           height: 22
        }
     })
  }
})
