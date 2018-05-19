import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class CardText extends Component {

  render() {
    return (
       <View style={styles.container}>
         <Text>{ this.props.content }</Text>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  }
});
