import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import CardHeader from './CardHeader';
import CardText from './CardText';

export default class Card extends Component {

  render() {
    return (
       <View style={styles.container}>
         <CardHeader title={ this.props.card.words[0].title} />
         <CardText   content={ this.props.card.words[0].body } />
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
