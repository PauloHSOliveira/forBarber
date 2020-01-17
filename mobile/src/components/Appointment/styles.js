import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  list: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#FBFBFB',
    elevation: 1,
    margin: 10,
    borderRadius: 5,
  },

  Past: {
    opacity: 0.2,
  },

  noPast: {
    opacity: 1,
  },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: 'contain',
  },

  info: {
    marginLeft: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  hour: {
    color: '#999',
    marginTop: 5,
  },

  cancel: {
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    width: 60,
    height: 20,
  },

  textCancel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Styles;
