import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigaton';
import axios from 'axios'

type EditJournalScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EditJournal'>;
type EditJournalScreenRouteProp = RouteProp<RootStackParamList, 'EditJournal'>;

type Props = {
  navigation: EditJournalScreenNavigationProp;
  route: EditJournalScreenRouteProp;
};

const EditJournalScreen: React.FC<Props> = ({ navigation, route }) => {
  const { journalId} = route.params;

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/journals/${journalId}`)
    .then(response=>{
        const {title, tags} = response.data;
        setTitle('Sample Journal Title');
        setTags('sample, tags');
    })
    .catch(error =>{
        console.error('Failed to fetch journal details:', error)
    })
   
  }, [journalId]);

  const handleSave = () => {
    const updatedJournal = {title, tags: tags.split(',').map(tag => tags.trim())}
    axios.put(`http://localhost:5000/journals/${journalId}`, updatedJournal)
    .then(() =>{
        Alert.alert('Success', "JOurnal updated successfully")
        navigation.goBack();
    })
    .catch(error  => {
        console.error('Failed to update journal:' , error)
        Alert.alert('Error', "Failed to update journal")
    })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Journal</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Tags (comma separated)"
        value={tags}
        onChangeText={setTags}
      />
      <Button title="Save" onPress={handleSave} />
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
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default EditJournalScreen;
