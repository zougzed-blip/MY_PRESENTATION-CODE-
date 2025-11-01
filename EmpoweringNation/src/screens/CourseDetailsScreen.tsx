import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { coursesData } from '../data/courses';
import { theme } from '../styles/theme';
import Button from '../components/common/Button';
import Header from '../components/common/Header';

type CourseDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CourseDetails'>;
type CourseDetailsScreenRouteProp = RouteProp<RootStackParamList, 'CourseDetails'>;

const CourseDetailsScreen = () => {
  const navigation = useNavigation<CourseDetailsScreenNavigationProp>();
  const route = useRoute<CourseDetailsScreenRouteProp>();
  const { courseId } = route.params;

  const course = coursesData.find(c => c.id === courseId);

  if (!course) {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Course Not Found</Text>
          <Text style={styles.errorText}>The requested course could not be found.</Text>
          <Button 
            title="Back to Home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }

  const backLink = course.category === '6-month' ? 'SixMonthCourses' : 'SixWeekCourses';

  return (
    <ScrollView style={styles.container}>
      <Header />
      
      <View style={styles.courseDetail}>
        {/* Course Header */}
        <View style={styles.courseHeader}>
          <Text style={styles.courseIcon}>{course.icon}</Text>
          <View style={styles.courseHeaderInfo}>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <View style={styles.courseMeta}>
              <Text style={styles.courseDuration}>{course.duration}</Text>
              <Text style={styles.courseFee}>R{course.fee}</Text>
            </View>
          </View>
        </View>

        {/* Course Content */}
        <View style={styles.courseContent}>
          <View style={styles.detailSection}>
            <Text style={styles.sectionTitle}>Course Purpose</Text>
            <Text style={styles.sectionText}>{course.purpose}</Text>
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.sectionTitle}>Course Content</Text>
            <View style={styles.contentList}>
              {course.content.map((item, index) => (
                <View key={index} style={styles.contentItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.contentText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.actions}>
            <Button 
              title="← Back to Courses"
              onPress={() => navigation.navigate(backLink)}
              variant="outline"
            />
            <Button 
              title="Add to Fee Calculation"
              onPress={() => navigation.navigate('CalculateFees')}
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
  courseDetail: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    margin: theme.spacing.lg,
    ...theme.shadows.md,
    overflow: 'hidden',
  },
  courseHeader: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseIcon: {
    fontSize: 48,
    marginRight: theme.spacing.lg,
  },
  courseHeaderInfo: {
    flex: 1,
  },
  courseTitle: {
    ...theme.typography.h1,
    color: theme.colors.white,
    marginBottom: theme.spacing.sm,
  },
  courseMeta: {
    flexDirection: 'row',
    gap: theme.spacing.lg,
  },
  courseDuration: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: theme.colors.white,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: 20,
    fontWeight: '600',
  },
  courseFee: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: theme.colors.white,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: 20,
    fontWeight: '600',
  },
  courseContent: {
    padding: theme.spacing.xl,
  },
  detailSection: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    ...theme.typography.h2,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.border,
  },
  sectionText: {
    ...theme.typography.body,
    color: theme.colors.text,
    lineHeight: 24,
  },
  contentList: {
    marginTop: theme.spacing.sm,
  },
  contentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  bullet: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginRight: theme.spacing.sm,
    fontSize: 16,
  },
  contentText: {
    ...theme.typography.body,
    color: theme.colors.text,
    flex: 1,
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.xl,
  },
  errorTitle: {
    ...theme.typography.h1,
    color: theme.colors.error,
    marginBottom: theme.spacing.md,
  },
  errorText: {
    ...theme.typography.body,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
});

export default CourseDetailsScreen;