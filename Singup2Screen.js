import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';  // นำเข้าจาก @react-native-picker/picker

const Singup2Screen = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('+66'); // Default to Thailand code
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Text style={styles.closeText}>กลับ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={require('./assets/images/logo.png')} style={styles.logo} />
        </View>

        <Text style={styles.title}>สมัครใช้งาน</Text>

        {/* Username Form */}
        <TextInput
          style={styles.input}
          placeholder="ชื่อผู้ใช้"
        />
        <View style={styles.phoneContainer}>
          {/* Country Code Dropdown */}
          <Picker
            selectedValue={selectedCountryCode}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedCountryCode(itemValue)}
          >
            <Picker.Item label="+66 (Thailand)" value="+66" />
            <Picker.Item label="+1 (USA)" value="+1" />
            <Picker.Item label="+44 (UK)" value="+44" />
            <Picker.Item label="+81 (Japan)" value="+81" />
          </Picker>
          {/* Phone Number Input */}
          <TextInput
            style={styles.input}
            placeholder="หมายเลขโทรศัพท์"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <Text style={styles.validationText}>*ต้องมีตัวอักขระอย่างน้อย 8 ตัว</Text>

        {/* Next Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'rgb(67, 154, 67)' }]}
          onPress={() => navigation.navigate('Singup3Screen')}
        >
          <Text style={styles.buttonText}>ถัดไป</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  appBar: {
    backgroundColor: 'transparent',
    elevation: 0,
    paddingTop: 20,
    paddingLeft: 10,
  },
  closeButton: {
    position: 'absolute',
    left: 0,
  },
  closeText: {
    color: 'black',
    fontSize: 16,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 50,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 15,
    backgroundColor: '#f0f0f0',
    marginBottom: 15,
  },
  phoneContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: 100,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  validationText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#232323',
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Singup2Screen;
