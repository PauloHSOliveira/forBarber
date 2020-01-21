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
    backgroundColor: '#fff',
    margin: 10,
    marginTop: 15,
    height: 50,
    width: 110,
    borderRadius: 5,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  texthour: {
    color: '#0085FF',
    fontWeight: 'bold',
  },
});

export default Styles;
