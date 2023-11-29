import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const HorizontalMenu = ({ navigateTo }) => {
  const menuItems = [
    { label: 'Adicionar', page: 'UltimaChance' },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalMenu}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.horizontalMenuItemContainer}
          onPress={() => navigateTo(item.page)}
        >
          <Text style={styles.horizontalMenuItemWord}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default function App() {
  const navigateTo = (page) => {
    console.log(`Navigating to: ${page}`);
    // Adicione a lógica de navegação real aqui
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('./assets/logo1.png')} style={styles.welcomeImage} />
        <View style={styles.labelContainer}>
          <Image source={require('./assets/vinho3.png')} style={styles.labelImage} />
          <Text style={styles.labelText}>Cuvelier Fils Branco</Text>
          <Text style={styles.labelText}>R$79,97</Text>
          <HorizontalMenu navigateTo={navigateTo} />
          <Text style={styles.labelText}>Tipo: Seco</Text>
          <Text style={styles.labelText}>País: França</Text>
          <Text style={styles.labelText}>Teor alcoólico: 12%</Text>
        </View>
      </View>
      <View style={styles.menu}>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('Voltar')}>
          <Text style={styles.menuText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4DFD8',
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    position: 'relative',
  },
  welcomeImage: {
    width: 80,
    height: 90,
    resizeMode: 'contain',
  },
  labelContainer: {
    position: 'absolute',
    top: -50, // Ajuste para subir a labelContainer
    left: -20,
    right: -20,
    alignItems: 'center',
  },
  labelImage: {
    width: '80%',
    height: 600,
    resizeMode: 'contain',
  },
  labelText: {
    color: '#330000',
    fontSize: 18,
    marginTop: 10,
     top: -150,
    textAlign: 'center',
  },
  horizontalMenu: {
    flexDirection: 'row',
    marginTop: 30,
    top: -150,
    backgroundColor: '#962F5A',
    paddingHorizontal: 50,
    paddingVertical: 5,
    width: '40%',
    borderRadius: 0,
  },
  horizontalMenuItemContainer: {
    marginRight: 50,
  },
  horizontalMenuItemWord: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    paddingVertical: 20,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#962F5A',
    paddingHorizontal: 50,
        color: 'white',
    marginTop: 90, // Ajuste para baixar o menuItem
    paddingVertical: 5,
    alignItems:'left',
    marginLeft: 45,
    width: '45%',
    borderRadius: 0,
    fontSize: 13,
    fontWeight: 'bold',
  },
  
});

