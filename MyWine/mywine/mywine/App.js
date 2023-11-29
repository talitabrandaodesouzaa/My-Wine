import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Detalhe1 from './detalhe1'; // Certifique-se de que Detalhe1 está importado corretamente

const HorizontalMenu = ({ navigateTo }) => {
  const menuItems = [
    { label: 'Exclusivo', page: 'Exclusivo' },
    { label: 'Linha Premium', page: 'LinhaPremium' },
    { label: 'Última chance', page: 'UltimaChance' },
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
          <Image source={require('./assets/wine.jpg')} style={styles.labelImage} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.roundButtonBlue} onPress={() => navigateTo('Vinho Branco')}>
              <Text style={styles.buttonText}>Vinho Branco</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.roundButtonGreen} onPress={() => navigateTo('Vinho Tinto')}>
              <Text style={styles.buttonText}>Vinho Tinto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButtonRed} onPress={() => navigateTo('Vinho Rosé')}>
              <Text style={styles.buttonText}>Vinho Rosé</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButtonGreen} onPress={() => navigateTo('Outros')}>
              <Text style={styles.buttonText}>Outros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButtonBlue} onPress={() => navigateTo('Assinatura')}>
              <Text style={styles.buttonText}>Assinatura</Text>
            </TouchableOpacity>
          </View>
          <HorizontalMenu navigateTo={navigateTo} />
          <Text style={styles.exclusiveSelectionText}>Aproveite sua seleção exclusiva!</Text>

          {/* Seleção de vinhos */}
          <View style={styles.wineSelection}>
            <View style={styles.wineItem}>
              <Image source={require('./assets/vinho1.png')} style={styles.wineImage} />
              <TouchableOpacity style={styles.detalheButton} onPress={() => navigateTo('Detalhe1')}>
                <Text style={styles.buttonText}>Detalhe</Text>
              </TouchableOpacity>
            </View>
             <View style={styles.wineItem}>
              <Image source={require('./assets/vinho2.png')} style={styles.wineImage} />
              <TouchableOpacity style={styles.detalheButton} onPress={() => navigateTo('Detalhe1')}>
                <Text style={styles.buttonText}>Detalhe</Text>
              </TouchableOpacity>
            </View>
             <View style={styles.wineItem}>
              <Image source={require('./assets/vinho3.png')} style={styles.wineImage} />
              <TouchableOpacity style={styles.detalheButton} onPress={() => navigateTo('Detalhe1')}>
                <Text style={styles.buttonText}>Detalhe</Text>
              </TouchableOpacity>
            </View>
             <View style={styles.wineItem}>
              <Image source={require('./assets/vinho4.png')} style={styles.wineImage} />
              <TouchableOpacity style={styles.detalheButton} onPress={() => navigateTo('Detalhe1')}>
                <Text style={styles.buttonText}>Detalhe</Text>
              </TouchableOpacity>
            </View>
            {/* Adicione aqui mais itens de vinho conforme necessário */}
          </View>
        </View>
      </View>
      <View style={styles.menu}>
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
    top: -100,
    left: -20,
    right: -20,
    alignItems: 'center',
  },
  labelImage: {
    width: '100%',
    height: 600,
    resizeMode: 'contain',
    opacity: 0.7,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -170,
    marginRight: 0,
  },
  roundButtonBlue: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#962F5A',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundButtonGreen: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#330000',
    alignItems: 'center',
    marginRight: 20,
    justifyContent: 'center',
  },
  roundButtonRed: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 30,
    backgroundColor: '#C9678E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    alignItems: 'center',
  },
  horizontalMenu: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: '#962F5A',
    paddingHorizontal: 50,
    paddingVertical: 5,
    width: '112%',
    borderRadius: 10,
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
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.04)',
    width: '112%',
    position: 'absolute',
    bottom: 0,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuEmoji: {
    fontSize: 15,
    color: 'black',
  },
  menuText: {
    color: '#962F5A',
  },
  divider: {
    height: 40,
    width: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    marginHorizontal: 13,
  },
  exclusiveSelectionText: {
    color: '#330000',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 20,
  },
  exclusiveSelectionText: {
    color: '#330000',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
   wineSelection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  wineItem: {
    flex: 1,
    alignItems: 'center',
  },
  wineImage: {
    width: 100,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  detalheButton: {
    backgroundColor: '#962F5A',
    padding: 5,
    borderRadius: 5,
  },
  
  wineSelection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  wineItem: {
    flex: 1,
    alignItems: 'center',
  },
  wineImage: {
    width: 100,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  detalheButton: {
    backgroundColor: '#962F5A',
    padding: 5,
    borderRadius: 5,
  },
  additionalImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

