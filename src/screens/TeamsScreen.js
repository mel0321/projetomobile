import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';

const { width } = Dimensions.get('window');

const teams = [
  {
    id: 1,
    name: 'RED BULL RACING',
    fullName: 'ORACLE RED BULL RACING',
    base: 'Milton Keynes, Reino Unido',
    teamChief: 'Christian Horner',
    technicalChief: 'Pierre Waché',
    championships: 6,
    firstSeason: 1997,
    drivers: ['Max Verstappen', 'Liam Lawson'],
    color: '#3671C6',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Red_Bull_Racing_logo.svg/800px-Red_Bull_Racing_logo.svg.png'
  },
  {
    id: 2,
    name: 'FERRARI',
    fullName: 'SCUDERIA FERRARI',
    base: 'Maranello, Itália',
    teamChief: 'Frédéric Vasseur',
    technicalChief: 'Enrico Cardile',
    championships: 16,
    firstSeason: 1950,
    drivers: ['Lewis Hamilton', 'Charles Leclerc'],
    color: '#F91536',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Scuderia_Ferrari_Logo.svg/800px-Scuderia_Ferrari_Logo.svg.png'
  },
  {
    id: 3,
    name: 'MERCEDES',
    fullName: 'MERCEDES-AMG PETRONAS F1 TEAM',
    base: 'Brackley, Reino Unido',
    teamChief: 'Toto Wolff',
    technicalChief: 'James Allison',
    championships: 8,
    firstSeason: 1970,
    drivers: ['George Russell', 'Andrea Kimi Antonelli'],
    color: '#27F4D2',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mercedes-Benz_in_Formula_One_logo.svg/800px-Mercedes-Benz_in_Formula_One_logo.svg.png'
  },
  {
    id: 4,
    name: 'MCLAREN',
    fullName: 'MCLAREN F1 TEAM',
    base: 'Woking, Reino Unido',
    teamChief: 'Andrea Stella',
    technicalChief: 'Peter Prodromou',
    championships: 8,
    firstSeason: 1966,
    drivers: ['Lando Norris', 'Oscar Piastri'],
    color: '#F58020',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/McLaren_Racing_logo.svg/800px-McLaren_Racing_logo.svg.png'
  },
  {
    id: 5,
    name: 'ASTON MARTIN',
    fullName: 'ASTON MARTIN ARAMCO COGNIZANT F1 TEAM',
    base: 'Silverstone, Reino Unido',
    teamChief: 'Mike Krack',
    technicalChief: 'Dan Fallows',
    championships: 0,
    firstSeason: 1959,
    drivers: ['Fernando Alonso', 'Lance Stroll'],
    color: '#229971',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Aston_Martin_F1_Team_Logo.svg/800px-Aston_Martin_F1_Team_Logo.svg.png'
  },
  {
    id: 6,
    name: 'ALPINE',
    fullName: 'BWT ALPINE F1 TEAM',
    base: 'Enstone, Reino Unido',
    teamChief: 'Bruno Famin',
    technicalChief: 'David Sanchez',
    championships: 2,
    firstSeason: 1986,
    drivers: ['Pierre Gasly', 'Jack Doohan'],
    color: '#0090CC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Alpine_F1_Team_Logo.svg/800px-Alpine_F1_Team_Logo.svg.png'
  },
  {
    id: 7,
    name: 'WILLIAMS',
    fullName: 'WILLIAMS RACING',
    base: 'Grove, Reino Unido',
    teamChief: 'James Vowles',
    technicalChief: 'Pat Fry',
    championships: 9,
    firstSeason: 1978,
    drivers: ['Alexander Albon', 'Carlos Sainz'],
    color: '#64C4FF',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Williams_Racing_Logo.svg/800px-Williams_Racing_Logo.svg.png'
  },
  {
    id: 8,
    name: 'SAUBER',
    fullName: 'STARE F1 TEAM KICK SAUBER',
    base: 'Hinwil, Suíça',
    teamChief: 'Alessandro Alunni Bravi',
    technicalChief: 'James Key',
    championships: 0,
    firstSeason: 1993,
    drivers: ['Nico Hülkenberg', 'Gabriel Bortoleto'],
    color: '#52E252',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Sauber_Motorsport_logo.svg/800px-Sauber_Motorsport_logo.svg.png'
  },
  {
    id: 9,
    name: 'RACING BULLS',
    fullName: 'VISA CASH APP RB F1 TEAM',
    base: 'Faenza, Itália',
    teamChief: 'Laurent Mekies',
    technicalChief: 'Jody Egginton',
    championships: 0,
    firstSeason: 2006,
    drivers: ['Yuki Tsunoda', 'Isack Hadjar'],
    color: '#6692FF',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Racing_Bulls_logo_2024.svg/800px-Racing_Bulls_logo_2024.svg.png'
  },
  {
    id: 10,
    name: 'HAAS',
    fullName: 'MONEYGRAM HAAS F1 TEAM',
    base: 'Kannapolis, EUA',
    teamChief: 'Ayao Komatsu',
    technicalChief: 'Andrea De Zordo',
    championships: 0,
    firstSeason: 2016,
    drivers: ['Oliver Bearman', 'Esteban Ocon'],
    color: '#B6BABD',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Haas_F1_Team_logo.svg/800px-Haas_F1_Team_logo.svg.png'
  }
];

