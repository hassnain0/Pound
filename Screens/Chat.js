import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chat = () => {
  return (
    <View style={styles.ViewContainer}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    backgroundColor: 'black', // Set the background color to black
  },
});

export default Chat;
