import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  line: {
    width: '100%',
    borderColor: '#FF0000',
    borderWidth: 1,
    position: 'absolute',
    top: '50%',
  },
  btnClose: {
    padding: 15,
    position: 'absolute',
    top: 25,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  btnScanner: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 20,
  },
  textBtnScanner: {
    fontSize: 20,
    textAlign: 'center',
  },
});
