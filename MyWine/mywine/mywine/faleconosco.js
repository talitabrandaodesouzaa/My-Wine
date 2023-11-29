import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import * as MailComposer from 'expo-mail-composer';

const ContactForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSendEmail = async () => {
    if (!name || !email || !message) {
      setErrorMessage(true);
      return;
    }

    const namePattern = /^[a-zA-Z\s]*$/;
    if (!name.match(namePattern)) {
      setErrorName(true);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setErrorEmail(true);
      return;
    }

    try {
      const mailOptions = {
        subject: 'Assunto do e-mail',
        body: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
        isHtml: false,
        recipients: ['mywinedistribuidoradevinhos@gmail.com'],
      };

      await MailComposer.composeAsync(mailOptions);
      console.log('E-mail enviado!');
      setEmailSent(true);
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      setErrorMessage(true);
      setEmailSent(false);
    }
  };

  useEffect(() => {
    if (emailSent) {
      const timer = setTimeout(() => {
        setEmail('');
        setName('');
        setMessage('');
        setEmailSent(false);
      }, 3000); // Limpa os campos e remove o feedback após 3 segundos
      return () => clearTimeout(timer);
    }
  }, [emailSent]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo1.png')} style={styles.logo} />
      <Text style={styles.title}>Fale Conosco</Text>
      <TextInput
        style={[styles.input, errorName && styles.errorInput]}
        placeholder="Nome"
        value={name}
        onChangeText={(text) => {
          setName(text);
          setErrorName(!text.match(/^[a-zA-Z\s]*$/));
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
          setErrorEmail(!text.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
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
      <TouchableOpacity style={styles.sendButton} onPress={handleSendEmail}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>
      {emailSent && (
        <Text style={[styles.emailSentText, styles.title]}>
          E-mail enviado!
        </Text>
      )}

      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Destaque')}
        >
          <Text style={styles.menuEmoji}>🏠</Text>
          <Text style={styles.menuText}>Destaque</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Catalogo')}
        >
          <Text style={styles.menuEmoji}>📖</Text>
          <Text style={styles.menuText}>Catálogo</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('MinhaConta')}
        >
          <Text style={styles.menuEmoji}>👤</Text>
          <Text style={styles.menuText}>Minha Conta</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Assinatura')}
        >
          <Text style={styles.menuEmoji}>🍷</Text>
          <Text style={styles.menuText}>Assinatura</Text>
        </TouchableOpacity>
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
  menuItem: {
    alignItems: 'center',
  },
  menuEmoji: {
    fontSize: 24,
  },
  menuText: {
    color: '#962F5A',
  },
  divider: {
    backgroundColor: '#962F5A',
    width: 1,
    height: '100%',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  errorMessage: {
    color: 'red',
  },
});

export default ContactForm;
