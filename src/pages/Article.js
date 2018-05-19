import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class Article extends Component {
  render() {
    return (
      <ScrollView style={styles.main}>
         <View style={styles.container}>
           <Text>
            { this.props.navigation.state.params.title }
           </Text>
         </View>
      </ScrollView>
    )
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
