import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },

  header: {
    alignSelf: 'stretch',
    height: 100,
  },

  avatar: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },

  areaName: {
    flexDirection: 'row',
    marginLeft: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  btn: {
    backgroundColor: '#0085FF',
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 2,
    marginTop: 150,
  },

  textbtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Styles;
