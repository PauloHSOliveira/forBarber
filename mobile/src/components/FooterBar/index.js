import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

Icon.loadFont();

function FooterBar() {
    return (
        <View style={Styles.bar}>
            <TouchableOpacity>
                <Icon name="heart-outline" size={30} color="#0085FF" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="home-outline" size={30} color="#0085FF" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="bell-outline" size={30} color="#0085FF" />
            </TouchableOpacity>
        </View>
    );
}

export default withNavigation(FooterBar);
