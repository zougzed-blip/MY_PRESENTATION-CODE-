export interface Course {
  id: string;
  title: string;
  icon: string;
  fee: number;
  duration: string;
  purpose: string;
  content: string[];
  category: '6-month' | '6-week';
  image: any;
}

export interface SelectedCourse {
  courseId: string;
  selected: boolean;
}

export interface FeeCalculation {
  subtotal: number;
  discount: number;
  discountRate: number;
  afterDiscount: number;
  vat: number;
  total: number;
  selectedCourses: Course[];
}

export interface ContactVenue {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  directions: string;
}

export type RootStackParamList = {
  Home: undefined;
  SixMonthCourses: undefined;
  SixWeekCourses: undefined;
  CalculateFees: undefined;
  Contact: undefined;
  CourseDetails: { courseId: string };
};