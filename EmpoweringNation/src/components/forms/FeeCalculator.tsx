import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FeeCalculation } from '../../types';
import { theme } from '../../styles/theme';
import { formatCurrency } from '../../utils/calculations';

interface FeeCalculatorProps {
  calculation: FeeCalculation;
}

const FeeCalculator: React.FC<FeeCalculatorProps> = ({ calculation }) => {
  const { subtotal, discount, discountRate, afterDiscount, vat, total, selectedCourses } = calculation;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Course Fee Quote</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selected Courses:</Text>
        {selectedCourses.map(course => (
          <Text key={course.id} style={styles.courseItem}>
            {course.title} - R{course.fee}
          </Text>
        ))}
      </View>

      <View style={styles.breakdown}>
        <View style={styles.breakdownRow}>
          <Text style={styles.breakdownLabel}>Subtotal:</Text>
          <Text style={styles.breakdownValue}>{formatCurrency(subtotal)}</Text>
        </View>
        
        {discount > 0 && (
          <>
            <View style={[styles.breakdownRow, styles.discountRow]}>
              <Text style={styles.breakdownLabel}>
                Discount ({(discountRate * 100).toFixed(0)}%):
              </Text>
              <Text style={styles.discountValue}>-{formatCurrency(discount)}</Text>
            </View>
            
            <View style={styles.breakdownRow}>
              <Text style={styles.breakdownLabel}>After Discount:</Text>
              <Text style={styles.breakdownValue}>{formatCurrency(afterDiscount)}</Text>
            </View>
          </>
        )}
        
        <View style={styles.breakdownRow}>
          <Text style={styles.breakdownLabel}>VAT (15%):</Text>
          <Text style={styles.breakdownValue}>{formatCurrency(vat)}</Text>
        </View>
        
        <View style={[styles.breakdownRow, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total Amount:</Text>
          <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.success,
  },
  title: {
    ...theme.typography.h3,
    color: theme.colors.success,
    marginBottom: theme.spacing.lg,
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    ...theme.typography.body,
    fontWeight: '600',
    marginBottom: theme.spacing.sm,
  },
  courseItem: {
    ...theme.typography.bodySmall,
    color: theme.colors.text,
    paddingVertical: theme.spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  breakdown: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: theme.spacing.md,
  },
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  discountRow: {
    borderBottomWidth: 0,
  },
  totalRow: {
    borderBottomWidth: 0,
    borderTopWidth: 2,
    borderTopColor: theme.colors.primary,
    marginTop: theme.spacing.sm,
    paddingTop: theme.spacing.md,
  },
  breakdownLabel: {
    ...theme.typography.body,
    color: theme.colors.text,
  },
  breakdownValue: {
    ...theme.typography.body,
    color: theme.colors.text,
    fontWeight: '500',
  },
  discountValue: {
    ...theme.typography.body,
    color: theme.colors.success,
    fontWeight: '500',
  },
  totalLabel: {
    ...theme.typography.h3,
    color: theme.colors.primary,
  },
  totalValue: {
    ...theme.typography.h3,
    color: theme.colors.primary,
    fontWeight: '700',
  },
});

export default FeeCalculator;