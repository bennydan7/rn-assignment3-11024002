import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SectionList,
} from "react-native";
import profile from "./assets/images/profile-image.png";
import search from "./assets/icons/search.png";
import filter from "./assets/icons/slider.png";
import learning from "./assets/images/learning.png";
import exercise from "./assets/images/exercise.png";

import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import OngoingTask from "./components/OngoingTask";

const customData = [
  {
    id: 1,
    title: "Exercise",
    tasks: 12,
    categoryImage: exercise,
  },
  {
    id: 2,
    title: "Study",
    tasks: 12,
    categoryImage: exercise,
  },
  {
    id: 3,
    title: "Morning Workout",
    tasks: 12,
    categoryImage: exercise,
  },
  {
    id: 4,
    title: "Study Sessions",
    tasks: 12,
    categoryImage: learning,
  },
  {
    id: 5,
    title: "Chill Time",
    tasks: 8,
    categoryImage: exercise,
  },
  {
    id: 6,
    title: "Nature Walks",
    tasks: 2,
    categoryImage: learning,
  },
  {
    id: 7,
    title: "Bookworm Hours",
    tasks: 5,
    categoryImage: exercise,
  },
  {
    id: 8,
    title: "Swimming Breaks",
    tasks: 1,
    categoryImage: learning,
  },
];

const ONGOING_TASKS = [
  "Mobile App Development",
  "Learning",
  "Complete the assignment",
  "Prepare for the meeting",
  "Finish the report",
  "Send the email",
  "Call the client",
  "Submit the project",
  "Sleeping",
  "Watching TV",
  "Cooking",
  "Cleaning",
  "Shopping",
  "Grocery Shopping",
  "Gardening",
  "House Cleaning",
  "Car Maintenance",
  "Yoga Session",
  "Online Course",
  "Gym Workout",
  "Meditation",
  "Laundry",
  "Homework",
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
          otherStyles={{ marginTop: 28 }}
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
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 7 }}>
            Ongoing Tasks
          </Text>
          <SectionList
            sections={[{ title: "Ongoing Tasks", data: ONGOING_TASKS }]}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <OngoingTask taskName={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
