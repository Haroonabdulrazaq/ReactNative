import { Button, StyleSheet, View, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Alert 1" onPress={() => Alert.alert("Invalid date")} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid date", "DOB is invalid")}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Options", "Click on your preffered option", [
            {
              text: "Detail",
              onPress: () => console.log("Detail Pressed"),
            },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            },
          ])
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 40,
  },
});
