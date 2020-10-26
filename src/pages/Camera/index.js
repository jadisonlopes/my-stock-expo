import React, { useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import styles from './styles';
import Product from '../../classes/product';

export default function App({ go }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  async function pressSearch(code) {
    const product = await Product.request(code);
    if (product) go('Validation', { product });
    else Alert.alert('Produto não encontrado!');
  }

  function pressClose() {
    go('Home');
  }

  function pressScanner() {
    setScanned(false);
  }

  async function handleBarCodeScanned({ data }) {
    setScanned(true);
    await pressSearch(data);
  }

  function ButtonClose() {
    return (
      <TouchableOpacity style={styles.btnClose} onPress={pressClose}>
        <Text>X</Text>
      </TouchableOpacity>
    );
  }

  function PermissionDenied({ title }) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#f8830a',
        }}
      >
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{title}</Text>
        <ButtonClose />
      </View>
    );
  }

  if (hasPermission === null) {
    return <PermissionDenied title="Solicitando permissão de câmera" />;
  }
  if (hasPermission === false) {
    return <PermissionDenied title="FAVOR LIBERAR A CÂMERA" />;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.line} />
      <ButtonClose />
      {scanned && (
        <TouchableOpacity style={styles.btnScanner} onPress={pressScanner}>
          <Text style={styles.textBtnScanner}>Escannear</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
