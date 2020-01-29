import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fbfbfb',
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 2 },
    elevation: 2,
    marginTop: 10,
    borderRadius: 5,
  },

  avatar: {
    height: 50,
    width: 50,
    margin: 10,
    borderRadius: 5,
  },

  name: {
    color: '#0085FF',
    fontWeight: 'bold',
  },

  date: {
    marginTop: 5,
    color: '#878787',
  },
});

export default Styles;
