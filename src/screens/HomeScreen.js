import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
  SafeAreaView
} from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const menuItems = [
    {
      title: 'PILOTOS 2025',
      description: 'Conheça todos os 20 corredores da temporada',
      screen: 'Drivers',
      color: '#E10600',
      icon: '🏎️',
      gradient: ['#E10600', '#B80500']
    },
    {
      title: 'EQUIPES',
      description: '10 construtores em busca do título',
      screen: 'Teams',
      color: '#006F62',
      icon: '🏁',
      gradient: ['#006F62', '#005A4F']
    },
    {
      title: 'CIRCUITOS',
      description: 'Todos os 24 circuitos da temporada 2025',
      screen: 'Circuits', // ← NOVO ITEM ADICIONADO
      color: '#FFD700',
      icon: '🏁',
      gradient: ['#FFD700', '#FFC400']
    },
    {
      title: 'SOBRE MIM',
      description: 'Informações sobre o desenvolvedor',
      screen: 'Profile',
      color: '#2B68A0',
      icon: '👤',
      gradient: ['#2B68A0', '#1F4D7A']
    }
  ];

  const highlights = [
    'Hamilton na Ferrari em 2025',
    'Novos talentos no grid',
    '24 corridas na temporada',
    'Regulamento técnico atualizado',
    'Novo circuito de Madri',
    'Retorno do GP da China'
  ];

  // Atualizar stats para incluir circuitos
  const stats = [
    { number: '20', label: 'PILOTOS' },
    { number: '10', label: 'EQUIPES' },
    { number: '24', label: 'CIRCUITOS' }, // ← ATUALIZADO
    { number: '24', label: 'CORRIDAS' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoText}>F1</Text>
            </View>
            <Text style={styles.heroTitle}>TEMPORADA 2025</Text>
            <Text style={styles.heroSubtitle}>WORLD CHAMPIONSHIP</Text>
          </View>
          
          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>{stat.number}</Text>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                </View>
                {index < stats.length - 1 && <View style={styles.statDivider} />}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Welcome Message */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>BEM-VINDO AO F1 2025</Text>
          <Text style={styles.welcomeText}>
            Acompanhe todas as informações da nova temporada da Fórmula 1. 
            Pilotos, equipes, circuitos, resultados e muito mais em tempo real.
          </Text>
        </View>

        {/* Navigation Cards */}
        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuCard}
              onPress={() => navigation.navigate(item.screen)}
              activeOpacity={0.9}
            >
              <View style={[styles.cardHeader, { backgroundColor: item.color }]}>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
              
              <View style={styles.cardContent}>
                <Text style={styles.cardDescription}>{item.description}</Text>
                
                <View style={styles.cardFooter}>
                  <View style={styles.actionContainer}>
                    <Text style={[styles.actionText, { color: item.color }]}>
                      ACESSAR
                    </Text>
                    <View style={[styles.arrowIcon, { backgroundColor: item.color }]}>
                      <Text style={styles.arrowText}>›</Text>
                    </View>
                  </View>
                </View>
              </View>
              
              <View style={[styles.cardAccent, { backgroundColor: item.color }]} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Highlights Section */}
        <View style={styles.highlightsSection}>
          <Text style={styles.highlightsTitle}>DESTAQUES DA TEMPORADA</Text>
          
          <View style={styles.highlightsGrid}>
            {highlights.map((highlight, index) => (
              <View key={index} style={styles.highlightItem}>
                <View style={styles.highlightMarker} />
                <Text style={styles.highlightText}>{highlight}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 FÓRMULA 1 WORLD CHAMPIONSHIP</Text>
          <Text style={styles.footerSubtext}>APLICATIVO NÃO OFICIAL - FINS EDUCATIVOS</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  scrollContent: {
    paddingBottom: 40, // Aumentado para mais espaço
  },
  heroSection: {
    backgroundColor: '#E10600',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    marginBottom: 25,
    shadowColor: '#E10600',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  logoText: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginBottom: 5,
  },
  heroSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    letterSpacing: 3,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 9,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
    letterSpacing: 1,
    fontWeight: '600',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  welcomeCard: {
    backgroundColor: '#111111',
    marginHorizontal: 20,
    padding: 22,
    borderRadius: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#222222',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#E10600',
    marginBottom: 12,
    letterSpacing: 1,
  },
  welcomeText: {
    fontSize: 14,
    color: '#CCCCCC',
    lineHeight: 20,
    fontWeight: '400',
  },
  menuSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  menuCard: {
    backgroundColor: '#111111',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#222222',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },
  cardHeader: {
    paddingVertical: 16,
    paddingHorizontal: 22,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  cardContent: {
    padding: 20,
  },
  cardDescription: {
    fontSize: 14,
    color: '#AAAAAA',
    lineHeight: 20,
    marginBottom: 18,
    fontWeight: '400',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
  arrowIcon: {
    marginLeft: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 1,
  },
  cardAccent: {
    height: 4,
    width: '100%',
  },
  highlightsSection: {
    backgroundColor: '#111111',
    marginHorizontal: 20,
    padding: 22,
    borderRadius: 16,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#222222',
  },
  highlightsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E10600',
    marginBottom: 18,
    letterSpacing: 1,
  },
  highlightsGrid: {
    gap: 12,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  highlightMarker: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E10600',
    marginRight: 12,
  },
  highlightText: {
    fontSize: 14,
    color: '#CCCCCC',
    fontWeight: '500',
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#222222',
    marginTop: 10,
  },
  footerText: {
    fontSize: 11,
    color: '#666666',
    letterSpacing: 1,
    marginBottom: 4,
    fontWeight: '500',
  },
  footerSubtext: {
    fontSize: 9,
    color: '#444444',
    letterSpacing: 0.5,
    fontWeight: '400',
  },
});