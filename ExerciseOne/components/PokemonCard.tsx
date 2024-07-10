import { View, Text, SafeAreaView, StyleSheet, Platform, Image } from "react-native";

import React from 'react'

interface IPokemonCardProps {
  name: string;
  image: any;
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
}

const getTypeDetails = (type: string) => {
switch (type.toLowerCase()) {
  case "electric":
    return { borderColor: "#FFD700", emoji: "⚡️" };
  case "water":
    return { borderColor: "#6493EA", emoji: "💧" };
  case "fire":
    return { borderColor: "#FF5733", emoji: "🔥" };
  case "grass":
    return { borderColor: "#66CC66", emoji: "🌿" };
  default:
    return { borderColor: "#A0A0A0", emoji: "❓" };
}
};
const PokemonCard = ({name, image, type, hp, moves, weaknesses}: IPokemonCardProps) => {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <SafeAreaView style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <View>
        <Image
          source={image}
          accessibilityLabel={`${name} pokemon`}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.typeContainer}>
        <View style={[styles.badge, {borderColor}]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(', ')}</Text>
      </View>
     <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>Weakness: {weaknesses.join(', ')}</Text>
      </View>
    </SafeAreaView>
  )
}

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
  },
  type: {
    fontSize: 16,
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 12,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: "bold",
  },

});
