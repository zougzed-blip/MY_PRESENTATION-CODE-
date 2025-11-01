import { Course, FeeCalculation } from '../types';

export const calculateFees = (selectedCourses: Course[]): FeeCalculation => {
  const subtotal = selectedCourses.reduce((sum, course) => sum + course.fee, 0);
  
  let discountRate = 0;
  if (selectedCourses.length === 2) {
    discountRate = 0.05; // 5%
  } else if (selectedCourses.length === 3) {
    discountRate = 0.10; // 10%
  } else if (selectedCourses.length > 3) {
    discountRate = 0.15; // 15%
  }
  
  const discountAmount = subtotal * discountRate;
  const afterDiscount = subtotal - discountAmount;
  const vatAmount = afterDiscount * 0.15; // 15% VAT
  const total = afterDiscount + vatAmount;
  
  return {
    subtotal,
    discount: discountAmount,
    discountRate,
    afterDiscount,
    vat: vatAmount,
    total,
    selectedCourses
  };
};

export const formatCurrency = (amount: number): string => {
  return `R${amount.toFixed(2)}`;
};