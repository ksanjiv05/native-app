import * as React from "react";
import { Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TimeSloatScreen from "./screens/TimeSloatScreen";
import CourosoleHomeScreen from "./screens/CourosoleHomeScreen";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TavNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-variant" : "home-variant-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "account-cog" : "account-cog-outline";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={24}
              color="#e1e8e0d1"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#e1e8e0d1",
        inactiveTintColor: "#e1e8e0d1",
        style: { backgroundColor: "#388e3c" },
        activeBackgroundColor: "#4c944f",
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={CourosoleHomeScreen} />
    </Tab.Navigator>
  );
}
