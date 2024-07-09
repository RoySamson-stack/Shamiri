import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Alert, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigaton';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Journal'>;
};

const initialJournals = [
  { id: '1', title: 'Travel Journal', tags: ['travel'] },
  { id: '2', title: 'Work Journal', tags: ['work'] },
  { id: '3', title: 'Health Journal', tags: ['health'] },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [journals, setJournals] = useState(initialJournals);

  const handleDelete = (id: string) => {
    Alert.alert(
      'Delete Journal',
      'Are you sure you want to delete this journal?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setJournals(journals.filter(journal => journal.id !== id));
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleEdit = (id: string) => {
    // Navigate to the edit screen and pass the journal ID as a parameter
    navigation.navigate('EditJournal', { journalId: id });
  };

  const renderItem = ({ item }: { item: { id: string, title: string, tags: string[] } }) => (
    <View style={styles.journalItem}>
      <Text style={styles.journalTitle}>{item.title}</Text>
      <View style={styles.tagContainer}>
        {item.tags.map(tag => (
          <Text key={tag} style={styles.tag}>{tag}</Text>
        ))}
      </View>
      <Button title="Edit" onPress={() => handleEdit(item.id)} />
      <Pressable
        style={styles.delete}
        onPress={() => handleDelete(item.id)}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
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
  delete: {
    backgroundColor: 'red',
    padding: 5
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;
