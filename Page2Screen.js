import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const Page2Screen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const activities = [
    {
      id: 1,
      title: 'คุณเพิ่ม "Natricha" เข้าร่วมกลุ่มข้อมูล',
      avatar: '👤',
      time: '2 ชั่วโมงที่แล้ว'
    },
    {
      id: 2,
      title: 'คุณลบกลุ่ม "ญี่ปุ่น"',
      avatar: '👤',
      time: '5 ชั่วโมงที่แล้ว'
    },
    {
      id: 3,
      title: 'คุณสร้างกลุ่ม "ญี่ปุ่น"',
      avatar: '👤',
      time: '1 วันที่แล้ว'
    }
  ];

  const bottomTabs = [
    { name: 'หน้าหลัก', icon: '👤', active: false },
    { name: 'กลุ่ม', icon: '👥', active: false },
    { name: 'กิจกรรม', icon: '📋', active: false },
    { name: 'บัญชี', icon: '💰', active: true }
  ];

  // ฟังก์ชันสำหรับนำทางไปหน้า GroupScreen
  const handleAddGroup = () => {
    navigation.navigate('GroupScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>สวัสดี !</Text>
            <Text style={styles.nameText}>Sopitnapa</Text>
          </View>
          <View style={styles.profileIcon}>
            <Text style={styles.profileEmoji}>👤💰</Text>
          </View>
          <TouchableOpacity style={styles.settingsIcon}>
            <Text>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="ค้นหา"
              placeholderTextColor="#999"
              value={searchText}
              onChangeText={setSearchText}
            />
            <Text style={styles.diamondIcon}>💎</Text>
          </View>
        </View>

        {/* Main Card */}
        <View style={styles.mainCard}>
          <View style={styles.cardHeader}>
            <TouchableOpacity 
              style={styles.statusButton}
              onPress={handleAddGroup} // เพิ่ม onPress เพื่อนำทางไปหน้า GroupScreen
            >
              <Text style={styles.statusText}>+ เพิ่มกลุ่ม</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.cardContent}>
            {/* City Image */}
            <View style={styles.cityImageContainer}>
              <View style={styles.cityImagePlaceholder}>
                <Text style={styles.cityImageText}>🏙️</Text>
              </View>
            </View>
            
            {/* User Info */}
            <View style={styles.userInfo}>
              <Text style={styles.userName}>สมาชิก</Text>
              <View style={styles.socialIcons}>
                <TouchableOpacity style={styles.socialIcon}>
                  <Text>👤</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                  <Text>👤</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                  <Text>👤</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                  <Text>👤</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Activity Section */}
        <View style={styles.activitySection}>
          <Text style={styles.activityTitle}>กิจกรรมล่าสุด</Text>
          
          {activities.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <View style={styles.activityAvatar}>
                <Text style={styles.activityAvatarText}>👤</Text>
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>{activity.title}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        {bottomTabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.bottomTab, tab.active && styles.bottomTabActive]}
            onPress={() => console.log(`Navigate to ${tab.name}`)}
          >
            <Text style={styles.bottomTabIcon}>{tab.icon}</Text>
            <Text style={[styles.bottomTabText, tab.active && styles.bottomTabTextActive]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
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
    backgroundColor: '#f0f2f5',
  },
  welcomeText: {
    fontSize: 18,
    color: '#666',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c5aa0',
  },
  profileIcon: {
    position: 'absolute',
    right: 60,
  },
  profileEmoji: {
    fontSize: 24,
  },
  settingsIcon: {
    padding: 5,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e8eaf0',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchIcon: {
    marginRight: 10,
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  diamondIcon: {
    fontSize: 16,
    color: '#4a90e2',
  },
  mainCard: {
    backgroundColor: '#e8f4f8',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  cardHeader: {
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  statusButton: {
    backgroundColor: '#7dd3fc',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  statusText: {
    fontSize: 12,
    color: '#0369a1',
    fontWeight: '500',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityImageContainer: {
    flex: 1,
  },
  cityImagePlaceholder: {
    width: 120,
    height: 80,
    backgroundColor: '#b3e5fc',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityImageText: {
    fontSize: 30,
  },
  userInfo: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
  },
  socialIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  moreButton: {
    padding: 5,
  },
  activitySection: {
    backgroundColor: '#e8f4f8',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 15,
    marginBottom: 100,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  activityAvatar: {
    width: 40,
    height: 40,
    backgroundColor: '#2c5aa0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityAvatarText: {
    color: '#fff',
    fontSize: 18,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  activityTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomTab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  bottomTabActive: {
    backgroundColor: '#e8f4f8',
    borderRadius: 10,
  },
  bottomTabIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  bottomTabText: {
    fontSize: 12,
    color: '#666',
  },
  bottomTabTextActive: {
    color: '#2c5aa0',
    fontWeight: '600',
  },
});

export default Page2Screen;