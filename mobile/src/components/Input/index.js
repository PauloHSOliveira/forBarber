import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

import Styles from './style';
import colors from './colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();
export default function Input({ icon, ...rest }) {
  return (
    <View>
      <TextInput
        mode="outlined"
        autoCapitalize="none"
        autoCorrect={false}
        theme={{ colors }}
        style={Styles.input}
        {...rest}
      />
      {icon && (
        <Icon name={icon} size={20} style={Styles.icon} color="#878787" />
      )}
    </View>
  );
}
