import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import ProfileCard from "../components/ProfileCard";
import FormSection from "../components/FormSection";
import CategoryChip from "../components/CategoryChip";
import { CATEGORIES, COURSES } from "../data/courses";
import { colors } from "../theme/colors";

export default function HomeScreen() {
  const [active, setActive] = useState("Tous");

  const data =
    active === "Tous" ? COURSES : COURSES.filter((c) => c.categorie === active);

  const header = (
    <View>
      <Text style={styles.sectionTitle}>1. Carte de profil</Text>
      <View style={styles.center}>
        <ProfileCard
          name="Ahmed Ben Salah"
          speciality="Développeur Mobile"
          photoUri="https://i.pravatar.cc/200?img=12"
        />
      </View>

      <Text style={styles.sectionTitle}>2. Formulaire interactif</Text>
      <FormSection />

      <Text style={styles.sectionTitle}>3. Catalogue de cours</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      >
        {CATEGORIES.map((cat) => (
          <CategoryChip
            key={cat}
            label={cat}
            active={active === cat}
            onPress={() => setActive(cat)}
          />
        ))}
      </ScrollView>
    </View>
  );

  return (
    <FlatList
      style={styles.page}
      data={data}
      keyExtractor={(item) => item.id}
      keyboardShouldPersistTaps="handled"
      ListHeaderComponent={header}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.titre}>{item.titre}</Text>
          <Text style={styles.cat}>{item.categorie}</Text>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={
        <Text style={styles.empty}>Aucun cours dans cette catégorie.</Text>
      }
      contentContainerStyle={styles.content}
    />
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  content: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 16 : 56,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginTop: 28,
    marginBottom: 14,
    paddingHorizontal: 24,
  },
  center: { alignItems: "center", paddingVertical: 8 },
  categories: { paddingHorizontal: 24, gap: 8, paddingBottom: 12 },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.surface,
  },
  titre: { fontSize: 18, fontWeight: "600", color: colors.text },
  cat: { color: colors.muted, marginTop: 2 },
  separator: { height: 1, backgroundColor: colors.border },
  empty: {
    textAlign: "center",
    marginTop: 24,
    color: colors.muted,
    fontSize: 16,
  },
});
