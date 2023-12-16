import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#63AE00" }}>Box 1 shrink</Box>
      <Box style={{ backgroundColor: "#CCAE22" }}>Box 2 shrink</Box>
      {/* <Box style={{ backgroundColor: "#FFAE54" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#B3AE00" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#AAAE97" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#D2EE00" }}> Box 6</Box>
      <Box style={{ backgroundColor: "#EEBE00" }}> Box 7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    width: 300,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
