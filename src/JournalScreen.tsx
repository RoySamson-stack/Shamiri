import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigaton';

type JournalScreenRouteProp = RouteProp<RootStackParamList, 'Journal'>;

type Props = {
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
    padding: 20,
    justifyContent: 'center',
  },
  journalText: {
    fontSize: 18,
  },
});

export default JournalScreen;
