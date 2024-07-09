import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import axios from 'axios';

type CreateJournalScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateJournal'>;

type Props = {
  navigation: CreateJournalScreenNavigationProp;
};

const tags = ['Travel', 'Work', 'Health'];

const CreateJournalScreen: React.FC<Props> = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [content, setContent] = useState('');
  const [user_id, setUser_id] = useState<string | null>(null); // Initialize user_id state

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await axios.get('https://aeba-41-80-116-253.ngrok-free.app/user/id');
        const userData = response.data;
        setUser_id(userData.user_id);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };

    fetchUserId();
  }, []);

  const handleCreateJournal = async () => {
    try {
      const response = await axios.post('https://aeba-41-80-116-253.ngrok-free.app/createJournal', {
        user_id,
        title,
        content,
        tags: selectedTags,
      });
      console.log('Journal created:', response.data);
      navigation.navigate('Journal')
    } catch (error) {
      console.error('Failed to create journal:', error);
    }
  };

  if (user_id === null) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Journal</Text>
      <TextInput
        style={styles.input}
        placeholder="Journal Title"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.subtitle}>Tags:</Text>
      <View style={styles.tagsContainer}>
        {tags.map(tag => (
          <Pressable
            key={tag}
            style={[styles.tagButton, selectedTags.includes(tag) && styles.tagButtonSelected]}
            onPress={() => handleTagPress(tag)}
          >
            <Text style={styles.tagButtonText}>{tag}</Text>
          </Pressable>
        ))}
      </View>
      <TextInput
        style={[styles.input, { height: 200 }]}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Create Journal" onPress={handleCreateJournal} />
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
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tagButton: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  tagButtonSelected: {
    backgroundColor: '#007bff',
  },
  tagButtonText: {
    color: '#000',
  },
});

export default CreateJournalScreen;
