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

  areaButtons: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  hour: {
    backgroundColor: '#FBFBFB',
    margin: 10,
    height: 50,
    width: 100,
  },
});

export default Styles;
