import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { coursesData } from '../data/courses';
import { SelectedCourse, FeeCalculation } from '../types';
import { calculateFees } from '../utils/calculations';
import { theme } from '../styles/theme';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import CourseSelector from '../components/forms/CourseSelector';
import FeeCalculator from '../components/forms/FeeCalculator';

type CalculateFeesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CalculateFees'>;

const CalculateFeesScreen = () => {
  const navigation = useNavigation<CalculateFeesScreenNavigationProp>();
  const [selectedCourses, setSelectedCourses] = useState<SelectedCourse[]>([]);
  const [calculation, setCalculation] = useState<FeeCalculation | null>(null);

  const handleSelectionChange = (courseId: string, selected: boolean) => {
    setSelectedCourses(prev => {
      const existing = prev.find(sc => sc.courseId === courseId);
      if (existing) {
        return prev.map(sc => sc.courseId === courseId ? { ...sc, selected } : sc);
      } else {
        return [...prev, { courseId, selected }];
      }
    });
  };

  const handleCalculate = () => {
    const selectedCourseIds = selectedCourses.filter(sc => sc.selected).map(sc => sc.courseId);
    
    if (selectedCourseIds.length === 0) {
      Alert.alert('No Courses Selected', 'Please select at least one course.');
      return;
    }

    const courses = coursesData.filter(course => selectedCourseIds.includes(course.id));
    const result = calculateFees(courses);
    setCalculation(result);
  };

  const getSelectedCourses = () => {
    return selectedCourses.filter(sc => sc.selected).map(sc => 
      coursesData.find(course => course.id === sc.courseId)
    ).filter(Boolean);
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      
      {/* Page Header */}
      <View style={styles.pageHeader}>
        <Text style={styles.headerTitle}>Calculate Course Fees</Text>
        <Text style={styles.headerSubtitle}>Get an instant quote for your selected courses</Text>
      </View>

      {/* Calculator Section */}
      <View style={styles.calculatorSection}>
        <View style={styles.calculatorContainer}>
          <View style={styles.calculatorForm}>
            <Text style={styles.formTitle}>Select Courses</Text>
            
            <CourseSelector
              courses={coursesData}
              selectedCourses={selectedCourses}
              onSelectionChange={handleSelectionChange}
            />
            
            <Button 
              title="Calculate Total"
              onPress={handleCalculate}
              size="large"
              style={styles.calculateButton}
            />
          </View>

          {calculation && (
            <FeeCalculator calculation={calculation} />
          )}
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
  calculatorSection: {
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.white,
  },
  calculatorContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.md,
    overflow: 'hidden',
    marginBottom: theme.spacing.xl,
  },
  calculatorForm: {
    padding: theme.spacing.xl,
  },
  formTitle: {
    ...theme.typography.h2,
    color: theme.colors.primary,
    marginBottom: theme.spacing.lg,
  },
  calculateButton: {
    marginTop: theme.spacing.lg,
  },
  actions: {
    alignItems: 'center',
  },
});

export default CalculateFeesScreen;