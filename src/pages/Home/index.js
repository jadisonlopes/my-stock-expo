import React, { useState, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  Keyboard,
} from 'react-native';

import styles from './styles';
import codbarra from '../../assets/codigodebarras.png';
import Product from '../../classes/product';
import { DefaultButton } from '../../components';

export default function Home({ go, response }) {
  const { user } = response;
  const [codigo, setCodigo] = useState('');
  const inputCode = useRef(null);

  async function pressSearch(code) {
    const product = await Product.request(code || codigo);
    if (product) go('Validation', { product });
    else {
      setCodigo('');
      inputCode.current.focus();
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.contentInfo}>
          <Text style={styles.textUser}>{`Você está logado como ${user}`}</Text>
          <TouchableOpacity
            style={styles.btnCodbarra}
            onPress={() => {
              go('Camera');
            }}
          >
            <Image style={styles.logo} source={codbarra} />
            <Text style={styles.textCodbarra}>Capturar Codigo de Barra</Text>
          </TouchableOpacity>
          <View style={styles.contentSearch}>
            <Text style={styles.titleInput}>Código do Produto</Text>
            <TextInput
              autoFocus
              ref={inputCode}
              style={styles.textInput}
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={(text) => {
                setCodigo(text);
                if (text.length === 0) Keyboard.dismiss();
                else if (text.length === 6) pressSearch(text);
              }}
              value={codigo}
            />
          </View>
        </View>
        <DefaultButton press={pressSearch} title="Buscar" />
      </View>
    </TouchableWithoutFeedback>
  );
}
