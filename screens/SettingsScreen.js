import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

// ── Settings Menu Items ─────────────────────────────────
const settingItems = [
  { id: '1', icon: '🔔', label: 'Notifications',     detail: 'Sounds, vibration'    },
  { id: '2', icon: '🔒', label: 'Privacy & Security', detail: 'Password, 2FA'       },
  { id: '3', icon: '💾', label: 'Data & Storage',     detail: 'Auto download media'  },
  { id: '4', icon: '🎨', label: 'Appearance',         detail: 'Theme, font size'     },
  { id: '5', icon: '🌐', label: 'Language',           detail: 'English'              },
  { id: '6', icon: '❓', label: 'Help & Support',     detail: 'FAQ, Contact us'      },
  { id: '7', icon: 'ℹ️', label: 'About',              detail: 'Version 10.0.0'       },
];

// ── SettingRow Component ────────────────────────────────
function SettingRow({ item }) {
  return (
    <TouchableOpacity style={styles.settingRow}>

      {/* Icon Box */}
      <View style={styles.iconBox}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>

      {/* Label + Detail */}
      <View style={styles.settingInfo}>
        <Text style={styles.settingLabel}>{item.label}</Text>
        <Text style={styles.settingDetail}>{item.detail}</Text>
      </View>

      {/* Arrow */}
      <Text style={styles.arrow}>›</Text>

    </TouchableOpacity>
  );
}

// ── Main Screen ─────────────────────────────────────────
export default function SettingsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back to Chats</Text>
      </TouchableOpacity>

      {/* Profile Card at top */}
      <View style={styles.profileCard}>
        <View style={styles.profileAvatar}>
          <Text style={styles.profileAvatarText}>A</Text>
        </View>
        <View>
          <Text style={styles.profileName}>Abdullah Khan</Text>
          <Text style={styles.profileUsername}>@abdullahkhan</Text>
          <Text style={styles.profilePhone}>+92 300 1234567</Text>
        </View>
      </View>

      {/* Settings List */}
      {settingItems.map((item) => (
        <SettingRow key={item.id} item={item} />
      ))}

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>🚪 Log Out</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

// ── Styles ──────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  backButton: {
    backgroundColor: '#2AABEE',
    padding: 12,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Profile card at top
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f8ff',
    marginBottom: 10,
    gap: 14,
  },
  profileAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#2AABEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileAvatarText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111111',
  },
  profileUsername: {
    fontSize: 14,
    color: '#2AABEE',
    marginTop: 2,
  },
  profilePhone: {
    fontSize: 13,
    color: '#888888',
    marginTop: 2,
  },

  // Each settings row
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },

  // Blue icon box
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#e8f4fd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },

  // Label + detail text
  settingInfo: {
    flex: 1,
    marginLeft: 14,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111111',
  },
  settingDetail: {
    fontSize: 13,
    color: '#aaaaaa',
    marginTop: 2,
  },

  // Right arrow
  arrow: {
    fontSize: 22,
    color: '#cccccc',
    fontWeight: '300',
  },

  // Logout button
  logoutButton: {
    margin: 16,
    padding: 14,
    backgroundColor: '#fff0f0',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffcccc',
  },
  logoutText: {
    color: '#e53935',
    fontWeight: 'bold',
    fontSize: 16,
  },
});