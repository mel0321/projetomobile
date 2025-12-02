import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = React.useState(null);

  // Tenta carregar a foto local ao iniciar
  React.useEffect(() => {
    loadLocalPhoto();
  }, []);

  const loadLocalPhoto = () => {
    try {
      // Tenta carregar a foto do diretório assets
      const localPhoto = require('../../assets/profile-photo.jpg');
      setProfileImage(localPhoto);
      console.log('✅ Foto local carregada com sucesso!');
    } catch (error) {
      console.log('📷 Foto local não encontrada, usando placeholder');
      // Se não encontrar, mantém o placeholder
    }
  };

  const handleAddPhoto = () => {
    Alert.alert(
      "📸 Gerenciar Foto",
      "O que você deseja fazer?",
      [
        { 
          text: "🔄 Recarregar Foto Local", 
          onPress: () => {
            try {
              const localPhoto = require('../../assets/profile-photo.jpg');
              setProfileImage(localPhoto);
              Alert.alert("✅ Sucesso!", "Foto local recarregada!");
            } catch (error) {
              Alert.alert(
                "❌ Foto não encontrada",
                "Certifique-se de que a foto está em:\n\nassets/profile-photo.jpg",
                [
                  { 
                    text: "📋 Ver Instruções", 
                    onPress: showInstructions
                  },
                  { text: "OK", style: "cancel" }
                ]
              );
            }
          }
        },
        { 
          text: "🌐 Usar Foto Demo", 
          onPress: () => {
            setProfileImage({ 
              uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' 
            });
          }
        },
        { 
          text: "❌ Remover Foto", 
          style: 'destructive',
          onPress: () => setProfileImage(null)
        },
        { 
          text: "✖️ Cancelar", 
          style: 'cancel' 
        }
      ]
    );
  };

  const showInstructions = () => {
    Alert.alert(
      "📁 Instruções para Foto Local",
      "Para usar sua foto pessoal:\n\n" +
      "1. Na pasta RAIZ do seu projeto, crie uma pasta chamada 'assets'\n" +
      "2. Coloque sua foto dentro desta pasta\n" +
      "3. Renomeie a foto para 'profile-photo.jpg'\n\n" +
      "📂 Estrutura correta:\n" +
      "SeuProjeto/\n" +
      "├── assets/\n" +
      "│   └── profile-photo.jpg\n" +
      "├── src/\n" +
      "└── App.js\n\n" +
      "🔧 Dicas:\n" +
      "• Use imagem quadrada (ex: 500x500px)\n" +
      "• Formatos: JPG, PNG\n" +
      "• Reinicie o app após adicionar a foto",
      [
        { 
          text: "🔄 Tentar Novamente", 
          onPress: () => {
            try {
              const localPhoto = require('../../assets/profile-photo.jpg');
              setProfileImage(localPhoto);
              Alert.alert("🎉 Sucesso!", "Foto local carregada!");
            } catch (error) {
              Alert.alert("❌ Ainda não encontrada", "Verifique o caminho da foto.");
            }
          }
        },
        { text: "OK", style: "cancel" }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}
      >
        
        {/* Header */}
        <LinearGradient
          colors={['#e10600', '#b90500', '#8a0300']}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <Text style={styles.title}>Perfil do Desenvolvedor</Text>
            <Text style={styles.subHeader}>F1 Mobile App - 2025</Text>
          </View>
        </LinearGradient>

        {/* Card do Perfil */}
        <View style={styles.profileCard}>
          
          {/* Foto do Perfil */}
          <View style={styles.photoSection}>
            <TouchableOpacity 
              style={styles.photoContainer}
              onPress={handleAddPhoto}
              activeOpacity={0.8}
            >
              {profileImage ? (
                <Image 
                  source={profileImage} 
                  style={styles.profileImage}
                />
              ) : (
                <View style={styles.photoPlaceholder}>
                  <Icon name="person" size={60} color="#e10600" />
                  <Text style={styles.placeholderText}>Adicionar Foto</Text>
                </View>
              )}
              
              {/* Ícone da Câmera (Botão Flutuante) */}
              <TouchableOpacity 
                style={styles.cameraButton}
                onPress={handleAddPhoto}
              >
                <LinearGradient
                  colors={['#e10600', '#b90500']}
                  style={styles.cameraIcon}
                >
                  <Icon name="photo-camera" size={20} color="white" />
                </LinearGradient>
              </TouchableOpacity>
            </TouchableOpacity>
            
            {/* Indicador de Foto Local */}
            {profileImage && profileImage.uri === undefined && (
              <View style={styles.localBadge}>
                <Icon name="folder" size={12} color="white" />
                <Text style={styles.localBadgeText}> Local</Text>
              </View>
            )}
          </View>

          {/* Informações Pessoais */}
          <View style={styles.infoSection}>
            <Text style={styles.name}>Melânia Santos</Text>
            <Text style={styles.role}>Desenvolvedora Mobile React Native</Text>
            
            <View style={styles.badges}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2º Ano Informática</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>4º Bimestre</Text>
              </View>
            </View>
          </View>

          {/* Divisor */}
          <View style={styles.divider} />

          {/* Sobre Mim */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Icon name="person" size={24} color="#e10600" />
              <Text style={styles.sectionTitle}>Sobre Mim</Text>
            </View>
            <Text style={styles.sectionText}>
              Estudante de Informática apaixonada por desenvolvimento mobile. 
              Este aplicativo de Fórmula 1 foi desenvolvido como projeto do 4º bimestre 
              utilizando React Native e Expo.
            </Text>
          </View>

          {/* Tecnologias */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Icon name="code" size={24} color="#e10600" />
              <Text style={styles.sectionTitle}>Tecnologias Utilizadas</Text>
            </View>
            <View style={styles.techList}>
              <Text style={styles.techItem}>• React Native</Text>
              <Text style={styles.techItem}>• Expo</Text>
              <Text style={styles.techItem}>• React Navigation</Text>
              <Text style={styles.techItem}>• JavaScript ES6+</Text>
            </View>
          </View>

          {/* Botões de Ação */}
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={[styles.actionButton, styles.primaryButton]}
              onPress={() => {
                try {
                  const localPhoto = require('../../assets/profile-photo.jpg');
                  setProfileImage(localPhoto);
                  Alert.alert("✅", "Foto local carregada!");
                } catch (error) {
                  showInstructions();
                }
              }}
            >
              <Icon name="folder-open" size={18} color="white" />
              <Text style={styles.primaryButtonText}> Carregar Foto Local</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.actionButton, styles.secondaryButton]}
              onPress={handleAddPhoto}
            >
              <Icon name="settings" size={18} color="#666" />
              <Text style={styles.secondaryButtonText}> Mais Opções</Text>
            </TouchableOpacity>
          </View>

          {/* Status da Foto */}
          <View style={styles.statusCard}>
            <Icon 
              name={profileImage ? "check-circle" : "info"} 
              size={24} 
              color={profileImage ? "#4CAF50" : "#2196F3"} 
            />
            <Text style={styles.statusText}>
              {profileImage 
                ? profileImage.uri === undefined 
                  ? '✅ Usando sua foto local do diretório assets/'
                  : '🌐 Usando foto de demonstração da internet'
                : '📷 Toque no botão para adicionar uma foto'
              }
            </Text>
          </View>

          {/* Instruções Rápidas */}
          <TouchableOpacity 
            style={styles.helpButton}
            onPress={showInstructions}
          >
            <Icon name="help-outline" size={16} color="#666" />
            <Text style={styles.helpText}> Como adicionar minha foto?</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  container: {
    flex: 1,
  },
  header: {
    height: 150,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 5,
    fontWeight: '500',
  },
  profileCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: -50,
    borderRadius: 25,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 30,
  },
  photoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photoContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  photoPlaceholder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  placeholderText: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    fontWeight: '500',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cameraIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  localBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  localBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 2,
  },
  infoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 5,
  },
  role: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '500',
  },
  badges: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
  },
  badge: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2196F3',
  },
  divider: {
    height: 1,
    backgroundColor: '#e9ecef',
    marginVertical: 25,
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginLeft: 10,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#555',
    textAlign: 'justify',
  },
  techList: {
    marginLeft: 10,
  },
  techItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    lineHeight: 20,
  },
  actionButtons: {
    marginTop: 10,
    marginBottom: 20,
    gap: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  primaryButton: {
    backgroundColor: '#e10600',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  secondaryButtonText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 10,
  },
  statusCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e9ecef',
    marginBottom: 15,
  },
  statusText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
    flex: 1,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  helpText: {
    color: '#666',
    fontSize: 13,
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
});