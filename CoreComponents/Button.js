import { View, Button } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const handlePress = (e) => {
    console.log(e);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 40,
        paddingRight: 40,
      }}
    >
      <Button
        title="Press"
        onPress={(e) => handlePress(e)}
        color="midnightblue"
      />
    </View>
  );
}
