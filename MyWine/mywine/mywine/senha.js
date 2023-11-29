import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorNewPassword, setErrorNewPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const isPasswordValid = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleChangePassword = () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (!isPasswordValid(newPassword)) {
      setErrorNewPassword(true);
      Alert.alert(
        'Senha Inválida',
        'A nova senha não atende aos critérios. Ela deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.'
      );
      setErrorConfirmPassword(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorConfirmPassword(true);
      Alert.alert('Erro na confirmação de senha', 'As senhas não coincidem.');
      return;
    }

    setPasswordChanged(true);
    Alert.alert('Sucesso', 'Senha alterada com sucesso!');
    setNewPassword('');
    setConfirmPassword('');
    setErrorNewPassword(false);
    setErrorConfirmPassword(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/logo1.png')} style={styles.logo} />
          <Text style={styles.title}>Mudar Senha</Text>
        </View>

        <TextInput
          style={[styles.input, errorNewPassword && styles.errorInput]}
          placeholder="Informe a nova senha"
          value={newPassword}
          onChangeText={(text) => {
            setNewPassword(text);
            setErrorNewPassword(false);
            setErrorConfirmPassword(false);
          }}
          secureTextEntry={true}
        />
        {errorNewPassword && (
          <Text style={styles.errorText}>
            A nova senha deve ter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.
          </Text>
        )}

        <TextInput
          style={[styles.input, errorConfirmPassword && styles.errorInput]}
          placeholder="Confirme a nova senha"
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            setErrorConfirmPassword(false);
          }}
          secureTextEntry={true}
        />
        {errorConfirmPassword && <Text style={styles.errorText}>As senhas não coincidem.</Text>}

        <TouchableOpacity style={styles.sendButton} onPress={handleChangePassword}>
          <Text style={styles.sendButtonText}>Salvar</Text>
        </TouchableOpacity>

        {passwordChanged && newPassword === confirmPassword && (
          <Text style={[styles.emailSentText, styles.title]}>
            Senha alterada com sucesso!
          </Text>
        )}
      </ScrollView>

          {/* Menu na parte inferior */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Destaque')}>
          <Text style={styles.menuEmoji}>🏠</Text>
          <Text style={styles.menuText}>Destaque</Text>
        </TouchableOpacity>
      
        <View style={styles.divider} />
      
        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Catalogo')}>
          <Text style={styles.menuEmoji}>📖</Text>
          <Text style={styles.menuText}>Catálogo</Text>
        </TouchableOpacity>
      
        <View style={styles.divider} />
      
        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('MinhaConta')}>
          <Text style={styles.menuEmoji}>👤</Text>
          <Text style={styles.menuText}>Minha Conta</Text>
        </TouchableOpacity>
      
        <View style={styles.divider} />
      
        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Assinatura')}>
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
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#962F5A',
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
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: '#962F5A',
    marginBottom: 10,
  },
  emailSentText: {
    marginTop: 20,
    fontWeight: 'bold',
    color: 'green', // Altera a cor para verde
    textAlign: 'center', // Centraliza o texto
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
});

export default ChangePassword;

