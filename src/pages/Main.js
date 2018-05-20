import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import { cards } from '../config/data';
import Section from '@components/Section';

export default class Main extends Component {
   constructor(props) {
      super(props);
      this.state = { active: 0 };
      this.sections = ['Before my appointment',
                       'At my appointment',
                       'After my appointment'
                      ]
   }

   _sectionTitle(index) {
      return this.sections[index]
   }

   render() {
      return (
         <View style={styles.main}>
            <ScrollView>
              { cards[this.state.active].content.map((section, index) => (
                 <Section
                  title={ this._sectionTitle(index) }
                  key={index}
                  section={section}
                  />
               ))
              }
            </ScrollView>
         </View>
      );
   }
}

const styles = StyleSheet.create({
  main: {
   flex: 1
  }
});
