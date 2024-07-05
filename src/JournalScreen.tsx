import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigaton';
import { RouteProp } from '@react-navigation/native';

type JournalScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Journal'>;
type JournalScreenRouteProp = RouteProp<RootStackParamList, 'Journal'>;

type Props = {
  navigation: JournalScreenNavigationProp;
  route: JournalScreenRouteProp;
};

const JournalScreen: React.FC<Props> = ({ route }) => {
  const { journal } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.journalText}>{journal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  journalText: {
    fontSize: 18,
  },
});

export default JournalScreen;
