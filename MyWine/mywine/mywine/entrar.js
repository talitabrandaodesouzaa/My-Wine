import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

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
        <Image
          source={require('./assets/logo1.png')}
          style={styles.logoImage}
        />
        <Animated.View style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}>
          <Text style={styles.label1}>Entrar com:</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.emoji}>🌐</Text>
            <Text style={styles.emoji}>📧</Text>
            <Text style={styles.emoji}>📸</Text>
          </View>
        </Animated.View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#F4DFD8' }]}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#F4DFD8' }]}>
            <Text style={styles.buttonText}>Agora não</Text>
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
    marginTop: 50,
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    marginRight: 30,
    color: '#962F5A',
  },
  label1: {
    color: '#962F5A',
    fontSize: 25,
    marginBottom: 20,
  },
  emoji: {
    fontSize: 25,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%', // Ajustei a largura para 80%
    justifyContent: 'space-between', // Adicionei essa propriedade para espaçar os botões
    position: 'absolute',
    bottom: 20, // Ajustei a distância do fundo
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#962F5A',
    fontSize: 16,
  },
});


