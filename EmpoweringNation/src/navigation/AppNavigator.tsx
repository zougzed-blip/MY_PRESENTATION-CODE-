import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types';
import { theme } from '../styles/theme';

// Screens
import HomeScreen from '../screens/HomeScreen';
import SixMonthCoursesScreen from '../screens/SixMonthCoursesScreen';
import SixWeekCoursesScreen from '../screens/SixWeekCoursesScreen';
import CalculateFeesScreen from '../screens/CalculateFeesScreen';
import ContactScreen from '../screens/ContactScreen';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'help';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '6-Month Courses') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === '6-Week Courses') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Calculate Fees') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'call' : 'call-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textLight,
        tabBarStyle: {
          backgroundColor: theme.colors.white,
          borderTopWidth: 1,
          borderTopColor: theme.colors.border,
        },
        headerStyle: {
          backgroundColor: theme.colors.white,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 3,
        },
        headerTitleStyle: {
          color: theme.colors.primary,
          fontWeight: '600',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="6-Month Courses" component={SixMonthCoursesScreen} />
      <Tab.Screen name="6-Week Courses" component={SixWeekCoursesScreen} />
      <Tab.Screen name="Calculate Fees" component={CalculateFeesScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={TabNavigator} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CourseDetails" 
          component={CourseDetailsScreen}
          options={{ title: 'Course Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}