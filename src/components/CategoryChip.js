import { StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../theme/colors";

export default function CategoryChip({ label, active, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.chip, active && styles.chipActive]}
    >
      <Text style={[styles.text, active && styles.textActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: colors.chip,
  },
  chipActive: { backgroundColor: colors.primary },
  text: { color: colors.text },
  textActive: { color: "#fff", fontWeight: "bold" },
});
