import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.main}>
         <View style={styles.container}>
           <Text>
            Home!
           </Text>
         </View>
      </View>
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
