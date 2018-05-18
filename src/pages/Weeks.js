import React, { Component } from 'react';
import Month from '../components/Month';

import {
  StyleSheet,
  ScrollView
} from 'react-native';

import { List, ListItem } from 'react-native-elements';

export default class Weeks extends Component {
  render() {
    return (
      <ScrollView>
        {[1,2,3,4,5].map((data) => (
           <Month
            month={data}
            key={data} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
   flex: 1
  },
  container: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
