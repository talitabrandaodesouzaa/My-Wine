
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function App() {
  // Função para navegar entre as telas
  const navigateTo = (page) => {
    // Aqui você pode adicionar a navegação real para outras telas do aplicativo.
    console.log(`Navigating to: ${page}`);
  };

  return (
    <View style={styles.container}>
      {/* Seção do logotipo */}
      <View style={styles.content}>
        {/* Imagem de boas-vindas */}
        <Image source={require('./assets/logo1.png')} style={styles.welcomeImage} />
      </View>

  
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos para o container principal
  container: {
    flex: 1,
    backgroundColor: '#F4DFD8', // Cor de rosa claro
    justifyContent: 'space-between',
    padding: 190,
  },
  // Estilos para a seção do logotipo
  content: {
    alignItems: 'center',
  },
  // Estilos para a imagem de boas-vindas (logotipo)
  welcomeImage: {
    width: 200, // Ajuste a largura conforme necessário
    height: 300, // Ajuste a altura conforme necessário
    resizeMode: 'contain',
  },
  
  // Estilos para os itens do menu
  menuItem: {
    color: 'white',
  },
});
