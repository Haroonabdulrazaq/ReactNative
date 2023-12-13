import { View, StatusBar, Button } from "react-native";

import ModalComponent from "./ModalComponent";
import { useState } from "react";

export default function App() {
  const [toggleVisibility, setToggleVisibility] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 40,
      }}
    >
      <StatusBar
        backgroundColor="plum"
        barStyle="red-content"
        hidden={toggleVisibility} //Done: Assignment to toggle visibility of statusbar using a state variable
      />
      <Button
        title="toggle"
        onPress={() => setToggleVisibility(!toggleVisibility)}
      />
    </View>
  );
}
