import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity
} from 'react-native';

import CardHeader from '@components/CardHeader';
import CardText from '@components/CardText';
import TextStyles from '@styles/Text';
import SectionStyles from '@styles/Section';

export default class Card extends Component {

  render() {
    return (
       <TouchableOpacity style={SectionStyles.card}>
         <CardHeader style={[ TextStyles.root, TextStyles.h2 ]}
                     title={ this.props.card.title} />
         <CardText   style={[ TextStyles.root, TextStyles.p ]}
                     content={ this.props.card.body } />
       </TouchableOpacity>
    );
  }
}

Card.propTypes = {
   card: PropTypes.shape({
      title: PropTypes.string,
      body:  PropTypes.string
   })
}
