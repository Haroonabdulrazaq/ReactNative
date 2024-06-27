import React, { useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet, StatusBar, Text, View, Switch  } from 'react-native';

export default function TabLayout() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle={"dark-content"} backgroundColor={"red"}/> */}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder='First Name'
        secureTextEntry
        keyboardType='default'
        autoCapitalize='sentences'
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        value={message}
        onChangeText={(text) => setMessage(text)}
        multiline
        placeholder='Your message'
      />
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dak Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((previousState)=> !previousState)}
          trackColor={{false: "#767577", true: "lightblue"}}
          thumbColor="cornflowerblue"
        />
      </View>
      <Text>My Name is {name}</Text>
      <Text>My message is {message}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    paddingTop: StatusBar.currentHeight,
    padding: 20,
  },
   input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
    marginVertical: 10
  },
  text: {
    fontSize: 15,
    padding: 10
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  }
});
