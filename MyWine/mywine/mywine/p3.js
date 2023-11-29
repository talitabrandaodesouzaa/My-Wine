import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const offset = new Animated.ValueXY({ x: 0, y: 80 });
  const [opacity] = useState(new Animated.Value(0));
  const [checked, setChecked] = useState('option1'); // Estado para controlar o radio button selecionado

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
            Responda agora:
          </Text>
          <Text style={styles.label2}>
            3. Tem preferência por vinhos secos ou suave?
          </Text>
          <View style={styles.radioButtonContainer}>
            <View style={styles.radioButton}>
              <RadioButton
                value="option1"
                status={checked === 'option1' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('option1')}
              />
              <Text>Seco</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton
                value="option2"
                status={checked === 'option2' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('option2')}
              />
              <Text>Suave</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton
                value="option3"
                status={checked === 'option3' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('option3')}
              />
              <Text>Outros</Text>
            </View>
          </View>
        </Animated.View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#621630' }]}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#621630' }]}>
            <Text style={styles.buttonText}>Continuar</Text>
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
    marginTop: 20, // Reduzi o marginTop para subir os textos
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 10,
  },
  radioButtonContainer: {
    marginTop: 10,
    alignItems: 'left',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label1: {
    color: '#962F5A',
    fontSize: 20,
    marginBottom: 350, // Reduzi a margem para subir o texto
    textAlign: 'center',
  },
  label2: {
    color: '#962F5A',
    fontSize: 20,
    marginBottom: 0, // Ajustei a margem para subir o texto
    textAlign: 'left', // Deixe como 'left' para alinhar à esquerda
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


