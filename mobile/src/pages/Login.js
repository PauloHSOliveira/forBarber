import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { TextInput } from 'react-native-paper';

import Styles from '../styles/styles';
import colors from '../styles/inputtheme';

import api from '../services/api';

export default function Login() {
    const [loadingbtn, setLodingbtn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubtmit() {
        setLodingbtn(true);
        console.log(email, password);

        const response = await api.post('/sessions', {
            email,
            password,
        });

        console.log(response);
        setLodingbtn(false);
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
                <TextInput
                    label="E-mail"
                    mode="outlined"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    theme={{ colors }}
                    style={Styles.input}
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    label="Senha"
                    mode="outlined"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="go"
                    theme={{ colors }}
                    style={Styles.input}
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
                <TouchableOpacity style={{ marginTop: 30 }}>
                    <Text style={Styles.textRegister}>Registrar-se</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
