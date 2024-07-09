import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigaton';
import axios from 'axios';

type SigninScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signin'>;

type Props = {
  navigation: SigninScreenNavigationProp;
};

const SigninScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    try {
      const response = await axios.post('https://aeba-41-80-116-253.ngrok-free.app/signin', {
        email,
        password
      });

      console.log('Signin response:', response.data);
      Alert.alert('Signin Successful', 'You have successfully signed in');
      const {user_id} = response.data;

      navigation.navigate('Profile', {user_id});
    } catch (error) {
      console.error('Signin failure:', error);
      Alert.alert('Signin Failed', 'Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
      <Button title="Sign In" onPress={handleSignin} />
      <Pressable style={styles.linkPress} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.link}>Signup</Text>
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
    color: 'blue',
  }
});

export default SigninScreen;
