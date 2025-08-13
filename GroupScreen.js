import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  Linking,
  Share,
} from 'react-native';

const GroupScreen = ({ navigation }) => {
  const [groupId, setGroupId] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  // สร้าง Group ID และ QR Code URL ใหม่ทุกครั้งที่เข้าหน้า
  useEffect(() => {
    generateNewGroup();
  }, []);

  const generateNewGroup = () => {
    // สร้าง random group ID
    const newGroupId = Math.floor(Math.random() * 100000) + 10000;
    const newUrl = `https://harnkeng.app/addfriend?user=${newGroupId}`;
    
    setGroupId(newGroupId.toString());
    setQrCodeUrl(newUrl);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `เข้าร่วมกลุ่มของฉัน: ${qrCodeUrl}`,
        title: 'เชิญเข้าร่วมกลุ่ม',
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const handleOpenLink = () => {
    Linking.openURL(qrCodeUrl).catch(() => {
      Alert.alert('ข้อผิดพลาด', 'ไม่สามารถเปิดลิงค์ได้');
    });
  };

  const handleScanQR = () => {
    // ในอนาคตจะเชื่อมต่อกับ Camera/QR Scanner
    Alert.alert(
      'สแกน QR Code',
      'ฟีเจอร์นี้จะเปิดกล้องเพื่อสแกน QR Code ของกลุ่มอื่น',
      [
        { text: 'ยกเลิก', style: 'cancel' },
        { 
          text: 'เปิดกล้อง', 
          onPress: () => console.log('เปิดกล้องสแกน QR Code') 
        }
      ]
    );
  };

  const QRCodeDisplay = () => (
    <View style={styles.qrContainer}>
      {/* QR Code Placeholder - ในความเป็นจริงจะใช้ library เช่น react-native-qrcode-svg */}
      <View style={styles.qrCodePlaceholder}>
        <View style={styles.qrPattern}>
          <Text style={styles.qrText}>QR</Text>
        </View>
        {/* มุมสี่เหลี่ยมของ QR Code */}
        <View style={[styles.qrCorner, styles.topLeft]} />
        <View style={[styles.qrCorner, styles.topRight]} />
        <View style={[styles.qrCorner, styles.bottomLeft]} />
        <View style={[styles.qrCorner, styles.bottomRight]} />
        
        {/* ไอคอนตัวละครตรงกลาง */}
        <View style={styles.centerIcon}>
          <Text style={styles.characterIcon}></Text>
        </View>
      </View>
      
      <Text style={styles.qrDescription}>
        QR Code สำหรับการเข้ากลุ่ม
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>สมาชิกกลุ่ม</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* QR Code Section */}
        <QRCodeDisplay />

        {/* URL Section */}
        <View style={styles.urlSection}>
          <Text style={styles.urlLabel}>URL :</Text>
          <TouchableOpacity onPress={handleOpenLink}>
            <Text style={styles.urlText}>{qrCodeUrl}</Text>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.shareButton}
            onPress={handleShare}
          >
            <Text style={styles.shareButtonText}>แชร์ลิงค์</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.regenerateButton}
            onPress={generateNewGroup}
          >
            <Text style={styles.regenerateButtonText}>สร้างกลุ่มใหม่</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Scan Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity 
          style={styles.scanButton}
          onPress={handleScanQR}
        >
          <Text style={styles.scanIcon}>📱</Text>
          <Text style={styles.scanButtonText}>สแกนเพื่อเข้าร่วมกลุ่ม</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#e8f4f8',
  },
  backButton: {
    padding: 5,
  },
  backArrow: {
    fontSize: 24,
    color: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  placeholder: {
    width: 34, // เพื่อให้ title อยู่ตรงกลาง
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  qrCodePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  qrPattern: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    // สร้าง pattern QR Code แบบง่าย
    backgroundColor: '#000',
    opacity: 0.1,
  },
  qrText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  qrCorner: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderWidth: 3,
    borderColor: '#000',
  },
  topLeft: {
    top: 10,
    left: 10,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRight: {
    top: 10,
    right: 10,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomLeft: {
    bottom: 10,
    left: 10,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bottomRight: {
    bottom: 10,
    right: 10,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  centerIcon: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 25,
    zIndex: 1,
  },
  characterIcon: {
    fontSize: 20,
  },
  qrDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  urlSection: {
    width: '100%',
    marginBottom: 30,
  },
  urlLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  urlText: {
    fontSize: 14,
    color: '#2c5aa0',
    textDecorationLine: 'underline',
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  shareButton: {
    backgroundColor: '#2c5aa0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  regenerateButton: {
    backgroundColor: '#7dd3fc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  regenerateButtonText: {
    color: '#0369a1',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  scanButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    gap: 10,
  },
  scanIcon: {
    fontSize: 20,
  },
  scanButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
});

export default GroupScreen;