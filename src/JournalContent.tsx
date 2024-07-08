import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigaton';
import { RouteProp } from '@react-navigation/native';

type JournalContentScreenNavigationProp = StackNavigationProp<RootStackParamList, 'JournalContent'>;
type JournalContentScreenRouteProp = RouteProp<RootStackParamList, 'JournalContent'>;

type Props = {
  navigation: JournalContentScreenNavigationProp;
  route: JournalContentScreenRouteProp;
};

const JournalContentScreen: React.FC<Props> = ({ route, navigation }) => {
  const { journalId } = route.params;
  const [content, setContent] = useState('');

  const handleSaveContent = () => {
    console.debug(journalId, content);
    // Save content logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal Content</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your journal content here..."
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Save Content" onPress={handleSaveContent} />
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
  input: {
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
});

export default JournalContentScreen;
