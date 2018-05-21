import React, { Component } from 'react';

import {
  View
} from 'react-native';

import { profile } from '../config/profile';
import CardHeader from '@components/CardHeader';
import CardText from '@components/CardText';
import TextStyles from '@styles/Text';
import SectionStyles from '@styles/Section';

export default class Profile extends Component {

   render() {
    return (
       <View style={SectionStyles.card}>
         <CardHeader style={[ TextStyles.root, TextStyles.h2 ]}
                     title={ profile.name } />
         <CardText   style={[ TextStyles.root, TextStyles.p ]}
                     content={ profile.doctor } />
       </View>
    );
   }
}
