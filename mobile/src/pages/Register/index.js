import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

import Styles from './styles';

import api from '../../services/api';
import Input from '../../components/Input';

export default function Login() {
    const [loadingbtn, setLodingbtn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubtmit() {
        setLodingbtn(true);
        const response = await api
            .post('/users', {
                name,
                email,
                password,
            })
            .then(res => {
                setLodingbtn(false);
            });
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
                    icon="account-outline"
                    label="Nome"
                    returnKeyType="next"
                    value={name}
                    onChangeText={setName}
                />
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
            </View>
        </KeyboardAvoidingView>
    );
}
