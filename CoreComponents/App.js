import { StyleSheet, View, StatusBar } from "react-native";
import Greet from "./component/Greet";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="plum" />
      <Greet name="Clark Kent" />
      <Greet name="Bruce Wayne" />
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
