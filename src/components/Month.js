
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default class Month extends Component {

   moreInfo(article) {
     this.props.navigation.navigate('Article', {title: article.title});
   }

  render() {
    return (
       <TouchableOpacity style={styles.container}
             onPress={() => this.moreInfo({ title: "Buckle up" })}>
         <Text style={styles.welcome}>
          { monthToString(this.props.month) }
         </Text>
       </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});


function monthToString(month) {
   let retVal = ""
   switch (month) {
      case 1: retVal = "January"
         break;
      case 2: retVal = "February"
         break;
      case 3: retVal = "March"
         break;
      case 4: retVal = "April"
         break;
      case 5: retVal = "May"
         break;
      case 6: retVal = "June"
         break;
      case 7: retVal = "July"
         break;
      case 8: retVal = "August"
         break;
      case 9: retVal = "September"
         break;
      case 10: retVal = "October"
         break;
      case 11: retVal = "November"
         break;
      case 12: retVal = "December"
         break;

   }

   return retVal
}
