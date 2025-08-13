import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Page1Screen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Background image with overlay */}
      <View style={styles.backgroundContainer}>
        <Image source={require('./assets/images/p2.png')} style={styles.backgroundImage} />
        <View style={styles.overlay}></View>

        <View style={styles.innerContainer}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image source={require('./assets/images/logo.png')} style={styles.logo} />
          </View>

          {/* Welcome text */}
          <Text style={styles.welcomeText}>
            จัด จด จ่าย {'\n'}ทำทั้งหมดจบในที่เดียว{' '}
          </Text>
          <Text style={styles.subText}>
            HarnKeng เก็บประวัติในรูปแบบของ Chat อ่านง่าย สามารถติดตามยอดใช้จ่ายสบาย ไม่ต้องคอยอัพเดตในรายรับ รายจ่ายแยกต่างหาก
          </Text>

          {/* Image below the welcome text */}
          <Image source={require('./assets/images/i.png')} style={styles.image} />

          {/* Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Page2Screen')}
          >
            <Text style={styles.buttonText}>เสร็จ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
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
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(182, 177, 177, 0.5)', // Overlay with opacity
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    zIndex: 1,
  },
  logoContainer: {
    height: 150,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#075395',
    marginBottom: 20,
  },
  subText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#0b0d0f',
    marginBottom: 30,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#515351',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Page1Screen;
