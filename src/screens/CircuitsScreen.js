import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Modal
} from 'react-native';

const { width } = Dimensions.get('window');

export default function CircuitsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCircuit, setSelectedCircuit] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Dados dos circuitos
  const circuits = [
    {
      id: 1,
      name: 'Circuito Internacional do Bahrein',
      location: 'Sakhir, Bahrein',
      laps: '57',
      length: '5.412 km',
      distance: '308.238 km',
      lapRecord: '1:31.447 - Pedro de la Rosa (2005)',
      firstGP: '2004',
      capacity: '70,000',
      type: 'permanent',
      color: '#E10600',
      description: 'Conhecido como "O Deserto dos Carros", é o primeiro GP da temporada com corridas noturnas.'
    },
    {
      id: 2,
      name: 'Circuito de Jeddah',
      location: 'Jeddah, Arábia Saudita',
      laps: '50',
      length: '6.174 km',
      distance: '308.450 km',
      lapRecord: '1:30.734 - Lewis Hamilton (2021)',
      firstGP: '2021',
      capacity: '30,000',
      type: 'street',
      color: '#006F62',
      description: 'O circuito de rua mais rápido do mundo, com velocidades médias superiores a 250 km/h.'
    },
    {
      id: 3,
      name: 'Circuito de Albert Park',
      location: 'Melbourne, Austrália',
      laps: '58',
      length: '5.278 km',
      distance: '306.124 km',
      lapRecord: '1:20.235 - Max Verstappen (2024)',
      firstGP: '1996',
      capacity: '125,000',
      type: 'street',
      color: '#2B68A0',
      description: 'Situado em torno de um lago, é conhecido por suas curvas rápidas e retas longas.'
    },
    {
      id: 4,
      name: 'Circuito de Suzuka',
      location: 'Suzuka, Japão',
      laps: '53',
      length: '5.807 km',
      distance: '307.471 km',
      lapRecord: '1:30.983 - Lewis Hamilton (2019)',
      firstGP: '1987',
      capacity: '155,000',
      type: 'permanent',
      color: '#E10600',
      description: 'O único circuito em formato de 8 do mundo, conhecido pelo famoso S de Esses.'
    },
    {
      id: 5,
      name: 'Circuito Internacional de Xangai',
      location: 'Xangai, China',
      laps: '56',
      length: '5.451 km',
      distance: '305.066 km',
      lapRecord: '1:32.238 - Michael Schumacher (2006)',
      firstGP: '2004',
      capacity: '200,000',
      type: 'permanent',
      color: '#006F62',
      description: 'Projetado por Hermann Tilke, possui uma das retas mais longas da F1.'
    },
    {
      id: 6,
      name: 'Autódromo de Miami',
      location: 'Miami, EUA',
      laps: '57',
      length: '5.412 km',
      distance: '308.326 km',
      lapRecord: '1:29.708 - Max Verstappen (2023)',
      firstGP: '2022',
      capacity: '90,000',
      type: 'street',
      color: '#2B68A0',
      description: 'Circuito em torno do estádio Hard Rock, famoso pelo "marina" artificial.'
    },
    {
      id: 7,
      name: 'Autódromo Enzo e Dino Ferrari',
      location: 'Imola, Itália',
      laps: '63',
      length: '4.909 km',
      distance: '309.049 km',
      lapRecord: '1:15.484 - Lewis Hamilton (2020)',
      firstGP: '1980',
      capacity: '120,000',
      type: 'permanent',
      color: '#E10600',
      description: 'Circuito histórico que retornou ao calendário em 2020 após 14 anos.'
    },
    {
      id: 8,
      name: 'Circuito de Mônaco',
      location: 'Monte Carlo, Mônaco',
      laps: '78',
      length: '3.337 km',
      distance: '260.286 km',
      lapRecord: '1:12.909 - Lewis Hamilton (2021)',
      firstGP: '1950',
      capacity: '200,000',
      type: 'street',
      color: '#006F62',
      description: 'O GP mais famoso do mundo, onde a classificação é mais importante que a corrida.'
    },
    {
      id: 9,
      name: 'Circuito de Barcelona-Catalunha',
      location: 'Montmeló, Espanha',
      laps: '66',
      length: '4.675 km',
      distance: '308.424 km',
      lapRecord: '1:16.330 - Max Verstappen (2024)',
      firstGP: '1991',
      capacity: '140,600',
      type: 'permanent',
      color: '#2B68A0',
      description: 'Local de testes preferido das equipes por sua variedade de curvas.'
    },
    {
      id: 10,
      name: 'Circuito Gilles Villeneuve',
      location: 'Montreal, Canadá',
      laps: '70',
      length: '4.361 km',
      distance: '305.270 km',
      lapRecord: '1:13.078 - Valtteri Bottas (2019)',
      firstGP: '1978',
      capacity: '100,000',
      type: 'street',
      color: '#E10600',
      description: 'Famoso pelo "Muro dos Campeões", localizado em uma ilha no Rio São Lourenço.'
    },
    {
      id: 11,
      name: 'Red Bull Ring',
      location: 'Spielberg, Áustria',
      laps: '71',
      length: '4.318 km',
      distance: '306.452 km',
      lapRecord: '1:05.619 - Carlos Sainz (2020)',
      firstGP: '1970',
      capacity: '105,000',
      type: 'permanent',
      color: '#006F62',
      description: 'Circuito nas montanhas com elevações que desafiam pilotos e engenheiros.'
    },
    {
      id: 12,
      name: 'Circuito de Silverstone',
      location: 'Silverstone, Reino Unido',
      laps: '52',
      length: '5.891 km',
      distance: '306.198 km',
      lapRecord: '1:27.097 - Max Verstappen (2020)',
      firstGP: '1950',
      capacity: '340,000',
      type: 'permanent',
      color: '#2B68A0',
      description: 'O berço da F1, onde ocorreu a primeira corrida do campeonato mundial em 1950.'
    }
  ];

  // Estatísticas
  const circuitStats = [
    { title: 'Circuito Mais Longo', value: '7.004 km', circuit: 'Spa-Francorchamps' },
    { title: 'Circuito Mais Curto', value: '3.337 km', circuit: 'Mônaco' },
    { title: 'Record de Velocidade', value: '372.5 km/h', circuit: 'Monza (2023)' },
    { title: 'Maior Capacidade', value: '340,000', circuit: 'Silverstone' }
  ];

  // Filtrar circuitos
  const filteredCircuits = {
    all: circuits,
    classic: circuits.filter(c => parseInt(c.firstGP) <= 1990),
    modern: circuits.filter(c => parseInt(c.firstGP) > 1990),
    street: circuits.filter(c => c.type === 'street'),
    permanent: circuits.filter(c => c.type === 'permanent')
  };

  const currentCircuits = filteredCircuits[activeTab] || circuits;

  // Função para abrir modal de detalhes
  const openCircuitDetails = (circuit) => {
    setSelectedCircuit(circuit);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>CIRCUITOS F1 2025</Text>
          <Text style={styles.headerSubtitle}>24 circuitos ao redor do mundo</Text>
        </View>
        
        <View style={styles.headerStats}>
          <View style={styles.headerStat}>
            <Text style={styles.statNumber}>{circuits.length}</Text>
            <Text style={styles.statLabel}>Circuitos</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.headerStat}>
            <Text style={styles.statNumber}>21</Text>
            <Text style={styles.statLabel}>Países</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.headerStat}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Continentes</Text>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.tabsContainer}
        contentContainerStyle={styles.tabsContent}
      >
        <TouchableOpacity
          style={[styles.tab, activeTab === 'all' && styles.tabActive]}
          onPress={() => setActiveTab('all')}
        >
          <Text style={[styles.tabText, activeTab === 'all' && styles.tabTextActive]}>
            Todos
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'classic' && styles.tabActive]}
          onPress={() => setActiveTab('classic')}
        >
          <Text style={[styles.tabText, activeTab === 'classic' && styles.tabTextActive]}>
            Clássicos
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'modern' && styles.tabActive]}
          onPress={() => setActiveTab('modern')}
        >
          <Text style={[styles.tabText, activeTab === 'modern' && styles.tabTextActive]}>
            Modernos
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'street' && styles.tabActive]}
          onPress={() => setActiveTab('street')}
        >
          <Text style={[styles.tabText, activeTab === 'street' && styles.tabTextActive]}>
            Rua
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'permanent' && styles.tabActive]}
          onPress={() => setActiveTab('permanent')}
        >
          <Text style={[styles.tabText, activeTab === 'permanent' && styles.tabTextActive]}>
            Permanentes
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Conteúdo Principal */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Estatísticas */}
        {activeTab === 'all' && (
          <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>ESTATÍSTICAS</Text>
            <View style={styles.statsGrid}>
              {circuitStats.map((stat, index) => (
                <View key={index} style={styles.statCard}>
                  <Text style={styles.statCardTitle}>{stat.title}</Text>
                  <Text style={styles.statCardValue}>{stat.value}</Text>
                  <Text style={styles.statCardCircuit}>{stat.circuit}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Contador de Circuitos */}
        <View style={styles.circuitsCount}>
          <Text style={styles.circuitsCountText}>
            {currentCircuits.length} {activeTab === 'all' ? 'circuitos' : 
              activeTab === 'classic' ? 'circuitos clássicos' :
              activeTab === 'modern' ? 'circuitos modernos' :
              activeTab === 'street' ? 'circuitos de rua' : 'circuitos permanentes'}
          </Text>
        </View>

        {/* Grid de Circuitos */}
        <View style={styles.circuitsGrid}>
          {currentCircuits.map((circuit) => (
            <TouchableOpacity
              key={circuit.id}
              style={[
                styles.circuitCard,
                { borderLeftColor: circuit.color }
              ]}
              onPress={() => openCircuitDetails(circuit)}
              activeOpacity={0.9}
            >
              <View style={styles.circuitHeader}>
                <View style={styles.circuitNumberContainer}>
                  <Text style={styles.circuitNumber}>{circuit.id}</Text>
                </View>
                <Text style={styles.circuitName} numberOfLines={2}>
                  {circuit.name}
                </Text>
              </View>
              
              <View style={styles.circuitLocation}>
                <Text style={styles.circuitLocationText}>{circuit.location}</Text>
                <View style={[
                  styles.circuitTypeBadge,
                  { backgroundColor: circuit.type === 'street' ? '#E10600' : '#006F62' }
                ]}>
                  <Text style={styles.circuitTypeText}>
                    {circuit.type === 'street' ? 'RUA' : 'PERMANENTE'}
                  </Text>
                </View>
              </View>
              
              <View style={styles.circuitDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Comprimento:</Text>
                  <Text style={styles.detailValue}>{circuit.length}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Voltas:</Text>
                  <Text style={styles.detailValue}>{circuit.laps}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Distância:</Text>
                  <Text style={styles.detailValue}>{circuit.distance}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Primeiro GP:</Text>
                  <Text style={styles.detailValue}>{circuit.firstGP}</Text>
                </View>
              </View>
              
              <View style={styles.cardFooter}>
                <Text style={styles.detailText}>TOQUE PARA DETALHES</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Modal de Detalhes */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {selectedCircuit && (
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{selectedCircuit.name}</Text>
                <TouchableOpacity 
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
              
              <ScrollView style={styles.modalBody}>
                <View style={[styles.modalTypeBadge, { backgroundColor: selectedCircuit.color }]}>
                  <Text style={styles.modalTypeText}>
                    {selectedCircuit.type === 'street' ? 'CIRCUITO DE RUA' : 'CIRCUITO PERMANENTE'}
                  </Text>
                </View>
                
                <Text style={styles.modalDescription}>{selectedCircuit.description}</Text>
                
                <View style={styles.modalDetails}>
                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Localização</Text>
                    <Text style={styles.modalDetailValue}>{selectedCircuit.location}</Text>
                  </View>
                  
                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Comprimento</Text>
                    <Text style={styles.modalDetailValue}>{selectedCircuit.length}</Text>
                  </View>
                  
                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Número de Voltas</Text>
                    <Text style={styles.modalDetailValue}>{selectedCircuit.laps}</Text>
                  </View>
                  
                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Distância Total</Text>
                    <Text style={styles.modalDetailValue}>{selectedCircuit.distance}</Text>
                  </View>
                  
                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Record da Volta</Text>
                    <Text style={[styles.modalDetailValue, styles.recordText]}>
                      {selectedCircuit.lapRecord}
                    </Text>
                  </View>
                  
                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Primeiro GP</Text>
                    <Text style={styles.modalDetailValue}>{selectedCircuit.firstGP}</Text>
                  </View>
                  
                  <View style={styles.modalDetailItem}>
                    <Text style={styles.modalDetailLabel}>Capacidade</Text>
                    <Text style={styles.modalDetailValue}>{selectedCircuit.capacity} espectadores</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        )}
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    backgroundColor: '#111111',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  headerContent: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
  },
  headerStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerStat: {
    alignItems: 'center',
    paddingHorizontal: 15,
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFD700',
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
    fontWeight: '600',
    letterSpacing: 1,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  tabsContainer: {
    backgroundColor: '#111111',
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  tabsContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#333333',
  },
  tabActive: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },
  tabText: {
    color: '#888888',
    fontWeight: '600',
    fontSize: 14,
  },
  tabTextActive: {
    color: '#000000',
    fontWeight: '700',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  statsSection: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFD700',
    marginBottom: 15,
    letterSpacing: 1,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    width: (width - 60) / 2,
    backgroundColor: '#1A1A1A',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333333',
  },
  statCardTitle: {
    fontSize: 12,
    color: '#888888',
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  statCardValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  statCardCircuit: {
    fontSize: 12,
    color: '#FFD700',
    fontWeight: '500',
  },
  circuitsCount: {
    backgroundColor: '#1A1A1A',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  circuitsCountText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFD700',
  },
  circuitsGrid: {
    paddingBottom: 30,
  },
  circuitCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD700',
    borderWidth: 1,
    borderColor: '#333333',
  },
  circuitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  circuitNumberContainer: {
    backgroundColor: '#FFD700',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  circuitNumber: {
    fontSize: 16,
    fontWeight: '800',
    color: '#000000',
  },
  circuitName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 22,
  },
  circuitLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  circuitLocationText: {
    fontSize: 14,
    color: '#FFD700',
    fontWeight: '500',
    flex: 1,
  },
  circuitTypeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  circuitTypeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  circuitDetails: {
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  detailLabel: {
    fontSize: 14,
    color: '#888888',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  cardFooter: {
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  detailText: {
    fontSize: 12,
    color: '#FFD700',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: '#1A1A1A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '85%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  modalTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    marginRight: 10,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  modalBody: {
    padding: 20,
  },
  modalTypeBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 15,
  },
  modalTypeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  modalDescription: {
    fontSize: 16,
    color: '#CCCCCC',
    lineHeight: 22,
    marginBottom: 20,
  },
  modalDetails: {
    backgroundColor: '#111111',
    borderRadius: 12,
    padding: 15,
  },
  modalDetailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  modalDetailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  modalDetailLabel: {
    fontSize: 14,
    color: '#888888',
    fontWeight: '500',
  },
  modalDetailValue: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'right',
    flex: 1,
    marginLeft: 10,
  },
  recordText: {
    color: '#4ADE80',
    fontFamily: 'monospace',
  },
});