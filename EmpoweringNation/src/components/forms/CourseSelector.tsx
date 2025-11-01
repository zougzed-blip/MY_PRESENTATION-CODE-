import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Course, SelectedCourse } from '../../types';
import { theme } from '../../styles/theme';

interface CourseSelectorProps {
  courses: Course[];
  selectedCourses: SelectedCourse[];
  onSelectionChange: (courseId: string, selected: boolean) => void;
}

const CourseSelector: React.FC<CourseSelectorProps> = ({
  courses,
  selectedCourses,
  onSelectionChange,
}) => {
  const isSelected = (courseId: string) => {
    return selectedCourses.find(sc => sc.courseId === courseId)?.selected || false;
  };

  const renderCourseGroup = (category: '6-month' | '6-week') => {
    const categoryCourses = courses.filter(course => course.category === category);
    const categoryTitle = category === '6-month' ? '6-Month Courses (R1500 each)' : '6-Week Courses (R750 each)';

    return (
      <View style={styles.courseGroup}>
        <Text style={styles.groupTitle}>{categoryTitle}</Text>
        {categoryCourses.map(course => (
          <TouchableOpacity
            key={course.id}
            style={[
              styles.courseItem,
              isSelected(course.id) && styles.courseItemSelected
            ]}
            onPress={() => onSelectionChange(course.id, !isSelected(course.id))}
          >
            <View style={styles.checkbox}>
              <View style={[
                styles.checkboxInner,
                isSelected(course.id) && styles.checkboxInnerSelected
              ]} />
            </View>
            <View style={styles.courseInfo}>
              <Text style={styles.courseName}>{course.title}</Text>
              <Text style={styles.coursePrice}>R{course.fee}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {renderCourseGroup('6-month')}
      {renderCourseGroup('6-week')}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  courseGroup: {
    marginBottom: theme.spacing.xl,
  },
  groupTitle: {
    ...theme.typography.h3,
    color: theme.colors.primaryDark,
    marginBottom: theme.spacing.md,
    paddingBottom: theme.spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
    backgroundColor: theme.colors.white,
  },
  courseItemSelected: {
    backgroundColor: 'rgba(30, 86, 49, 0.05)',
    borderColor: theme.colors.primary,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: theme.borderRadius.sm,
    marginRight: theme.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 10,
    height: 10,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: 'transparent',
  },
  checkboxInnerSelected: {
    backgroundColor: theme.colors.primary,
  },
  courseInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseName: {
    ...theme.typography.body,
    fontWeight: '500',
  },
  coursePrice: {
    ...theme.typography.body,
    color: theme.colors.primary,
    fontWeight: '600',
  },
});

export default CourseSelector;