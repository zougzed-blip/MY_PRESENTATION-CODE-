import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { theme } from '../styles/theme';
import Button from '../components/common/Button';
import Header from '../components/common/Header';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <Header />
      
      {/* Hero Section */}
      <View style={styles.hero}>
        <Image 
          source={require('../../assets/images/heroP.jpg')}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Empowering Domestic Workers & Gardeners</Text>
          <Text style={styles.heroSubtitle}>
            Since 2022, we've been providing skills training programs to help domestic workers 
            and gardeners develop marketable skills and build better futures.
          </Text>
          <Button 
            title="Explore Our Courses"
            onPress={() => navigation.navigate('SixMonthCourses')}
            size="large"
          />
        </View>
      </View>

      {/* Programs Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Our Programs</Text>
          <Text style={styles.sectionSubtitle}>Choose from our comprehensive training programs</Text>
        </View>

        <View style={styles.programsGrid}>
          {/* 6-Month Courses */}
          <View style={styles.programCard}>
            <Image 
              source={require('../../assets/images/compP.jpg')}
              style={styles.programImage}
            />
            <View style={styles.programContent}>
              <Text style={styles.programTitle}>6-Month Courses</Text>
              <Text style={styles.programSubtitle}>Comprehensive Skills Training</Text>
              <Text style={styles.programDescription}>
                Our six-month courses provide in-depth training in specialized areas to help you build a solid foundation for your career.
              </Text>
              <Button 
                title="View Courses"
                onPress={() => navigation.navigate('SixMonthCourses')}
                variant="outline"
                size="small"
              />
            </View>
          </View>

          {/* 6-Week Courses */}
          <View style={styles.programCard}>
            <Image 
              source={require('../../assets/images/focusP.jpg')}
              style={styles.programImage}
            />
            <View style={styles.programContent}>
              <Text style={styles.programTitle}>6-Week Courses</Text>
              <Text style={styles.programSubtitle}>Focused Skills Training</Text>
              <Text style={styles.programDescription}>
                Our six-week courses offer focused training in specific areas to quickly enhance your skills and marketability.
              </Text>
              <Button 
                title="View Courses"
                onPress={() => navigation.navigate('SixWeekCourses')}
                variant="outline"
                size="small"
              />
            </View>
          </View>

          {/* Calculate Fees */}
          <View style={styles.programCard}>
            <Image 
              source={require('../../assets/images/calculate.jpg')}
              style={styles.programImage}
            />
            <View style={styles.programContent}>
              <Text style={styles.programTitle}>Calculate Fees</Text>
              <Text style={styles.programSubtitle}>Get a Quote</Text>
              <Text style={styles.programDescription}>
                Use our fee calculator to get an instant quote for your selected courses, including applicable discounts.
              </Text>
              <Button 
                title="Calculate Now"
                onPress={() => navigation.navigate('CalculateFees')}
                variant="outline"
                size="small"
              />
            </View>
          </View>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <View style={styles.aboutContent}>
          <View style={styles.aboutText}>
            <Text style={styles.aboutTitle}>About Empowering The Nation</Text>
            <Text style={styles.aboutDescription}>
              Empowering The Nation was first established in 2022 and offers courses across Johannesburg. 
              Hundreds and hundreds of domestic workers and gardeners have been trained on both the six-month 
              long learnerships and six-week short skills training programmes to empower themselves and can 
              provide more marketable skills.
            </Text>
            
            <View style={styles.stats}>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>500+</Text>
                <Text style={styles.statLabel}>Trained Individuals</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>7</Text>
                <Text style={styles.statLabel}>Courses Available</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>3</Text>
                <Text style={styles.statLabel}>Johannesburg Locations</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.aboutImage}>
            <Image 
              source={require('../../assets/images/logoW.jpg')}
              style={styles.logoImage}
            />
          </View>
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
  hero: {
    height: 500,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.xl,
  },
  heroTitle: {
    ...theme.typography.h1,
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  heroSubtitle: {
    ...theme.typography.body,
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
    opacity: 0.9,
    lineHeight: 24,
  },
  section: {
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.white,
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    ...theme.typography.h1,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  sectionSubtitle: {
    ...theme.typography.body,
    color: theme.colors.textLight,
    textAlign: 'center',
  },
  programsGrid: {
    gap: theme.spacing.lg,
  },
  programCard: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.md,
    overflow: 'hidden',
  },
  programImage: {
    width: '100%',
    height: 200,
  },
  programContent: {
    padding: theme.spacing.lg,
  },
  programTitle: {
    ...theme.typography.h2,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  programSubtitle: {
    ...theme.typography.body,
    color: theme.colors.textLight,
    marginBottom: theme.spacing.md,
  },
  programDescription: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
    lineHeight: 22,
  },
  aboutSection: {
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.light,
  },
  aboutContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aboutText: {
    flex: 2,
    marginRight: theme.spacing.lg,
  },
  aboutTitle: {
    ...theme.typography.h1,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  },
  aboutDescription: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.xl,
    lineHeight: 22,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    ...theme.typography.h1,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    ...theme.typography.bodySmall,
    color: theme.colors.textLight,
    fontWeight: '500',
  },
  aboutImage: {
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: 120,
    borderRadius: 60,
  },
});

export default HomeScreen;