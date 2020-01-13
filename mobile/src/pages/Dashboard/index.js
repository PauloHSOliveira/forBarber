import React from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import FooterBar from '../../components/FooterBar';

export default function Dashboard() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <FooterBar />
        </View>
    );
}