export default function TeamsScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>EQUIPES F1 2025</Text>
          <Text style={styles.headerSubtitle}>10 CONSTRUTORES • COMPETIÇÃO MÁXIMA</Text>
        </View>
        
        {/* Stats Overview */}
        <View style={styles.statsOverview}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>10</Text>
            <Text style={styles.statLabel}>EQUIPES</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>40</Text>
            <Text style={styles.statLabel}>TÍTULOS</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>74</Text>
            <Text style={styles.statLabel}>TEMPORADAS</Text>
          </View>
        </View>
      </View>

      {/* Teams Grid */}
      <View style={styles.teamsGrid}>
        {teams.map((team, index) => (
          <View 
            key={team.id}
            style={[
              styles.teamCard,
              { borderTopColor: team.color }
            ]}
          >
            {/* Team Header */}
            <View style={styles.teamHeader}>
              <View style={styles.teamLogoContainer}>
                <Text style={[styles.teamRank, { color: team.color }]}>
                  #{index + 1}
                </Text>
              </View>
              
              <View style={styles.teamTitleContainer}>
                <Text style={styles.teamName}>{team.name}</Text>
                <Text style={styles.teamFullName}>{team.fullName}</Text>
              </View>
            </View>

            {/* Team Stats */}
            <View style={styles.teamStats}>
              <View style={styles.statRow}>
                <Text style={styles.statLabelSmall}>CAMPEONATOS</Text>
                <Text style={[styles.statValue, { color: team.color }]}>
                  {team.championships}
                </Text>
              </View>
              
              <View style={styles.statRow}>
                <Text style={styles.statLabelSmall}>ESTREIA</Text>
                <Text style={styles.statValue}>{team.firstSeason}</Text>
              </View>
              
              <View style={styles.statRow}>
                <Text style={styles.statLabelSmall}>BASE</Text>
                <Text style={styles.statValue}>{team.base.split(',')[0]}</Text>
              </View>
            </View>

            {/* Drivers */}
            <View style={styles.driversSection}>
              <Text style={styles.sectionTitle}>PILOTOS</Text>
              <View style={styles.driversList}>
                {team.drivers.map((driver, idx) => (
                  <View key={idx} style={styles.driverItem}>
                    <View style={[styles.driverBullet, { backgroundColor: team.color }]} />
                    <Text style={styles.driverName}>{driver}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Team Leadership */}
            <View style={styles.leadershipSection}>
              <View style={styles.leaderItem}>
                <Text style={styles.leaderLabel}>CHEFE DA EQUIPE</Text>
                <Text style={styles.leaderName}>{team.teamChief}</Text>
              </View>
              <View style={styles.leaderItem}>
                <Text style={styles.leaderLabel}>CHEFE TÉCNICO</Text>
                <Text style={styles.leaderName}>{team.technicalChief}</Text>
              </View>
            </View>

            {/* Team Color Bar */}
            <View style={[styles.colorBar, { backgroundColor: team.color }]} />
          </View>
        ))}
      </View>

      {/* Legend */}
      <View style={styles.legend}>
        <Text style={styles.legendTitle}>LEGENDA</Text>
        <View style={styles.legendItems}>
          {teams.slice(0, 5).map(team => (
            <View key={team.id} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: team.color }]} />
              <Text style={styles.legendText}>{team.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.legendItems}>
          {teams.slice(5).map(team => (
            <View key={team.id} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: team.color }]} />
              <Text style={styles.legendText}>{team.name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          FÓRMULA 1 WORLD CHAMPIONSHIP 2025
        </Text>
        <Text style={styles.footerSubtext}>
          DADOS ATUALIZADOS PARA A TEMPORADA 2025
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    backgroundColor: '#E10600',
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 20,
    shadowColor: '#E10600',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  headerContent: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.85)',
    letterSpacing: 1.5,
    fontWeight: '600',
  },
  statsOverview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  statBox: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  statNumber: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.8)',
    letterSpacing: 1.2,
    fontWeight: '600',
  },
  teamsGrid: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  teamCard: {
    backgroundColor: '#111111',
    borderRadius: 16,
    marginBottom: 18,
    padding: 20,
    borderTopWidth: 4,
    borderWidth: 1,
    borderColor: '#222222',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  teamHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  teamLogoContainer: {
    marginRight: 15,
  },
  teamRank: {
    fontSize: 24,
    fontWeight: '900',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  teamTitleContainer: {
    flex: 1,
  },
  teamName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  teamFullName: {
    fontSize: 11,
    color: '#888888',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  teamStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  statRow: {
    alignItems: 'center',
  },
  statLabelSmall: {
    fontSize: 9,
    color: '#888888',
    fontWeight: '600',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  driversSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#888888',
    fontWeight: '700',
    marginBottom: 12,
    letterSpacing: 1,
  },
  driversList: {
    gap: 10,
  },
  driverItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 10,
  },
  driverName: {
    fontSize: 14,
    color: '#CCCCCC',
    fontWeight: '500',
  },
  leadershipSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  leaderItem: {
    flex: 1,
  },
  leaderLabel: {
    fontSize: 9,
    color: '#888888',
    fontWeight: '600',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  leaderName: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  colorBar: {
    height: 3,
    borderRadius: 1.5,
    width: '100%',
  },
  legend: {
    backgroundColor: '#111111',
    marginHorizontal: 15,
    marginBottom: 20,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#222222',
  },
  legendTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E10600',
    marginBottom: 15,
    letterSpacing: 1,
  },
  legendItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    gap: 12,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 8,
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  legendText: {
    fontSize: 10,
    color: '#CCCCCC',
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#222222',
    marginTop: 10,
  },
  footerText: {
    fontSize: 11,
    color: '#666666',
    fontWeight: '600',
    marginBottom: 4,
    letterSpacing: 1,
  },
  footerSubtext: {
    fontSize: 9,
    color: '#444444',
    fontWeight: '400',
    letterSpacing: 0.5,
  },
});