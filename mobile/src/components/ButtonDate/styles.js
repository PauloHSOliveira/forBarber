import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  dateButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    height: 52,
    backgroundColor: '#FBFBFB',
    marginTop: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomColor: '#0085FF',
    borderBottomWidth: 2,
    elevation: 2,
  },

  date: {
    color: '#878787',
    fontWeight: '600',
  },
});

export default Styles;
