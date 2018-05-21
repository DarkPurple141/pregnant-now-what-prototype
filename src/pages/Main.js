import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
  Text
} from 'react-native';

import {
   Header,
   Icon
} from 'react-native-elements';

import { cards } from '../config/data';
import Section from '@components/Section';

export default class Main extends Component {
   constructor(props) {
      super(props);
      this.state = { active: 0 };
      this.sections = ['Before my appointment',
                       'At my appointment',
                       'After my appointment']
   }

   _sectionTitle(index) {
      return this.sections[index]
   }

   // bound
   _increaseCount = () => {
     this.setState({ active: this.state.active + 1 })
   }

   // bound
   _decreaseCount = () => {
      this.setState({ active: this.state.active - 1 })
   }

   render() {
      return (
         <View style={styles.main}>
            <Header
               leftComponent={<Icon name="chevron-left" onPress={ this._decreaseCount }/>}
               centerComponent={{ text: `Week ${cards[this.state.active].period.start}`, style: { color: '#fff' } }}
               rightComponent={<Icon name="chevron-right" onPress={ this._increaseCount }/>}
               />
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
