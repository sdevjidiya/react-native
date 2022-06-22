import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// navigation hook use
// import Setting from "../bottomNavigateScreen/Setting";

export default function Home() {
  const useNavigationHook = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => useNavigationHook.navigate("Settings")}>
        <Text style={{ marginTop: 10, color: "red" }}>Go to settings</Text>
      </TouchableOpacity>
    </View>
  );
}
