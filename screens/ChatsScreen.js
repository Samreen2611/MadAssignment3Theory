import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const chats = [
  { id: '1', name: 'Telegram Notifications', initials: 'TE', avatarColor: '#c97046', message: 'New login. Dear Sam, we detec...', time: '6:23 PM', verified: true },
  { id: '2', name: 'Trio group',         initials: 'TG', avatarColor: '#e91e8c', message: 'Alphr: 📷 Photo',                    time: '5:32 PM' },
  { id: '3', name: 'Samm',                   initials: 'SA', avatarColor: '#e8a020', message: 'last seen at 6:01 PM',              time: '' },
  { id: '4', name: 'Hadia',                   initials: 'HA', avatarColor: '#4db6ac', message: 'last seen at 5:40 PM',              time: '' },
  { id: '5', name: 'Sawira',                  initials: 'SA', avatarColor: '#e05555', message: 'last seen at 7:48 AM',              time: '' },
  { id: '6', name: 'Taimur',           initials: 'TA', avatarColor: '#4db6ac', message: 'last seen at 1:00 AM',              time: '' },
  { id: '7', name: 'Saira',                    initials: 'SA', avatarColor: '#4db6ac', message: 'last seen Jul 26 at 5:00 PM',       time: '' },
  { id: '8', name: 'Ayesha',               initials: 'AY', avatarColor: '#e8a020', message: 'last seen Jul 16 at 11:45 AM',      time: '' },
];

function ChatItem({ item }) {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
        <Text style={styles.avatarText}>{item.initials}</Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{item.name}</Text>
          {item.verified && <Text style={styles.verified}> ✓</Text>}
        </View>
        <Text style={styles.msg} numberOfLines={1}>{item.message}</Text>
      </View>
      {item.time !== '' && <Text style={styles.time}>{item.time}</Text>}
    </TouchableOpacity>
  );
}

export default function ChatsScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* TOP BAR */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Telegram</Text>

        {/* ⚙️ SETTINGS BUTTON — top right */}
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* SECTION LABEL */}
      <View style={styles.sectionLabelContainer}>
        <Text style={styles.sectionLabel}>Your contacts on Telegram</Text>
      </View>

      {/* CHAT LIST */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>✏️</Text>
      </TouchableOpacity>

      {/* ── BOTTOM TAB BAR ── */}
      <View style={styles.tabBar}>

        {/* CHATS TAB — active (we are here) */}
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabIconActive}>💬</Text>
          <Text style={styles.tabLabelActive}>Chats</Text>
        </TouchableOpacity>

        {/* CONTACTS TAB */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate('Contacts')}
        >
          <Text style={styles.tabIcon}>👥</Text>
          <Text style={styles.tabLabel}>Contacts</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // TOP BAR
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a7fa8',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuIcon: {
    color: '#fff',
    fontSize: 22,
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 12,
  },
  settingsIcon: {
    fontSize: 22,
  },

  // SECTION LABEL
  sectionLabelContainer: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  sectionLabel: {
    fontSize: 13,
    color: '#4a7fa8',
    fontWeight: '500',
  },

  // CHAT ROW
  row: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    minHeight: 64,
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginLeft: 74,
  },

  // AVATAR
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },

  // MIDDLE
  middle: {
    flex: 1,
    marginLeft: 12,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111',
  },
  verified: {
    fontSize: 14,
    color: '#4a7fa8',
  },
  msg: {
    fontSize: 13.5,
    color: '#888',
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: '#aaa',
    alignSelf: 'flex-start',
    marginTop: 4,
  },

  // FAB
  fab: {
    position: 'absolute',
    bottom: 70,          // raised above the tab bar
    right: 20,
    backgroundColor: '#2196f3',
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#2196f3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  fabIcon: {
    fontSize: 22,
  },

  // BOTTOM TAB BAR
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
    height: 60,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },

  // active tab (Chats — current screen)
  tabIconActive: {
    fontSize: 20,
  },
  tabLabelActive: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4a7fa8',   // matches header blue = "you are here"
  },

  // inactive tab (Contacts)
  tabIcon: {
    fontSize: 20,
  },
  tabLabel: {
    fontSize: 11,
    color: '#999',
  },
});