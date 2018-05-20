import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text
} from 'react-native';

export default class SectionHeader extends Component {

  render() {
    return (
       <View style={ this.props.border }>
         <Text style={ this.props.style }>{ this.props.title }</Text>
       </View>
    );
  }
}

SectionHeader.propTypes = {
   title: PropTypes.string,
   style: Text.propTypes.style,
   border: View.propTypes.style
}
