import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { cards } from '../config/data';
import Card from '../components/Card';

export default class Main extends Component {
   constructor(props) {
      super(props);
      this.state = { active: 0 };
   }

   render() {
      return (
         <View style={styles.main}>
            <View style={styles.container}>
              { cards[this.state.active].content.map((card, index) => (
                 <Card
                  key={index}
                  card={card}
                  />
               ))
              }
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
  main: {
   flex: 1
  },
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  }
});
