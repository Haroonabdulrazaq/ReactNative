import { View, Text, Image, Button, Pressable } from "react-native";
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
      <Button title="Press" color="midnightblue" />
      <Pressable onLongPress={() => console.log("OnLongPress Image")}>
        <Image source={logoImg} style={{ height: 300, width: 300 }} />
      </Pressable>
      <Pressable onPress={() => console.log("Press Text")}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          laudantium modi reiciendis blanditiis. Beatae non, eveniet iste fuga
          alias ex hic suscipit natus eos odio vel voluptas vitae. Dignissimos,
          alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
          unde qui, cumque quisquam veniam porro error natus voluptatum labore
          doloremque rem laudantium accusamus. Nemo perferendis itaque
          recusandae voluptatem facilis unde!
        </Text>
      </Pressable>
    </View>
  );
}
