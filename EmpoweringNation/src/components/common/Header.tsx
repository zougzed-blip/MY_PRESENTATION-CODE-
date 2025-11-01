import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../assets/images/logoW.jpg')} 
          style={styles.logo}
        />
        <View style={styles.logoText}>
          <Text style={styles.logoLine1}>EMPOWERING THE</Text>
          <Text style={styles.logoLine2}>NATION</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.md,
    ...theme.shadows.md,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 40,
    borderRadius: 20,
    marginRight: theme.spacing.sm,
  },
  logoText: {
    flexDirection: 'column',
  },
  logoLine1: {
    fontSize: 12,
    color: theme.colors.textLight,
    fontWeight: '500',
  },
  logoLine2: {
    fontSize: 18,
    color: theme.colors.primary,
    fontWeight: '700',
  },
});

export default Header;