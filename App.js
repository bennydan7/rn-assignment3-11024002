import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import profile from "./assets/images/profile-image.png";
import search from "./assets/icons/search.png";
import filter from "./assets/icons/slider.png";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories"; // Assuming you have a Category component

const customData = [
  {
    id: 1,
    title: "Morning Workout",
    tasks: 12,
    // categoryImage: images.exercise,
  },
  {
    id: 2,
    title: "Study Sessions",
    tasks: 12,
    // categoryImage: images.learning,
  },
  {
    id: 3,
    title: "Chill Time",
    tasks: 8,
    // categoryImage: images.exercise,
  },
  {
    id: 4,
    title: "Nature Walks",
    tasks: 2,
    // categoryImage: images.learning,
  },
  {
    id: 5,
    title: "Bookworm Hours",
    tasks: 5,
    // categoryImage: images.exercise,
  },
  {
    id: 6,
    title: "Swimming Breaks",
    tasks: 1,
    // categoryImage: images.learning,
  },
];

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7E9E8" }}>
      <View style={{ flex: 1, padding: 24 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 32, fontWeight: "bold" }}>
              Hello, Devs
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              14 tasks today
            </Text>
          </View>
          <View
            style={{ backgroundColor: "#fff", borderRadius: 50, padding: 8 }}
          >
            <Image
              source={profile}
              style={{ width: 56, height: 56, borderRadius: 28 }}
            />
          </View>
        </View>
        <SearchBar
          placeholder="Search"
          searchIcon={search}
          isFilterable={true}
          filterIcon={filter}
          otherStyles={{ marginTop: 28 }} // Use object instead of string for otherStyles
        />
        <View style={{ marginTop: 7 }}>
          <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 7 }}>
            Categories
          </Text>
          <FlatList
            data={customData}
            renderItem={({ item }) => (
              <Categories
                title={item.title}
                taskNumber={item.tasks}
                categoryImage={item.categoryImage}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 16 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
