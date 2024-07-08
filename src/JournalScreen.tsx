import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigaton';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const journals = [
  { id: '1', title: 'Travel Journal', tags: ['travel'] },
  { id: '2', title: 'Work Journal', tags: ['work'] },
  { id: '3', title: 'Health Journal', tags: ['health'] },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const renderItem = ({ item }: { item: { title: string, tags: string[] } }) => (
    <View style={styles.journalItem}>
      <Text style={styles.journalTitle}>{item.title}</Text>
      <View style={styles.tagContainer}>
        {item.tags.map(tag => (
          <Text key={tag} style={styles.tag}>{tag}</Text>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journals</Text>
      <Pressable
        style={styles.createButton}
        onPress={() => navigation.navigate('CreateJournal')}
      >
        <Text style={styles.createButtonText}>Create New Journal</Text>
      </Pressable>
      <FlatList
        data={journals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: '#007bff',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  createButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  journalItem: {
    flexDirection: 'row',
    alignItems: 'center', 
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    display: 'flex',
    justifyContent: 'space-between', 
  },
  journalTitle: {
    fontSize: 18,
    flex: 1,
  },
  tagContainer: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
});

export default HomeScreen;
