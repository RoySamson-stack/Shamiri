import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigaton';
import { RouteProp } from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [journals, setJournals] = useState<{ id: string; text: string }[]>([]);
  const [journal, setJournal] = useState('');

  const addJournal = () => {
    setJournals([...journals, { id: journals.length.toString(), text: journal }]);
    setJournal('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journals</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your journal entry"
        value={journal}
        onChangeText={setJournal}
      />
      <Button title="Add Journal" onPress={addJournal} />
      <FlatList
        data={journals}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Journal', { journal: item.text })}>
            <View style={styles.journal}>
              <Text style={styles.journalText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
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
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  journal: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  journalText: {
    fontSize: 18,
  },
});

export default HomeScreen;
