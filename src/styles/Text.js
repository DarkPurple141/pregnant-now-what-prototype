import {
  StyleSheet
} from 'react-native';

const TextStyles =  StyleSheet.create({
  root: {
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    fontWeight: '400'
  },
  h1: {
     fontWeight: '600',
     fontSize: 28,
     color: '#111',
     paddingBottom: 10,
     paddingTop: 10
  },
  h1Border: {
     marginBottom: 10,
     borderStyle: 'solid',
     borderBottomWidth: 4,
     borderColor: '#ff616f'
  },
  h2: {
    paddingBottom: 5,
    paddingTop: 5,
    color: '#222',
    fontWeight: '500',
    fontSize: 24
  },
  p: {
    lineHeight: 30,
    color: '#444'
  }
});

export default TextStyles
