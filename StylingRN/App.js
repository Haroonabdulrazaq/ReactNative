import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MultipleStyles from "./MultipleStyles";
import Styleinherit from "./Styleinherit";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Styleinherit />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 40,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
