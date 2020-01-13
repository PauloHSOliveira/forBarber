import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Styles from './styles';

Icon.loadFont();

function Header() {
    return (
        <View style={Styles.header}>
            <TouchableOpacity style={Styles.iconBtn}>
                <Icon name="dots-three-horizontal" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

export default withNavigation(Header);
