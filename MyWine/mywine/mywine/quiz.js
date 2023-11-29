import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

export default function App() {
  const offset = new Animated.ValueXY({ x: 0, y: 80 });
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding">
      <View style={styles.containerLogo}>
        <Animated.View style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}>
          <Text style={styles.label1}>
            Encontre a combinação perfeita para sua jornada agora mesmo!
            Deseja embarcar em uma experiência personalizada?
          </Text>
          <View style={styles.inputContainer}>
            {/* Se você quiser adicionar algum conteúdo abaixo do texto, pode colocá-lo aqui */}
          </View>
        </Animated.View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#621630' }]}>
            <Text style={styles.buttonText}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#621630' }]}>
            <Text style={styles.buttonText}>Agora Não</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4DFD8',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50, // Ajustei o marginTop para centralizar o logo
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%', // Ajustei a largura para 80%
    marginTop: 20, // Ajustei o marginTop para alinhar o texto com os inputs
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label1: {
    color: '#962F5A',
    fontSize: 20, // Ajustei o tamanho do texto
    marginBottom: 10, // Ajustei o marginBottom para separar o texto dos inputs
    textAlign: 'center', // Centralizei o texto
  },
  input: {
    backgroundColor: '#E9C3B6',
    flex: 1,
    color: '#000',
    fontSize: 17,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
