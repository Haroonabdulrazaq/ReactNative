import { View, Text, StyleSheet } from "react-native";

const MultipleStyles = () => {
  return (
    <View>
      <View>
        <Text style={[styles.box, styles.lightBlueBg, styles.boxShadow]}>
          Light Blue Boxes
        </Text>
      </View>
      <View>
        <Text style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>
          Light Green Boxes
        </Text>
      </View>
    </View>
  );
};

export default MultipleStyles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 40,
  },
  box: {
    width: 250,
    height: 250,
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  boxShadow: {
    shadowColor: "red",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
    shadowColor: "blue",
  },
});
