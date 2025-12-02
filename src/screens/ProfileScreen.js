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
  const [useLocalImage, setUseLocalImage] = React.useState(false);

  // Tenta carregar a imagem local
  React.useEffect(() => {
    try {
      const imagePaths = [
        require('../../assets/profile-photo.jpg'),
        require('../assets/profile-photo.jpg'),
      ];
      
      for (const img of imagePaths) {
        try {
          setProfileImage(img);
          setUseLocalImage(true);
          console.log('Imagem local carregada');
          break;
        } catch (e) {
          continue;
        }
      }
    } catch (error) {
      console.log('Usando placeholder');
    }
  }, []);

  const handleAddPhoto = () => {
    Alert.alert(
      "📸 Adicionar Foto",
      "Como você deseja adicionar sua foto de perfil?",
      [
        { 
          text: "🎨 Foto Online", 
          style: 'default',
          onPress: () => {
            setProfileImage({ 
              uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' 
            });
            setUseLocalImage(false);
          }
        },
        { 
          text: "💾 Foto Local", 
          style: 'default',
          onPress: () => {
            Alert.alert(
              "📁 Instruções",
              "1. Crie a pasta 'assets' na raiz do projeto\n2. Adicione sua foto como 'profile-photo.jpg'\n3. Reinicie o aplicativo",
              [
                { 
                  text: "✅ Carregar", 
                  onPress: () => {
                    try {
                      const img = require('../../assets/profile-photo.jpg');
                      setProfileImage(img);
                      setUseLocalImage(true);
                    } catch (error) {
                      Alert.alert("❌ Erro", "Foto não encontrada!");
                    }
                  }
                },
                { text: "Cancelar", style: "cancel" }
              ]
            );
          }
        },
        { 
          text: "🎭 Avatar", 
          style: 'destructive',
          onPress: () => {
            setProfileImage(null);
            setUseLocalImage(false);
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        
        {/* Header com Gradiente */}
        <LinearGradient
          colors={['#e10600', '#b90500', '#8a0300']}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.headerContent}>
            <Text style={styles.title}>Perfil do Desenvolvedor</Text>
            <Text style={styles.subHeader}>F1 Mobile App</Text>
          </View>
          <View style={styles.headerPattern}>
            <Icon name="speed" size={30} color="rgba(255,255,255,0.1)" />
            <Icon name="dashboard" size={30} color="rgba(255,255,255,0.1)" />
            <Icon name="track-changes" size={30} color="rgba(255,255,255,0.1)" />
          </View>
        </LinearGradient>

        {/* Card Principal */}
        <View style={styles.profileCardWrapper}>
          <LinearGradient
            colors={['#ffffff', '#f8f9fa']}
            style={styles.profileCard}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            
            {/* Seção da Foto com Efeito 3D */}
            <View style={styles.avatarSection}>
              <View style={styles.photoContainer}>
                <TouchableOpacity 
                  style={styles.photoFrame}
                  onPress={handleAddPhoto}
                  activeOpacity={0.8}
                >
                  {profileImage ? (
                    <Image 
                      source={profileImage} 
                      style={styles.profileImage}
                    />
                  ) : (
                    <LinearGradient
                      colors={['#f0f0f0', '#e0e0e0']}
                      style={styles.photoPlaceholder}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <View style={styles.placeholderIcon}>
                        <Icon name="person" size={50} color="#e10600" />
                      </View>
                      <Text style={styles.addPhotoText}>Adicionar Foto</Text>
                    </LinearGradient>
                  )}
                  
                  {/* Badge Flutuante */}
                  <View style={styles.floatingBadge}>
                    <LinearGradient
                      colors={['#e10600', '#b90500']}
                      style={styles.badgeGradient}
                    >
                      <Icon name="code" size={14} color="white" />
                    </LinearGradient>
                  </View>
                </TouchableOpacity>
                
                {/* Ícone da Câmera */}
                <TouchableOpacity 
                  style={styles.cameraIconWrapper}
                  onPress={handleAddPhoto}
                >
                  <LinearGradient
                    colors={['#e10600', '#b90500']}
                    style={styles.cameraIcon}
                  >
                    <Icon name="photo-camera" size={18} color="white" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              
              {/* Info do Perfil */}
              <View style={styles.profileInfo}>
                <Text style={styles.name}>Melânia Santos</Text>
                <View style={styles.badgeRow}>
                  <View style={[styles.statusBadge, styles.studentBadge]}>
                    <Text style={styles.badgeText}>👩‍💻 2º Ano Info</Text>
                  </View>
                  <View style={[styles.statusBadge, styles.projectBadge]}>
                    <Text style={styles.badgeText}>🚀 4º Bimestre</Text>
                  </View>
                </View>
                <Text style={styles.role}>Desenvolvedora Mobile React Native</Text>
                <View style={styles.statsContainer}>
                  <View style={styles.statItem}>
                    <Icon name="star" size={20} color="#FFD700" />
                    <Text style={styles.statText}>Projeto F1</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Icon name="verified" size={20} color="#4CAF50" />
                    <Text style={styles.statText}>React Native</Text>
                  </View>
                  <View style={styles.statDivider} />
                  <View style={styles.statItem}>
                    <Icon name="trending-up" size={20} color="#2196F3" />
                    <Text style={styles.statText}>Em Evolução</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Divisor Estilizado */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Icon name="more-horiz" size={24} color="#e10600" />
              <View style={styles.dividerLine} />
            </View>

            {/* Sobre Mim */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <LinearGradient
                  colors={['#e10600', '#b90500']}
                  style={styles.sectionIcon}
                >
                  <Icon name="person" size={20} color="white" />
                </LinearGradient>
                <View>
                  <Text style={styles.sectionTitle}>Sobre Mim</Text>
                  <Text style={styles.sectionSubtitle}>Conheça a desenvolvedora</Text>
                </View>
              </View>
              <Text style={styles.sectionText}>
                Apaixonada por tecnologia desde cedo, encontrei no desenvolvimento mobile 
                a combinação perfeita entre criatividade e lógica. Atualmente focada em 
                React Native, busco criar experiências digitais que sejam tanto funcionais 
                quanto visualmente impactantes.
              </Text>
            </View>

            {/* Sobre o Projeto */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <LinearGradient
                  colors={['#e10600', '#b90500']}
                  style={styles.sectionIcon}
                >
                  <Icon name="flag" size={20} color="white" />
                </LinearGradient>
                <View>
                  <Text style={styles.sectionTitle}>O Projeto F1</Text>
                  <Text style={styles.sectionSubtitle}>Desafio do 4º Bimestre</Text>
                </View>
              </View>
              <Text style={styles.sectionText}>
                Desenvolvi este aplicativo de Fórmula 1 para demonstrar minhas habilidades 
                em React Native. O objetivo foi criar uma experiência completa para fãs, 
                com dados atualizados, interface intuitiva e performance otimizada.
              </Text>
            </View>

            {/* Hobbies */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <LinearGradient
                  colors={['#e10600', '#b90500']}
                  style={styles.sectionIcon}
                >
                  <Icon name="sports-esports" size={20} color="white" />
                </LinearGradient>
                <View>
                  <Text style={styles.sectionTitle}>Meus Hobbies</Text>
                  <Text style={styles.sectionSubtitle}>O que faço além do código</Text>
                </View>
              </View>
              <View style={styles.hobbiesGrid}>
                {[
                  { icon: '🏎️', label: 'F1', color: '#FF5252' },
                  { icon: '💻', label: 'Coding', color: '#2196F3' },
                  { icon: '🎮', label: 'Games', color: '#9C27B0' },
                  { icon: '🎵', label: 'Música', color: '#4CAF50' },
                  { icon: '📚', label: 'Leitura', color: '#FF9800' },
                  { icon: '✈️', label: 'Viagens', color: '#00BCD4' },
                ].map((hobby, index) => (
                  <TouchableOpacity key={index} style={styles.hobbyCard}>
                    <View style={[styles.hobbyIconContainer, { backgroundColor: hobby.color + '20' }]}>
                      <Text style={styles.hobbyIcon}>{hobby.icon}</Text>
                    </View>
                    <Text style={styles.hobbyLabel}>{hobby.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Tecnologias */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <LinearGradient
                  colors={['#e10600', '#b90500']}
                  style={styles.sectionIcon}
                >
                  <Icon name="memory" size={20} color="white" />
                </LinearGradient>
                <View>
                  <Text style={styles.sectionTitle}>Stack Tecnológico</Text>
                  <Text style={styles.sectionSubtitle}>Ferramentas e tecnologias</Text>
                </View>
              </View>
              <View style={styles.techStack}>
                {[
                  { name: 'React Native', icon: '⚛️', level: 'Avançado' },
                  { name: 'JavaScript', icon: '📱', level: 'Avançado' },
                  { name: 'Expo', icon: '🚀', level: 'Intermediário' },
                  { name: 'React Navigation', icon: '🧭', level: 'Intermediário' },
                  { name: 'Git', icon: '📊', level: 'Intermediário' },
                  { name: 'Figma', icon: '🎨', level: 'Básico' },
                ].map((tech, index) => (
                  <View key={index} style={styles.techItem}>
                    <View style={styles.techIconWrapper}>
                      <Text style={styles.techIcon}>{tech.icon}</Text>
                    </View>
                    <View style={styles.techInfo}>
                      <Text style={styles.techName}>{tech.name}</Text>
                      <View style={styles.levelContainer}>
                        <View style={[styles.levelBar, { width: tech.level === 'Avançado' ? '90%' : tech.level === 'Intermediário' ? '70%' : '50%' }]} />
                      </View>
                      <Text style={styles.techLevel}>{tech.level}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            {/* Footer com Status da Foto */}
            <LinearGradient
              colors={['#f8f9fa', '#e9ecef']}
              style={styles.footerCard}
            >
              <View style={styles.footerHeader}>
                <Icon 
                  name={profileImage ? "check-circle" : "info"} 
                  size={24} 
                  color={profileImage ? "#4CAF50" : "#2196F3"} 
                />
                <Text style={styles.footerTitle}>
                  {profileImage ? 'Foto Configurada ✓' : 'Configuração de Foto'}
                </Text>
              </View>
              
              <Text style={styles.footerText}>
                {profileImage 
                  ? useLocalImage 
                    ? 'Sua foto pessoal está sendo exibida.'
                    : 'Usando foto de demonstração da internet.'
                  : 'Adicione uma foto personalizada para seu perfil.'
                }
              </Text>
              
              <View style={styles.footerButtons}>
                <TouchableOpacity 
                  style={[styles.footerButton, styles.primaryButton]}
                  onPress={() => {
                    setProfileImage({ 
                      uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' 
                    });
                    setUseLocalImage(false);
                  }}
                >
                  <Icon name="image" size={16} color="white" />
                  <Text style={styles.primaryButtonText}> Foto Demo</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={[styles.footerButton, styles.secondaryButton]}
                  onPress={() => {
                    setProfileImage(null);
                    setUseLocalImage(false);
                  }}
                >
                  <Icon name="refresh" size={16} color="#666" />
                  <Text style={styles.secondaryButtonText}> Resetar</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </LinearGradient>
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
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    height: 180,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 40,
    position: 'relative',
    overflow: 'hidden',
  },
  headerContent: {
    alignItems: 'center',
    zIndex: 2,
  },
  headerPattern: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    bottom: 20,
    opacity: 0.3,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subHeader: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 5,
    fontWeight: '500',
  },
  profileCardWrapper: {
    paddingHorizontal: 20,
    marginTop: -50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  profileCard: {
    borderRadius: 25,
    padding: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 5,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 25,
  },
  photoContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  photoFrame: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 70,
  },
  photoPlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
  },
  placeholderIcon: {
    marginBottom: 10,
  },
  addPhotoText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  floatingBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  badgeGradient: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIconWrapper: {
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
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 10,
  },
  badgeRow: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 10,
  },
  statusBadge: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  studentBadge: {
    backgroundColor: '#e3f2fd',
  },
  projectBadge: {
    backgroundColor: '#f3e5f5',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#333',
  },
  role: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 15,
    width: '100%',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statText: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    fontWeight: '600',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#dee2e6',
    height: '100%',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e9ecef',
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#555',
    textAlign: 'justify',
  },
  hobbiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  hobbyCard: {
    width: '31%',
    alignItems: 'center',
    marginBottom: 15,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  hobbyIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  hobbyIcon: {
    fontSize: 24,
  },
  hobbyLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  techStack: {
    marginTop: 10,
  },
  techItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  techIconWrapper: {
    marginRight: 15,
  },
  techIcon: {
    fontSize: 28,
  },
  techInfo: {
    flex: 1,
  },
  techName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  levelContainer: {
    height: 4,
    backgroundColor: '#e9ecef',
    borderRadius: 2,
    marginBottom: 4,
    overflow: 'hidden',
  },
  levelBar: {
    height: '100%',
    backgroundColor: '#e10600',
    borderRadius: 2,
  },
  techLevel: {
    fontSize: 10,
    color: '#666',
    fontWeight: '500',
  },
  footerCard: {
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  footerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginLeft: 10,
  },
  footerText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 15,
  },
  footerButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  footerButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  primaryButton: {
    backgroundColor: '#e10600',
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  secondaryButtonText: {
    color: '#666',
    fontWeight: '600',
    fontSize: 13,
  },
});