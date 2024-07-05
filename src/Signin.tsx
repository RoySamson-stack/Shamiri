// SigninScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigaton';
import { RouteProp } from '@react-navigation/native';

type SigninScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signin'>;

type Props = {
  navigation: SigninScreenNavigationProp;
};

const SigninScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {


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
      {/* <Button title="Signp" onPress={() => navigation.navigate('Signup')} /> */}
      <Pressable style={styles.linkPress} onPress={() =>  navigation.navigate('Signup')}>
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
