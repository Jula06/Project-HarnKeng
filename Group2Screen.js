import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';

const Group2Screen = ({ navigation }) => {
  const [selectedTools, setSelectedTools] = useState([]);

  const tools = [
    { id: 1, name: 'ลบกลุ่ม', icon: '✖️', color: '#ff4444' },
    { id: 2, name: 'แก้ไขกลุ่ม', icon: '🔧', color: '#4a90e2' },
    { id: 3, name: 'ออกจากกลุ่ม', icon: '🚪', color: '#ff9500' },
    { id: 4, name: 'ดูรายละเอียด', icon: '🔍', color: '#34c759' },
  ];

  const handleToolPress = (tool) => {
    switch (tool.id) {
      case 1: // ลบกลุ่ม
        Alert.alert(
          'ลบกลุ่ม',
          'คุณต้องการลบกลุ่มนี้หรือไม่?',
          [
            { text: 'ยกเลิก', style: 'cancel' },
            { 
              text: 'ลบ', 
              style: 'destructive',
              onPress: () => {
                Alert.alert('สำเร็จ', 'ลบกลุ่มเรียบร้อยแล้ว');
                navigation.goBack();
              }
            }
          ]
        );
        break;
      case 2: // แก้ไขกลุ่ม
        Alert.alert('แก้ไขกลุ่ม', 'เปิดหน้าแก้ไขกลุ่ม');
        break;
      case 3: // ออกจากกลุ่ม
        Alert.alert(
          'ออกจากกลุ่ม',
          'คุณต้องการออกจากกลุ่มนี้หรือไม่?',
          [
            { text: 'ยกเลิก', style: 'cancel' },
            { 
              text: 'ออกจากกลุ่ม', 
              style: 'destructive',
              onPress: () => {
                Alert.alert('สำเร็จ', 'ออกจากกลุ่มเรียบร้อยแล้ว');
                navigation.goBack();
              }
            }
          ]
        );
        break;
      case 4: // ดูรายละเอียด
        Alert.alert('รายละเอียดกลุ่ม', 'แสดงรายละเอียดของกลุ่ม');
        break;
      default:
        break;
    }
  };

  const handleAddTool = () => {
    Alert.alert(
      'เพิ่มเครื่องมือ',
      'เลือกเครื่องมือที่ต้องการเพิ่ม',
      [
        { text: 'ยกเลิก', style: 'cancel' },
        { text: 'การแจ้งเตือน', onPress: () => console.log('เพิ่มการแจ้งเตือน') },
        { text: 'การตั้งค่า', onPress: () => console.log('เพิ่มการตั้งค่า') },
        { text: 'สถิติกลุ่ม', onPress: () => console.log('เพิ่มสถิติกลุ่ม') },
      ]
    );
  };

  const handleSave = () => {
    Alert.alert(
      'บันทึก',
      'บันทึกการตั้งค่าเรียบร้อยแล้ว',
      [
        {
          text: 'ตกลง',
          onPress: () => navigation.goBack()
        }
      ]
    );
  };

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
        <Text style={styles.headerTitle}>สร้างกลุ่ม</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>แก้ไข</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Camera Section */}
        <View style={styles.cameraSection}>
          <TouchableOpacity 
            style={styles.cameraButton}
            onPress={() => Alert.alert('กล้อง', 'เปิดกล้องเพื่อถ่ายรูปกลุ่ม')}
          >
            <Text style={styles.cameraIcon}>📷</Text>
          </TouchableOpacity>
          <Text style={styles.cameraText}>ถ่ายรูป</Text>
        </View>

        {/* Tools Section */}
        <View style={styles.toolsSection}>
          <Text style={styles.sectionTitle}>เมนูเครื่องมือ</Text>
          
          <View style={styles.toolsGrid}>
            {tools.map((tool) => (
              <TouchableOpacity
                key={tool.id}
                style={[styles.toolItem, { borderColor: tool.color }]}
                onPress={() => handleToolPress(tool)}
              >
                <Text style={[styles.toolIcon, { color: tool.color }]}>
                  {tool.icon}
                </Text>
                <Text style={[styles.toolText, { color: tool.color }]}>
                  {tool.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Add Tool Button */}
          <TouchableOpacity 
            style={styles.addToolButton}
            onPress={handleAddTool}
          >
            <Text style={styles.addToolIcon}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Save Button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>ตกลง</Text>
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
  editButton: {
    padding: 5,
  },
  editText: {
    fontSize: 16,
    color: '#2c5aa0',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  cameraSection: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  cameraButton: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cameraIcon: {
    fontSize: 30,
    color: '#666',
  },
  cameraText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  toolsSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  toolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  toolItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  toolIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  toolText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  addToolButton: {
    width: 60,
    height: 60,
    backgroundColor: '#e8f4f8',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addToolIcon: {
    fontSize: 24,
    color: '#2c5aa0',
    fontWeight: 'bold',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#f0f2f5',
  },
  saveButton: {
    backgroundColor: '#7dd3fc',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  saveButtonText: {
    fontSize: 16,
    color: '#0369a1',
    fontWeight: '600',
  },
});

export default Group2Screen;