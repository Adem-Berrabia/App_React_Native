import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { colors } from "../theme/colors";

export default function FormSection() {
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");
  const [erreur, setErreur] = useState(false);
  const [compteur, setCompteur] = useState(0);

  const valider = () => {
    const clean = nom.trim();
    if (clean === "") {
      setErreur(true);
      setMessage("Veuillez saisir votre nom.");
    } else {
      setErreur(false);
      setMessage(`Bienvenue, ${clean} !`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Votre nom"
        value={nom}
        onChangeText={setNom}
      />
      <Button title="Valider" onPress={valider} />

      {message !== "" && (
        <Text style={[styles.message, erreur ? styles.erreur : styles.succes]}>
          {message}
        </Text>
      )}

      <Pressable
        onPress={() => setCompteur((c) => c + 1)}
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
      >
        <Text style={styles.btnText}>Compteur : {compteur}</Text>
      </Pressable>

      <TouchableOpacity style={styles.reset} onPress={() => setCompteur(0)}>
        <Text style={styles.btnText}>Remettre à zéro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24, gap: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: colors.surface,
  },
  message: { fontSize: 16, textAlign: "center" },
  succes: { color: colors.success },
  erreur: { color: colors.danger },
  btn: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  btnPressed: {
    backgroundColor: colors.primaryDark,
    transform: [{ scale: 0.96 }],
  },
  reset: {
    backgroundColor: colors.danger,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
