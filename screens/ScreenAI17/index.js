import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <View style={styles.buttonContainer}>
        {['Edit Profile', 'Privacy Policy', 'Terms and Conditions', 'Change Password', 'Support/Send Feedback', 'Invite a Friend', 'Delete Account', 'Log Out'].map((buttonText, index) => <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>)}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  profileContainer: {
    alignItems: 'center',
    margin: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#4B9CD3',
    padding: 15,
    margin: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16
  }
});
export default ScreenComponent;