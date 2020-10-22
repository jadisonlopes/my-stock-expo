import React, { useState, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text,
  TextInput,
  View,
} from 'react-native';

import styles from './styles';
import Usuario from '../../classes/usuario';
import { DefaultButton } from '../../components';
import env from '../../assets/env';

export default function Logon({ go }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [enablePassword, setEnablePassword] = useState(false);
  const inputPassword = useRef(null);
  const inputName = useRef(null);

  async function userExists(name) {
    const exists = await Usuario.getRequest(name);
    return exists;
  }

  async function userPermitted(value) {
    const permitted = await Usuario.permitted(value);
    return permitted;
  }

  function validPassword(value) {
    return value === env.PASSWORD;
  }

  async function validUser() {
    if (user.length < 1) return;
    if (!(await userExists(user))) {
      Alert.alert('Usuário não existe!');
    } else if (!(await userPermitted(user))) {
      Alert.alert('Usuário não permitido!');
    } else {
      setEnablePassword(true);
      inputPassword.current.focus();
    }
  }

  async function pressBegin() {
    if (password.length < 1) return;
    if (!validPassword(password)) {
      Alert.alert('Senha inválida!');
    } else go('Home', { user });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.contentInfo}>
          <Text style={styles.textH1}>Olá!</Text>
          <Text style={styles.text}>Favor informar seu nome de usuário.</Text>
          <TextInput
            ref={inputName}
            style={styles.textInput}
            autoCapitalize="characters"
            placeholder="Nome"
            value={user}
            onFocus={() => {
              setEnablePassword(false);
              setPassword('');
            }}
            onChangeText={(text) => {
              setUser(text);
            }}
            onBlur={validUser}
          />
          <TextInput
            ref={inputPassword}
            style={styles.textInput}
            secureTextEntry
            maxLength={14}
            placeholder="Senha"
            value={password}
            editable={enablePassword}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </View>
        <DefaultButton press={pressBegin} title="Começar" />
      </View>
    </TouchableWithoutFeedback>
  );
}
