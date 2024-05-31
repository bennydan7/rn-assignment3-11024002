import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import profile from "./assets/images/profile-image.png";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7E9E8" }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
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
