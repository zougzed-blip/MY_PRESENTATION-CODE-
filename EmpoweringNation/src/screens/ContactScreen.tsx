import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { contactVenues } from '../data/courses';
import { theme } from '../styles/theme';
import Header from '../components/common/Header';
import Button from '../components/common/Button';

type ContactScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Contact'>;

const ContactScreen = () => {
  const navigation = useNavigation<ContactScreenNavigationProp>();
  const [selectedVenue, setSelectedVenue] = useState(contactVenues[0].id);

  const selectedVenueData = contactVenues.find(venue => venue.id === selectedVenue);

  return (
    <ScrollView style={styles.container}>
      <Header />
      
      {/* Page Header */}
      <View style={styles.pageHeader}>
        <Text style={styles.headerTitle}>Contact Us</Text>
        <Text style={styles.headerSubtitle}>Get in touch with our Johannesburg venues</Text>
      </View>

      {/* Contact Section */}
      <View style={styles.contactSection}>
        <View style={styles.contactContainer}>
          <View style={styles.contactInfo}>
            <View style={styles.contactMethod}>
              <Text style={styles.sectionTitle}>General Inquiries</Text>
              <Text style={styles.contactText}>Phone: +27 11 123 4567</Text>
              <Text style={styles.contactText}>Email: info@empoweringthenation.org.za</Text>
            </View>

            <View style={styles.venueSelector}>
              <Text style={styles.selectorLabel}>Select a Venue</Text>
              <View style={styles.venueButtons}>
                {contactVenues.map(venue => (
                  <Button
                    key={venue.id}
                    title={venue.name.split(' ')[0]} // Show only campus name
                    onPress={() => setSelectedVenue(venue.id)}
                    variant={selectedVenue === venue.id ? 'primary' : 'outline'}
                    size="small"
                    style={styles.venueButton}
                  />
                ))}
              </View>
            </View>

            {selectedVenueData && (
              <View style={styles.venueDetails}>
                <Text style={styles.venueTitle}>{selectedVenueData.name}</Text>
                <Text style={styles.venueText}><Text style={styles.bold}>Address:</Text> {selectedVenueData.address}</Text>
                <Text style={styles.venueText}><Text style={styles.bold}>Phone:</Text> {selectedVenueData.phone}</Text>
                <Text style={styles.venueText}><Text style={styles.bold}>Email:</Text> {selectedVenueData.email}</Text>
                <Text style={styles.venueText}><Text style={styles.bold}>Directions:</Text> {selectedVenueData.directions}</Text>
              </View>
            )}
          </View>

          <View style={styles.contactMap}>
            <View style={styles.mapPlaceholder}>
              <Text style={styles.mapTitle}>Our Locations</Text>
              <Text style={styles.mapSubtitle}>Interactive map showing our three Johannesburg campuses</Text>
              
              <View style={styles.mapVisual}>
                {contactVenues.map((venue, index) => (
                  <View key={venue.id} style={styles.locationMarker}>
                    <View style={[
                      styles.marker,
                      selectedVenue === venue.id && styles.markerSelected
                    ]}>
                      <View style={styles.markerInner} />
                    </View>
                    <Text style={styles.locationName}>{venue.name.split(' ')[0]}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.actions}>
          <Button 
            title="Back to Home"
            onPress={() => navigation.navigate('Home')}
            variant="outline"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  pageHeader: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.xl,
  },
  headerTitle: {
    ...theme.typography.h1,
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  headerSubtitle: {
    ...theme.typography.body,
    color: theme.colors.white,
    textAlign: 'center',
    opacity: 0.9,
  },
  contactSection: {
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.white,
  },
  contactContainer: {
    flexDirection: 'row',
  },
  contactInfo: {
    flex: 1,
    marginRight: theme.spacing.lg,
  },
  contactMethod: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  },
  contactText: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  venueSelector: {
    marginBottom: theme.spacing.xl,
  },
  selectorLabel: {
    ...theme.typography.body,
    fontWeight: '600',
    marginBottom: theme.spacing.md,
  },
  venueButtons: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  venueButton: {
    flex: 1,
  },
  venueDetails: {
    backgroundColor: theme.colors.light,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
  },
  venueTitle: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  },
  venueText: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    lineHeight: 20,
  },
  bold: {
    fontWeight: '600',
  },
  contactMap: {
    flex: 1,
  },
  mapPlaceholder: {
    backgroundColor: theme.colors.light,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    flex: 1,
  },
  mapTitle: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  mapSubtitle: {
    ...theme.typography.body,
    color: theme.colors.textLight,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  mapVisual: {
    backgroundColor: '#e9f5e9',
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  locationMarker: {
    alignItems: 'center',
  },
  marker: {
    width: 20,
    height: 20,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  markerSelected: {
    backgroundColor: theme.colors.secondary,
  },
  markerInner: {
    width: 8,
    height: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
  },
  locationName: {
    ...theme.typography.bodySmall,
    fontWeight: '500',
  },
  actions: {
    alignItems: 'center',
    marginTop: theme.spacing.xl,
  },
});

export default ContactScreen;