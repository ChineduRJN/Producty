import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const IntroSlides = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/headphones-icon.png')}
        style={styles.headphonesIcon}
      />
      
      <Image
        source={require('../assets/productivity-illustration.png')}
        style={styles.illustration}
      />

      <Text style={styles.title}>
        Boost Your Productivity,{'\n'}
        Simplify Your Day
      </Text>

      <View style={styles.paginationDots}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
        />
        
        <View style={styles.rememberContainer}>
          <TouchableOpacity style={styles.checkbox}>
            {/* Add checkbox icon here */}
          </TouchableOpacity>
          <Text style={styles.rememberText}>Remember me</Text>
        </View>

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => navigation.navigate('EmailInput')}
        >
          <Text style={styles.loginButtonText}>Login/Signup</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or continue with</Text>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/google-icon.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/facebook-icon.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 32,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000000',
  },
  formContainer: {
    marginTop: 30,
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
  orText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#666666',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});