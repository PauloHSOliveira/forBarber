import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

import Styles from './styles';

import api from '../../services/api';
import Input from '../../components/Input';

export default function Login({ navigation }) {
    const [nameIcon, setNameIcon] = useState('eye');

    const [loadingbtn, setLodingbtn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubtmit() {
        setLodingbtn(true);
        const response = await api
            .post('/sessions', {
                email,
                password,
            })
            .then(res => {
                setLodingbtn(false);
                navigation.navigate('Dashboard');
            });
    }

    function linkRegister() {
        navigation.navigate('Register');
    }

    const Loading = () => {
        if (loadingbtn === false) {
            return <Text style={Styles.textbtn}>Entrar</Text>;
        } else {
            return <ActivityIndicator color="#FFFFFF" />;
        }
    };
    return (
        <KeyboardAvoidingView behavior="padding" style={Styles.container}>
            <View style={Styles.form}>
                <Input
                    icon="email-outline"
                    label="E-mail"
                    keyboardType="email-address"
                    returnKeyType="next"
                    value={email}
                    onChangeText={setEmail}
                />

                <Input
                    icon="lock-outline"
                    label="Senha"
                    secureTextEntry={true}
                    returnKeyType="go"
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={Styles.button} onPress={handleSubtmit}>
                    <Loading />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Text style={{ color: '#878787' }}>Esqueci a senha</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={{ marginTop: 30 }}
                    onPress={linkRegister}
                >
                    <Text style={Styles.textRegister}>Registrar-se</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
