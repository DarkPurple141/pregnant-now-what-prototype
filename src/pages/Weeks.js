import React, { Component } from 'react';
import Month from '../components/Month';

import {
  StyleSheet,
  ScrollView
} from 'react-native';

//import { List, ListItem } from 'react-native-elements';

export default class Weeks extends Component {
  render() {
    return (
      <ScrollView style={styles.main}>
        {[1,2,3,4,5,6,7,8].map((data) => (
           <Month
            month={data}
            key={data}
            navigation={this.props.navigation} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
   paddingTop: 10
  },
  container: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'salmon'
  }
});
