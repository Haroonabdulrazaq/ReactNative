import { View, ActivityIndicator, Button } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 40,
      }}
    >
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator size="large" color="midnightblue" animating={false} />
      {/* animating prop can be use to make the Activity indicator visible or not */}
    </View>
  );
}
