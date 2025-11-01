import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Course } from '../../types';
import { theme } from '../../styles/theme';

interface CourseCardProps {
  course: Course;
  onPress: () => void;
  variant?: 'default' | 'compact';
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onPress, variant = 'default' }) => {
  return (
    <TouchableOpacity 
      style={[styles.card, variant === 'compact' && styles.cardCompact]} 
      onPress={onPress}
    >
      <Image source={course.image} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.fee}>R{course.fee}</Text>
        </View>
        <Text style={styles.duration}>{course.duration}</Text>
        <Text style={styles.purpose}>{course.purpose}</Text>
        
        {variant === 'default' && (
          <>
            <View style={styles.highlights}>
              {course.content.slice(0, 3).map((item, index) => (
                <Text key={index} style={styles.highlightItem}>• {item}</Text>
              ))}
            </View>
            <Text style={styles.link}>View Full Details →</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.md,
    marginBottom: theme.spacing.md,
    overflow: 'hidden',
  },
  cardCompact: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: theme.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.xs,
  },
  title: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  fee: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    fontWeight: '700',
  },
  duration: {
    ...theme.typography.bodySmall,
    color: theme.colors.textLight,
    marginBottom: theme.spacing.sm,
  },
  purpose: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
    lineHeight: 20,
  },
  highlights: {
    marginBottom: theme.spacing.md,
  },
  highlightItem: {
    ...theme.typography.bodySmall,
    color: theme.colors.textLight,
    marginBottom: theme.spacing.xs,
  },
  link: {
    ...theme.typography.body,
    color: theme.colors.primary,
    fontWeight: '600',
  },
});

export default CourseCard;