import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class CardText extends Component {

  render() {
    return (
       <View style={styles.container}>
         <Text style={ this.props.style }>
            { this.props.content }
         </Text>
       </View>
    );
  }
}

CardText.propTypes = {
   content: PropTypes.string,
   style: Text.propTypes.style
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
});
