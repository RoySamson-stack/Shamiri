import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Pressable, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigaton';
import { RouteProp } from '@react-navigation/native';
import axios from 'axios'

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

type Props = {
  navigation: SignupScreenNavigationProp;
};

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', {  
        username,
        email,
        password
      });

      console.log('Signup response:', response.data);
      Alert.alert('Signup Successful', 'You have successfully signed up');

      // navigation.navigate('Home');  
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert('Signup Failed', 'An error occurred during signup');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Pressable style={styles.linkPress} onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.link}>Signin</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  linkPress: {
    padding: 10,
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue'
  }
});

export default SignupScreen;
