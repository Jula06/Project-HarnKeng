import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PageScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backgroundContainer}>
        {/* Background image */}
        <Image
          source={require('./assets/images/p2.png')} // Use p2.png as background
          style={styles.backgroundImage}
        />
        <View style={styles.overlay}></View>

        <View style={styles.innerContainer}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image source={require('./assets/images/logo.png')} style={styles.logo} />
          </View>

          {/* Welcome Text */}
          <Text style={styles.welcomeText}>
            ยินดีต้อนรับ {'\n'} สู่ HarnKeng, {'\n'}
            <Text style={styles.specificText}>Sopitnapa!</Text>
          </Text>

          {/* Image below the welcome text */}
          <Image
            source={require('./assets/images/login.png')}
            style={styles.loginImage}
          />

          {/* Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Page1Screen')}
          >
            <Text style={styles.buttonText}>ถัดไป</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center',
  },
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensure the background image covers the entire screen
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(182, 177, 177, 0.5)', // Overlay with opacity to darken the background
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',
    paddingHorizontal: 30,
    zIndex: 1, // Ensure inner content is above the background
  },
  logoContainer: {
    height: 120,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 60, // Circular logo container
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Reduced space between logo and welcome text
  },
  logo: {
    width: 100, // Reduced size of logo
    height: 100, // Reduced size of logo
    resizeMode: 'cover',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#075395',
    marginBottom: 20, // Reduced space between text and image
  },
  specificText: {
    fontSize: 25, // Slightly reduced font size for better fit
    fontWeight: 'bold',
    color: '#075395',
  },
  loginImage: {
    width: 250, // Adjusted image size
    height: 150, // Adjusted image size
    marginBottom: 30, // Adjusted margin between image and button
  },
  button: {
    width: 180, // Reduced button size
    height: 45, // Adjusted button height
    backgroundColor: '#515351',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 30, // Adjusted space before the button
  },
  buttonText: {
    fontSize: 18, // Reduced button text size
    color: 'white',
  },
});

export default PageScreen;
