import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import JournalScreen from './src/JournalScreen';
import Signup from './src/Signup';
import Signin from './src/Signin';
import CreateJournal from "./src/CreateJournal"
import JournalContent from "./src/JournalContent"
import EditJournal from './src/EditJournal';
import { RootStackParamList } from './types/navigaton';
import CreateJournalScreen from './src/CreateJournal';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Home" component={JournalScreen} />
        <Stack.Screen name="CreateJournal" component={CreateJournal}/>
        <Stack.Screen name="EditJournal" component={EditJournal} />
        <Stack.Screen name="JournalContent" component={JournalContent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
