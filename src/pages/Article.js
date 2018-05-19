import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Article extends Component {
  render() {
    return (
      <View style={styles.main}>
         <View style={styles.container}>
           <Text>
            Article
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
    backgroundColor: 'salmon'
  }
});
