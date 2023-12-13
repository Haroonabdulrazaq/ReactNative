import { useState } from "react";
import { View, Modal, Button, Text } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 40,
      }}
    >
      <Button title="Open" onPress={() => setIsOpen(true)} />
      <Modal
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsOpen(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
