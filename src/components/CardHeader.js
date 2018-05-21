import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class CardHeader extends Component {

  render() {
    return (
       <View>
         <Text style={ this.props.style }>{ this.props.title }</Text>
       </View>
    );
  }
}

CardHeader.propTypes = {
   title: PropTypes.string,
   style: Text.propTypes.style
}