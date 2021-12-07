import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  const [pressed, setPressed] = useState(false);
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      {!pressed && <Button title = 'Press me' onPress = {() => {
        setOutputText('It worked!!!')
        setPressed(true)
      }}/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
