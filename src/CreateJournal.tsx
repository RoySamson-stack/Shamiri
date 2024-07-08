import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigaton';
import { RouteProp } from '@react-navigation/native';

type CreateJournalScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateJournal'>;

type Props = {
  navigation: CreateJournalScreenNavigationProp;
};

const tags = ['Travel', 'Work', 'Health'];

const CreateJournalScreen: React.FC<Props> = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagPress = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleCreateJournal = () => {
    console.debug(title, selectedTags);
    // Navigate to journal content page with journal ID (e.g., 'newJournalId')
    navigation.navigate('JournalContent', { journalId: 'newJournalId' });
  };

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
