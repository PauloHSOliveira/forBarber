import React from 'react';
import { TouchableOpacity, ActivityIndicator, Text } from 'react-native';

import Styles from './styles';

export default function Button({ loading, children, ...rest }) {
  return (
    <TouchableOpacity style={Styles.button} {...rest}>
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text style={Styles.textbtn}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}
