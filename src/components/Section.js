import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';

import Card from '@components/Card'
import SectionHeader from '@components/SectionHeader'
import TextStyles from '@styles/Text'
import SectionStyles from '@styles/Section'

export default class Section extends Component {

  render() {
    return (
       <View style={SectionStyles.section}>
         <SectionHeader
               border={TextStyles.h1Border}
               style={[TextStyles.root, TextStyles.h1]}
               title={this.props.title}/>
         { this.props.section.words.map((card, index) => (
            <Card
             key={index}
             card={card}
             />
         ))}
       </View>
    );
  }
}

Section.propTypes = {
   section: PropTypes.shape({
      words: PropTypes.array,
   }),
   title: PropTypes.string
}
