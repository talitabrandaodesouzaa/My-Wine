import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import * as EmailValidator from 'email-validator';
import { TextInputMask } from 'react-native-masked-text';

const ContactForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorCnpj, setErrorCnpj] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const sendEmail = () => {
    if (!name || !email || !message || !company || !cnpj) {
      setErrorMessage(true);
      return;
    }

    if (!EmailValidator.validate(email)) {
      setErrorEmail(true);
      return;
    }

    const cnpjDigitsOnly = cnpj.replace(/\D/g, ''); // Remove não-dígitos
    if (cnpjDigitsOnly.length !== 14) {
      setErrorCnpj(true);
      return;
    }

    const defaultText = 'Gostaria de mais informações de como me tornar parceiro My Wine!\n\n';
    const emailContent = `${defaultText}Nome: ${name}\nEmail: ${email}\nRazão Social: ${company}\nCNPJ: ${cnpj}\n\n${message}`;

    Linking.openURL(`mailto:mywinedistribuidoradevinhos@gmail.com?subject=Quero ser parceiro&body=${emailContent}`)
      .then(() => {
        console.log('E-mail enviado!');
        setEmailSent(true);
      })
      .catch((error) => {
        console.error('Erro ao enviar o e-mail:', error);
        setErrorMessage(true);
        setEmailSent(false);
      });
  };

  useEffect(() => {
    if (emailSent) {
      const timer = setTimeout(() => {
        setEmail('');
        setName('');
        setMessage('');
        setCompany('');
        setCnpj('');
        setEmailSent(false);
      }, 3000); // Limpa os campos e remove o feedback após 3 segundos
      return () => clearTimeout(timer);
    }
  }, [emailSent]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo1.png')} style={styles.logo} />
      <Text style={styles.title}> Seja Parceiro</Text>
      <TextInput
        style={[styles.input, errorName && styles.errorInput]}
        placeholder="Nome"
        value={name}
        onChangeText={(text) => {
          setName(text);
          setErrorName(!/^[a-zA-Z\s]*$/.test(text));
          setErrorMessage(false);
        }}
      />
      {errorName && (
        <Text style={[styles.errorText, styles.errorMessage]}>
          Nome inválido. Use apenas letras e espaços.
        </Text>
      )}
      <TextInput
        style={[styles.input, errorEmail && styles.errorInput]}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setErrorEmail(!EmailValidator.validate(text));
          setErrorMessage(false);
        }}
        keyboardType="email-address"
      />
      {errorEmail && (
        <Text style={[styles.errorText, styles.errorMessage]}>
          E-mail inválido. Verifique o formato.
        </Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Razão Social"
        value={company}
        onChangeText={(text) => setCompany(text)}
      />
      <TextInputMask
        style={styles.input}
        placeholder="CNPJ"
        type={'cnpj'}
        value={cnpj}
        onChangeText={(text) => {
          setCnpj(text);
          setErrorCnpj(false);
          setErrorMessage(false);
        }}
        keyboardType="numeric"
        options={{
          mask: '99.999.999/9999-99',
        }}
      />
      {errorCnpj && (
        <Text style={[styles.errorText, styles.errorMessage]}>
          CNPJ inválido. Insira 14 dígitos numéricos.
        </Text>
      )}
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Escreva para nós"
        value={message}
        onChangeText={(text) => {
          setMessage(text);
          setErrorMessage(false);
        }}
        multiline
      />
      {errorMessage && (
        <Text style={[styles.errorText, styles.errorMessage]}>
          Preencha todos os campos corretamente.
        </Text>
      )}
      <TouchableOpacity style={styles.sendButton} onPress={sendEmail}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>
      {emailSent && (
        <Text style={[styles.emailSentText, styles.title]}>
          E-mail enviado!
        </Text>
      )}
      <View style={styles.bottomMenu}>
        {/* Componente de menu e navegação */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4DFD8',
    paddingHorizontal: 20,
    paddingBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#962F5A',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#F4DFD8',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 50,
    borderColor: '#962F5A',
    borderWidth: 1,
  },
  sendButton: {
    backgroundColor: '#962F5A',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emailSentText: {
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: '#962F5A',
    marginBottom: 10,
    marginLeft: 5,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#F4DFD8',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: 100, // Ajuste o tamanho do logo conforme necessário
    height: 100, // Ajuste o tamanho do logo conforme necessário
  },
});

export default ContactForm;
