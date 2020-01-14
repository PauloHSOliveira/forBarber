import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Styles from './styles';

Icon.loadFont();

function Header({ title }) {
    return (
        <View style={Styles.header}>
            <View style={Styles.areaRow}>
                <Text style={Styles.textTitle}>{title}</Text>
                <TouchableOpacity style={Styles.iconBtn}>
                    <Icon name="dots-three-horizontal" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default withNavigation(Header);
