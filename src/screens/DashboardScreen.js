
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
  RefreshControl
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

// Dados simulados
const nextRaces = [
  { 
    id: '1',
    name: 'LAS VEGAS GP', 
    date: '20-22 NOV', 
    country: '🇺🇸', 
    circuit: 'Circuito Urbano',
    sessions: [
      { name: 'Practice 1', time: '18:30', completed: true },
      { name: 'Practice 2', time: '22:00', completed: true },
      { name: 'Practice 3', time: '19:30', completed: false },
      { name: 'Qualifying', time: '23:00', completed: false },
      { name: 'Race', time: '22:00', completed: false }
    ]
  },
  { 
    id: '2',
    name: 'QATAR GP', 
    date: '28-30 NOV', 
    country: '🇶🇦', 
    circuit: 'Losail International',
    sessions: [
      { name: 'Practice 1', time: '14:30', completed: false },
      { name: 'Practice 2', time: '18:00', completed: false },
      { name: 'Practice 3', time: '15:30', completed: false },
      { name: 'Qualifying', time: '19:00', completed: false },
      { name: 'Race', time: '20:00', completed: false }
    ]
  },
];

const driverStandings = [
  { 
    position: 1, 
    driver: 'Lando Norris', 
    team: 'McLaren', 
    points: 390, 
    wins: 8,
    photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/norris.jpg.img.1920.medium.jpg/1677069664.jpg'
  },
  { 
    position: 2, 
    driver: 'Oscar Piastri', 
    team: 'McLaren', 
    points: 366, 
    wins: 6,
    photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/piastri.jpg.img.1920.medium.jpg/1677069674.jpg'
  },
  { 
    position: 3, 
    driver: 'Max Verstappen', 
    team: 'Red Bull Racing', 
    points: 341, 
    wins: 5,
    photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1920.medium.jpg/1677069776.jpg'
  },
];

const seasonStats = [
  { title: 'Corridas Disputadas', value: '21', change: '+3', icon: '🏁' },
  { title: 'Líder do Campeonato', value: 'Norris', change: '390 pts', icon: '🥇' },
  { title: 'Volta Mais Rápida', value: '1:27.458', change: 'Verstappen', icon: '⚡' },
  { title: 'Velocidade Média', value: '248 km/h', change: '+5.1%', icon: '🚀' }
];

const teamStandings = [
  { position: 1, team: 'McLaren', points: 756, change: 'up' },
  { position: 2, team: 'Red Bull Racing', points: 689, change: 'down' },
  { position: 3, team: 'Ferrari', points: 645, change: 'up' }
];

