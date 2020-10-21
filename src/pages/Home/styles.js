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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUser: {
    marginTop: 5,
    fontSize: 20,
    color: '#00000020',
  },
  logo: {
    width: 120,
    height: 80,
  },
  btnCodbarra: {
    marginTop: 25,
    width: '75%',
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#ffffff',
    borderWidth: 2,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOpacity: 0.6,
    shadowOffset: { width: 3, height: 3 },
    backgroundColor: '#ffffff20',
  },
  textCodbarra: {
    marginTop: 5,
    fontSize: 16,
    color: '#fff',
  },
  contentSearch: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleInput: {
    fontSize: 22,
    color: '#fff',
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
