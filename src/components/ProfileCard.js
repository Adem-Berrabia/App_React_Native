import { StyleSheet, View, Text, Image, Button, Alert } from "react-native";
import { colors } from "../theme/colors";

export default function ProfileCard({ name, speciality, photoUri }) {
  return (
    <View style={styles.card}>
      <Image style={styles.photo} source={{ uri: photoUri }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.speciality}>{speciality}</Text>
      <Button
        title="Contacter"
        onPress={() => Alert.alert("Contact", `Message envoyé à ${name} !`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    width: 280,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  photo: { width: 120, height: 120, borderRadius: 60, marginBottom: 16 },
  name: { fontSize: 22, fontWeight: "bold", color: colors.text },
  speciality: { fontSize: 16, color: colors.muted, marginBottom: 16 },
});
