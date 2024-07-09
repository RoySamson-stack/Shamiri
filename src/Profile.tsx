import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Pressable } from 'react-native';
import axios from 'axios';
import { RootStackParamList } from '../types/navigaton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
  user_id: string; // Assuming user_id is always available from props
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, user_id }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangeUsername = async () => {
    try {
      const response = await axios.put(`https://aeba-41-80-116-253.ngrok-free.app/user/${user_id}/username`, {
        username: newUsername,
      });
      console.log('Username updated:', response.data);
      Alert.alert('Username Updated', 'Your username has been updated successfully');
      setNewUsername(''); // Clear input field after update
    } catch (error) {
      console.error('Failed to update username:', error);
      Alert.alert('Update Failed', 'Failed to update username');
    }
  };

  const handleChangePassword = async () => {
    try {
      const response = await axios.put(`https://aeba-41-80-116-253.ngrok-free.app/user/${user_id}/password`, {
        password: newPassword,
      });
      console.log('Password updated:', response.data);
      Alert.alert('Password Updated', 'Your password has been updated successfully');
      setNewPassword(''); // Clear input field after update
    } catch (error) {
      console.error('Failed to update password:', error);
      Alert.alert('Update Failed', 'Failed to update password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <Text style={styles.label}>Change Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="New Username"
        value={newUsername}
        onChangeText={setNewUsername}
      />
      <Button title="Change Username" onPress={handleChangeUsername} />

      <Text style={styles.label}>Change Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <Button title="Change Password" onPress={handleChangePassword} />

      {/* Pressable to navigate to CreateJournal */}
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate('CreateJournal', { user_id })}
      >
        <Text style={styles.link}>Create Journal</Text>
      </Pressable>
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
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  pressable: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  link: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