export default function DashboardScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const renderOverview = () => (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.overviewContent}
    >
      {/* Header Stats */}
      <View style={styles.headerStats}>
        <View style={styles.headerStat}>
          <Text style={styles.statLabel}>Próxima Corrida</Text>
          <Text style={styles.statValue}>Las Vegas</Text>
        </View>
        <View style={styles.headerStat}>
          <Text style={styles.statLabel}>Rodada</Text>
          <Text style={styles.statValue}>22/24</Text>
        </View>
        <View style={styles.headerStat}>
          <Text style={styles.statLabel}>Temporada</Text>
          <Text style={styles.statValue}>2025</Text>
        </View>
      </View>

      {/* Season Stats */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Estatísticas da Temporada</Text>
        <View style={styles.statsGrid}>
          {seasonStats.map((stat, index) => (
            <LinearGradient
              key={index}
              colors={['#1a1a1a', '#111111']}
              style={styles.statCard}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.statHeader}>
                <Text style={styles.statIcon}>{stat.icon}</Text>
                <Text style={styles.statTitle}>{stat.title}</Text>
              </View>
              <Text style={styles.statMainValue}>{stat.value}</Text>
              <Text style={styles.statChange}>{stat.change}</Text>
            </LinearGradient>
          ))}
        </View>
      </View>

      {/* Next Races */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Próximas Corridas</Text>
        {nextRaces.map((race) => (
          <View key={race.id} style={styles.raceCard}>
            <View style={styles.raceHeader}>
              <Text style={styles.raceFlag}>{race.country}</Text>
              <View style={styles.raceInfo}>
                <Text style={styles.raceName}>{race.name}</Text>
                <Text style={styles.raceDate}>{race.date}</Text>
              </View>
            </View>
            <View style={styles.sessionsList}>
              {race.sessions.map((session, idx) => (
                <View key={idx} style={styles.sessionItem}>
                  <Text style={[
                    styles.sessionName,
                    session.completed && styles.completedSession
                  ]}>
                    {session.name}
                  </Text>
                  <Text style={[
                    styles.sessionTime,
                    session.completed ? styles.completedTime : styles.upcomingTime
                  ]}>
                    {session.time}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Driver Standings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top 3 Pilotos</Text>
        {driverStandings.map((driver) => (
          <TouchableOpacity 
            key={driver.position} 
            style={styles.driverCard}
            activeOpacity={0.8}
          >
            <View style={styles.driverPosition}>
              <Text style={styles.positionText}>#{driver.position}</Text>
            </View>
            <Image
              source={{ uri: driver.photo }}
              style={styles.driverPhoto}
            />
            <View style={styles.driverDetails}>
              <Text style={styles.driverName}>{driver.driver}</Text>
              <Text style={styles.driverTeam}>{driver.team}</Text>
            </View>
            <View style={styles.driverPoints}>
              <Text style={styles.pointsText}>{driver.points} pts</Text>
              <Text style={styles.winsText}>{driver.wins} vitórias</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Team Standings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Classificação de Equipes</Text>
        {teamStandings.map((team) => (
          <View key={team.position} style={styles.teamCard}>
            <View style={styles.teamPosition}>
              <Text style={styles.teamPosText}>#{team.position}</Text>
              <Icon 
                name={team.change === 'up' ? 'arrow-upward' : 'arrow-downward'} 
                size={16} 
                color={team.change === 'up' ? '#4CAF50' : '#F44336'} 
              />
            </View>
            <Text style={styles.teamName}>{team.team}</Text>
            <Text style={styles.teamPoints}>{team.points} pts</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderRaces = () => (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.racesContent}
    >
      <Text style={styles.sectionTitleLarge}>Calendário de Corridas</Text>
      {nextRaces.map((race) => (
        <LinearGradient
          key={race.id}
          colors={['#1a1a1a', '#111111']}
          style={styles.raceDetailCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.raceDetailHeader}>
            <Text style={styles.detailFlag}>{race.country}</Text>
            <View>
              <Text style={styles.detailRaceName}>{race.name}</Text>
              <Text style={styles.detailCircuit}>{race.circuit}</Text>
            </View>
          </View>
          <Text style={styles.sessionsTitle}>Sessões do Fim de Semana</Text>
          {race.sessions.map((session, idx) => (
            <View key={idx} style={styles.sessionDetail}>
              <View style={styles.sessionInfo}>
                <Text style={styles.sessionDetailName}>{session.name}</Text>
                <Text style={styles.sessionDate}>{race.date.split('-')[0]} NOV</Text>
              </View>
              <Text style={styles.sessionDetailTime}>{session.time}</Text>
              <View style={[
                styles.statusBadge,
                session.completed ? styles.completedBadge : styles.upcomingBadge
              ]}>
                <Text style={styles.statusText}>
                  {session.completed ? 'Concluído' : 'Em Breve'}
                </Text>
              </View>
            </View>
          ))}
        </LinearGradient>
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      {/* Header */}
      <LinearGradient
        colors={['#000000', '#1a1a1a']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>DASHBOARD F1 2025</Text>
          <Text style={styles.headerSubtitle}>Acompanhe a temporada em tempo real</Text>
        </View>
      </LinearGradient>

      {/* Navigation Tabs */}
      <View style={styles.tabsContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsScroll}
        >
          <TouchableOpacity
            style={[styles.tab, activeTab === 'overview' && styles.activeTab]}
            onPress={() => setActiveTab('overview')}
          >
            <Text style={[styles.tabText, activeTab === 'overview' && styles.activeTabText]}>
              Visão Geral
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'races' && styles.activeTab]}
            onPress={() => setActiveTab('races')}
          >
            <Text style={[styles.tabText, activeTab === 'races' && styles.activeTabText]}>
              Próximas Corridas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'standings' && styles.activeTab]}
            onPress={() => setActiveTab('standings')}
          >
            <Text style={[styles.tabText, activeTab === 'standings' && styles.activeTabText]}>
              Classificação
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#E10600"
          colors={['#E10600']}
        >
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'races' && renderRaces()}
          {activeTab === 'standings' && (
            <ScrollView>
              <Text style={styles.comingSoon}>Em breve...</Text>
            </ScrollView>
          )}
        </RefreshControl>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '400',
  },
  tabsContainer: {
    backgroundColor: '#111111',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tabsScroll: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
  },
  activeTab: {
    backgroundColor: '#E10600',
  },
  tabText: {
    color: '#888',
    fontWeight: '600',
    fontSize: 14,
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  headerStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#111111',
    margin: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  headerStat: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
    fontWeight: '500',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#E10600',
  },
  overviewContent: {
    paddingBottom: 30,
  },
  section: {
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 15,
    marginLeft: 5,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: (width - 40) / 2,
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  statTitle: {
    fontSize: 12,
    color: '#888',
    fontWeight: '600',
    flex: 1,
  },
  statMainValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  statChange: {
    fontSize: 12,
    color: '#E10600',
    fontWeight: '600',
  },
  raceCard: {
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  raceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  raceFlag: {
    fontSize: 24,
    marginRight: 12,
  },
  raceInfo: {
    flex: 1,
  },
  raceName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 3,
  },
  raceDate: {
    fontSize: 12,
    color: '#E10600',
    fontWeight: '600',
  },
  sessionsList: {
    gap: 8,
  },
  sessionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  sessionName: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  completedSession: {
    color: '#888',
    textDecorationLine: 'line-through',
  },
  sessionTime: {
    fontSize: 13,
    fontWeight: '600',
  },
  completedTime: {
    color: '#10b981',
  },
  upcomingTime: {
    color: '#f59e0b',
  },
  driverCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  driverPosition: {
    backgroundColor: '#333',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  positionText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  driverPhoto: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#333',
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  driverTeam: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
  },
  driverPoints: {
    alignItems: 'flex-end',
  },
  pointsText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  winsText: {
    fontSize: 10,
    color: '#888',
    fontWeight: '600',
  },
  teamCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  teamPosition: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  teamPosText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
    marginRight: 5,
  },
  teamName: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  teamPoints: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E10600',
  },
  racesContent: {
    paddingBottom: 30,
  },
  sectionTitleLarge: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    margin: 20,
    marginBottom: 15,
  },
  raceDetailCard: {
    marginHorizontal: 15,
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  raceDetailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  detailFlag: {
    fontSize: 32,
    marginRight: 15,
  },
  detailRaceName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 3,
  },
  detailCircuit: {
    fontSize: 13,
    color: '#E10600',
    fontWeight: '600',
  },
  sessionsTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  sessionDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#222222',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  sessionInfo: {
    flex: 1,
  },
  sessionDetailName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 3,
  },
  sessionDate: {
    fontSize: 11,
    color: '#888',
  },
  sessionDetailTime: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
    marginHorizontal: 10,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  completedBadge: {
    backgroundColor: '#1e3a28',
  },
  upcomingBadge: {
    backgroundColor: '#3a2e1e',
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  comingSoon: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
});