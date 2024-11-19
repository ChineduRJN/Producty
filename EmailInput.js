import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

const EmailInput = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <Image
        source={require('../assets/headphones-icon.png')}
        style={styles.headphonesIcon}
      />
      
      <Image
        source={require('../assets/productivity-illustration.png')}
        style={styles.illustration}
      />

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="hello@toluwade.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
        
        <View style={styles.rememberContainer}>
          <TouchableOpacity style={styles.checkbox}>
            {/* Add checkbox icon here */}
          </TouchableOpacity>
          <Text style={styles.rememberText}>Remember me</Text>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login/Signup</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  headphonesIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 24,
    height: 24,
  },
  illustration: {
    width: '100%',
    height: 300,
    marginTop: 60,
    resizeMode: 'contain',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    marginRight: 8,
  },
  rememberText: {
    fontSize: 14,
    color: '#666666',
  },
  loginButton: {
    backgroundColor: '#2F2F2F',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});