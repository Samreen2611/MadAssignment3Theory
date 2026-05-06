import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// ── Dummy Data ──────────────────────────────────────────
const contacts = [
  { id: '1',  name: 'Sadia',    username: '@sadia',   online: true  },
  { id: '2',  name: 'Saira',      username: '@saira',     online: true  },
  { id: '3',  name: 'Ayeza',   username: '@ayeza',  online: false },
  { id: '4',  name: 'Bisma',   username: '@bisma',  online: false },
  { id: '5',  name: 'Fatima Noor',   username: '@fatimanoor',  online: true  },
  { id: '6',  name: 'Brother',    username: '@hassanali',   online: false },
  { id: '7',  name: 'Mama',          username: '@mama',        online: true  },
  { id: '8',  name: 'Sara Khan',     username: '@sarakhan',    online: false },
  { id: '9',  name: 'Usman Bhai',    username: '@usmanbhai',   online: true  },
  { id: '10', name: 'Zara Ahmed',    username: '@zaraahmed',   online: false },
];

// ── ContactItem Component ───────────────────────────────
function ContactItem({ item }) {
  return (
    <TouchableOpacity style={styles.contactRow}>

      {/* Avatar */}
      <View style={[styles.avatar, { backgroundColor: getColor(item.name) }]}>
        <Text style={styles.avatarLetter}>{item.name[0]}</Text>

        {/* Green dot if online */}
        {item.online && <View style={styles.onlineDot} />}
      </View>

      {/* Name + Username */}
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactUsername}>{item.username}</Text>
      </View>

      {/* Online / Offline label */}
      <Text style={[styles.onlineLabel, !item.online && styles.offlineLabel]}>
        {item.online ? 'online' : 'offline'}
      </Text>

    </TouchableOpacity>
  );
}

function getColor(name) {
  const colors = ['#E91E8C', '#2AABEE', '#8B5CF6', '#F59E0B', '#10B981', '#EF4444'];
  const index  = name.charCodeAt(0) % colors.length;
  return colors[index];
}

// ── Main Screen ─────────────────────────────────────────
export default function ContactsScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back to Chats</Text>
      </TouchableOpacity>

      {/* Online count info */}
      <Text style={styles.infoText}>
        {contacts.filter(c => c.online).length} contacts online
      </Text>

      {/* Contacts List */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactItem item={item} />}
      />

    </View>
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

  infoText: {
    fontSize: 13,
    color: '#2AABEE',
    fontWeight: 'bold',
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#f0f8ff',
  },

  // Each contact row
  contactRow: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },

  // Avatar with online dot
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarLetter: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#22c55e',
    borderWidth: 2,
    borderColor: '#ffffff',
  },

  // Name + username
  contactInfo: {
    flex: 1,
    marginLeft: 12,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111111',
  },
  contactUsername: {
    fontSize: 13,
    color: '#aaaaaa',
    marginTop: 2,
  },

  // Online / Offline label
  onlineLabel: {
    fontSize: 12,
    color: '#22c55e',
    fontWeight: '600',
  },
  offlineLabel: {
    color: '#bbbbbb',
  },
});