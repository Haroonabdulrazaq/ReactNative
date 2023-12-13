import { View, Image, Text, ScrollView } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 40,
        paddingRight: 0,
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        <Image source={logoImg} style={{ height: 300, width: 300 }} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          laudantium modi reiciendis blanditiis. Beatae non, eveniet iste fuga
          alias ex hic suscipit natus eos odio vel voluptas vitae. Dignissimos,
          alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
          unde qui, cumque quisquam veniam porro error natus voluptatum labore
          doloremque rem laudantium accusamus. Nemo perferendis itaque
          recusandae voluptatem facilis unde!
        </Text>
        <Image source={logoImg} style={{ height: 300, width: 300 }} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          laudantium modi reiciendis blanditiis. Beatae non, eveniet iste fuga
          alias ex hic suscipit natus eos odio vel voluptas vitae. Dignissimos,
          alias. Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
          unde qui, cumque quisquam veniam porro error natus voluptatum labore
          doloremque rem laudantium accusamus. Nemo perferendis itaque
          recusandae voluptatem facilis unde!
        </Text>
      </ScrollView>
    </View>
  );
}
