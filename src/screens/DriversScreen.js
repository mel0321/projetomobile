import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar
} from 'react-native';

const { width } = Dimensions.get('window');

const drivers = [
  { id: 1, name: 'Lando Norris', team: 'McLaren', number: '4', country: 'United Kingdom', points: '390', podiums: 15, championships: 0, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/norris.jpg.img.1920.medium.jpg/1677069664.jpg' },
  { id: 2, name: 'Oscar Piastri', team: 'McLaren', number: '81', country: 'Australia', points: '366', podiums: 12, championships: 0, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/piastri.jpg.img.1920.medium.jpg/1677069674.jpg' },
  { id: 3, name: 'Max Verstappen', team: 'Red Bull Racing', number: '1', country: 'Netherlands', points: '341', podiums: 10, championships: 3, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1920.medium.jpg/1677069776.jpg' },
  { id: 4, name: 'George Russell', team: 'Mercedes', number: '63', country: 'United Kingdom', points: '276', podiums: 8, championships: 0, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/russell.jpg.img.1920.medium.jpg/1677069772.jpg' },
  { id: 5, name: 'Charles Leclerc', team: 'Ferrari', number: '16', country: 'Monaco', points: '214', podiums: 7, championships: 0, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/leclerc.jpg.img.1920.medium.jpg/1677069618.jpg' },
  { id: 6, name: 'Lewis Hamilton', team: 'Ferrari', number: '44', country: 'United Kingdom', points: '148', podiums: 4, championships: 7, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1920.medium.jpg/1677069609.jpg' },
  { id: 7, name: 'Kimi Antonelli', team: 'Mercedes', number: '12', country: 'Italy', points: '122', podiums: 2, championships: 0, photo: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1734706621/content/dam/fom-website/drivers/2025Drivers/antonelli.png' },
  { id: 8, name: 'Alexander Albon', team: 'Williams', number: '23', country: 'Thailand', points: '73', podiums: 0, championships: 0, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/albon.jpg.img.1920.medium.jpg/1677069549.jpg' },
  { id: 9, name: 'Nico Hülkenberg', team: 'Kick Sauber', number: '27', country: 'Germany', points: '43', podiums: 0, championships: 0, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hulkenberg.jpg.img.1920.medium.jpg/1677069614.jpg' },
  { id: 10, name: 'Isack Hadjar', team: 'Racing Bulls', number: '6', country: 'France', points: '43', podiums: 0, championships: 0, photo: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1729782785/fom-website/2024/Isack%20Hadjar%20Red%20Bull%20Racing.png' },
  { id: 11, name: 'Oliver Bearman', team: 'Haas F1 Team', number: '87', country: 'United Kingdom', points: '40', podiums: 0, championships: 0, photo: 'https://media.formula1.com/image/upload/f_auto/c_limit/q_auto/w_1320/content/dam/fom-website/drivers/2025Drivers/bearman.png' },
  { id: 12, name: 'Fernando Alonso', team: 'Aston Martin', number: '14', country: 'Spain', points: '40', podiums: 1, championships: 2, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/alonso.jpg.img.1920.medium.jpg/1677069544.jpg' },
  { id: 13, name: 'Carlos Sainz', team: 'Williams', number: '55', country: 'Spain', points: '38', podiums: 0, championships: 0, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/sainz.jpg.img.1920.medium.jpg/1677069767.jpg' },
  { id: 14, name: 'Liam Lawson', team: 'Racing Bulls', number: '30', country: 'New Zealand', points: '36', podiums: 0, championships: 0, photo: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1729782785/fom-website/2024/Liam%20Lawson%20Racing%20Bulls.png' },
  { id: 15, name: 'Lance Stroll', team: 'Aston Martin', number: '18', country: 'Canada', points: '32', podiums: 0, championships: 0, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/stroll.jpg.img.1920.medium.jpg/1677069788.jpg' },
  { id: 16, name: 'Esteban Ocon', team: 'Haas F1 Team', number: '31', country: 'France', points: '30', podiums: 0, championships: 0, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/ocon.jpg.img.1920.medium.jpg/1677069669.jpg' },
  { id: 17, name: 'Yuki Tsunoda', team: 'Red Bull Racing', number: '22', country: 'Japan', points: '28', podiums: 0, championships: 0, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/tsunoda.jpg.img.1920.medium.jpg/1677069793.jpg' },
  { id: 18, name: 'Pierre Gasly', team: 'Alpine', number: '10', country: 'France', points: '22', podiums: 0, championships: 0, photo: 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/gasly.jpg.img.1920.medium.jpg/1677069598.jpg' },
  { id: 19, name: 'Gabriel Bortoleto', team: 'Kick Sauber', number: '5', country: 'Brazil', points: '19', podiums: 0, championships: 0, photo: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1729782785/fom-website/2024/Gabriel%20Bortoleto%20Visa%20CashApp%20RB.png' },
  { id: 20, name: 'Franco Colapinto', team: 'Alpine', number: '43', country: 'Argentina', points: '0', podiums: 0, championships: 0, photo: 'https://media.formula1.com/image/upload/f_auto/q_auto/v1729782785/fom-website/2024/Franco%20Colapinto%20Williams.png' }
];

const getTeamColor = (team) => {
  const colors = {
    'McLaren': '#FF8000',
    'Red Bull Racing': '#0600EF',
    'Mercedes': '#00D2BE',
    'Ferrari': '#DC0000',
    'Williams': '#005AFF',
    'Kick Sauber': '#52E252',
    'Racing Bulls': '#6692FF',
    'Haas F1 Team': '#FFFFFF',
    'Aston Martin': '#006F62',
    'Alpine': '#0090FF'
  };
  return colors[team] || '#666666';
};

export default function Abautmap() {
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const teams = ['all', ...new Set(drivers.map(driver => driver.team))];

  const filteredDrivers = drivers.filter(driver => {
    const matchesTeam = selectedTeam === 'all' || driver.team === selectedTeam;
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         driver.team.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTeam && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>PILOTOS F1 2025</Text>
          <Text style={styles.headerSubtitle}>20 Corredores • 10 Equipes • 24 Corridas</Text>
        </View>
      </View>

      {/* Stats Bar */}
      <View style={styles.statsBar}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>20</Text>
          <Text style={styles.statLabel}>PILOTOS</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>10</Text>
          <Text style={styles.statLabel}>EQUIPES</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>24</Text>
          <Text style={styles.statLabel}>CORRIDAS</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar piloto ou equipe..."
            placeholderTextColor="#666"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          {searchTerm.length > 0 && (
            <TouchableOpacity onPress={() => setSearchTerm('')} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>×</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Team Filters */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.teamFilters}
        contentContainerStyle={styles.teamFiltersContent}
      >
        {teams.map(team => (
          <TouchableOpacity
            key={team}
            style={[
              styles.teamFilter,
              selectedTeam === team && styles.teamFilterActive,
              selectedTeam === team && team !== 'all' && { 
                backgroundColor: getTeamColor(team),
                borderColor: getTeamColor(team)
              }
            ]}
            onPress={() => setSelectedTeam(team)}
          >
            <Text style={[
              styles.teamFilterText,
              selectedTeam === team && styles.teamFilterTextActive,
              selectedTeam === team && team !== 'all' && { color: '#FFFFFF' },
              !selectedTeam === team && team !== 'all' && { color: getTeamColor(team) }
            ]}>
              {team === 'all' ? 'TODAS' : team.split(' ')[0].toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Drivers Grid */}
      <ScrollView 
        style={styles.driversGrid}
        showsVerticalScrollIndicator={false}
      >
        {filteredDrivers.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              Nenhum piloto encontrado
            </Text>
            <Text style={styles.emptyStateSubtext}>
              Tente ajustar os filtros ou a busca
            </Text>
          </View>
        ) : (
          <View style={styles.driversList}>
            {filteredDrivers.map((driver, index) => (
              <View 
                key={driver.id}
                style={[
                  styles.driverCard,
                  { borderLeftColor: getTeamColor(driver.team) }
                ]}
              >
                {/* Driver Photo */}
                <View style={styles.driverPhotoContainer}>
                  <Image
                    source={{ uri: driver.photo }}
                    style={styles.driverPhoto}
                    resizeMode="cover"
                  />
                  <View style={styles.driverNumberBadge}>
                    <Text style={styles.driverNumberText}>#{driver.number}</Text>
                  </View>
                </View>

                {/* Driver Info */}
                <View style={styles.driverInfo}>
                  <View style={styles.driverHeader}>
                    <View>
                      <Text style={styles.driverName}>{driver.name.toUpperCase()}</Text>
                      <Text style={[styles.driverTeam, { color: getTeamColor(driver.team) }]}>
                        {driver.team}
                      </Text>
                    </View>
                    <View style={styles.driverCountry}>
                      <Text style={styles.driverCountryText}>{driver.country}</Text>
                    </View>
                  </View>

                  {/* Driver Stats */}
                  <View style={styles.driverStats}>
                    <View style={styles.stat}>
                      <Text style={styles.statValue}>{driver.points}</Text>
                      <Text style={styles.statLabel}>PONTOS</Text>
                    </View>
                    <View style={styles.stat}>
                      <Text style={styles.statValue}>{driver.podiums}</Text>
                      <Text style={styles.statLabel}>PÓDIOS</Text>
                    </View>
                    <View style={styles.stat}>
                      <Text style={styles.statValue}>{driver.championships}</Text>
                      <Text style={styles.statLabel}>TÍTULOS</Text>
                    </View>
                  </View>

                  {/* Progress Bar */}
                  <View style={styles.progressBar}>
                    <View 
                      style={[
                        styles.progressFill,
                        { 
                          width: `${(parseInt(driver.points) / 400) * 100}%`,
                          backgroundColor: getTeamColor(driver.team)
                        }
                      ]}
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    backgroundColor: '#E10600',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1.5,
  },
  headerSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
    letterSpacing: 0.5,
  },
  statsBar: {
    backgroundColor: '#111111',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 10,
    color: '#999999',
    marginTop: 2,
    letterSpacing: 1,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#333333',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchWrapper: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#333333',
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    paddingVertical: 12,
  },
  clearButton: {
    padding: 5,
  },
  clearButtonText: {
    color: '#666666',
    fontSize: 20,
    fontWeight: '300',
  },
  teamFilters: {
    maxHeight: 50,
    marginBottom: 10,
  },
  teamFiltersContent: {
    paddingHorizontal: 15,
  },
  teamFilter: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#333333',
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  teamFilterActive: {
    borderWidth: 1.5,
  },
  teamFilterText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#999999',
    letterSpacing: 0.5,
  },
  teamFilterTextActive: {
    color: '#FFFFFF',
  },
  driversGrid: {
    flex: 1,
  },
  driversList: {
    padding: 15,
  },
  driverCard: {
    backgroundColor: '#111111',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    borderLeftWidth: 4,
    flexDirection: 'row',
    height: 140,
  },
  driverPhotoContainer: {
    width: 120,
    position: 'relative',
  },
  driverPhoto: {
    width: '100%',
    height: '100%',
  },
  driverNumberBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  driverNumberText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  driverInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  driverHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  driverName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  driverTeam: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  driverCountry: {
    backgroundColor: '#222222',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  driverCountryText: {
    fontSize: 10,
    color: '#CCCCCC',
    fontWeight: '600',
  },
  driverStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  stat: {
    alignItems: 'center',
  },
  progressBar: {
    height: 3,
    backgroundColor: '#222222',
    borderRadius: 1.5,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 1.5,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#999999',
  },
});