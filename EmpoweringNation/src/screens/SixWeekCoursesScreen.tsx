import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { coursesData } from '../data/courses';
import { theme } from '../styles/theme';
import CourseCard from '../components/common/CourseCard';
import Button from '../components/common/Button';
import Header from '../components/common/Header';

type CoursesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SixWeekCourses'>;

const SixWeekCoursesScreen = () => {
  const navigation = useNavigation<CoursesScreenNavigationProp>();
  
  const sixWeekCourses = coursesData.filter(course => course.category === '6-week');

  return (
    <ScrollView style={styles.container}>
      <Header />
      
      {/* Page Header */}
      <View style={styles.pageHeader}>
        <Image 
          source={require('../../assets/images/heroP.jpg')}
          style={styles.headerImage}
        />
        <View style={styles.headerOverlay}>
          <Text style={styles.headerTitle}>6-Week Courses</Text>
          <Text style={styles.headerSubtitle}>Focused training programs to quickly enhance your skills</Text>
        </View>
      </View>

      {/* Courses Grid */}
      <View style={styles.coursesSection}>
        <View style={styles.coursesGrid}>
          {sixWeekCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })}
            />
          ))}
        </View>

        <View style={styles.actions}>
          <Button 
            title="Back to Home"
            onPress={() => navigation.navigate('Home')}
            variant="outline"
          />
          <Button 
            title="Calculate Fees"
            onPress={() => navigation.navigate('CalculateFees')}
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
    height: 300,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.xl,
  },
  headerTitle: {
    ...theme.typography.h1,
    color: theme.colors.white,
    marginBottom: theme.spacing.sm,
  },
  headerSubtitle: {
    ...theme.typography.body,
    color: theme.colors.white,
    opacity: 0.9,
    textAlign: 'center',
  },
  coursesSection: {
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.white,
  },
  coursesGrid: {
    gap: theme.spacing.lg,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xl,
    gap: theme.spacing.md,
  },
});

export default SixWeekCoursesScreen;