import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Styles from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { signUpRequest } from '../../store/modules/auth/actions';

export default function Register({ navigation }) {
  const dispach = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubtmit() {
    dispach(signUpRequest(name, email, password));
  }

  function linkLogin() {
    navigation.navigate('Login');
  }

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
          value={password}
          onChangeText={setPassword}
          returnKeyType="go"
        />

        <Button
          loading={loading}
          children={'Registrar'}
          onPress={handleSubtmit}
        />
      </View>

      <View>
        <TouchableOpacity style={{ marginTop: 30 }} onPress={linkLogin}>
          <Text style={Styles.textRegister}>Retornar ao Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
