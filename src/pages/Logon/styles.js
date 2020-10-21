import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#f8830a',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  contentInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textH1: {
    color: '#fff',
    fontSize: 100,
  },
  text: {
    color: '#fff',
    maxWidth: '60%',
    textAlign: 'center',
    fontSize: 25,
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    minWidth: '75%',
    borderColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
  },
});
