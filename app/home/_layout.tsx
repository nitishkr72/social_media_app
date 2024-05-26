import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";

type TabType = {
  name: string;
  title: string;
  icon: string;
  iconOnFocused: string;
  colorOnFocused?: string;
};

const tabs: TabType[] = [
  {
    name: "index",
    title: "Home",
    iconOnFocused: "home",
    icon: "home-outline",
  },
  {
    name: "job",
    title: "Job",
    iconOnFocused: "briefcase",
    icon: "briefcase-outline",
  },
  {
    name: "search",
    title: "Post",
    iconOnFocused: "compass",
    icon: "compass-outline",
  },

  {
    name: "account",
    title: "Reel",
    iconOnFocused: "film",
    icon: "film-outline",
  },
  {
    name: "favorite",
    title: "Activity",
    iconOnFocused: "apps-sharp",
    icon: "apps-sharp",
  },
];

export default function TabLayout() {
  const { colors } = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
      }}
    >
      {tabs.map((item, index) => {
        return (
          <Tabs.Screen
            key={index}
            name={item.name}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <View style={{ marginTop: 10 }}>
                  <TabBarIcon
                    name={focused ? item.iconOnFocused : item.icon}
                    color={color}
                  />
                </View>
              ),
              tabBarLabel: ({ color, focused }) => {
                return (
                  <View style={{ marginBottom: 12 }}>
                    <Text style={{ color: color, fontSize: 11 }}>
                      {item.title}
                    </Text>
                  </View>
                );
              },
              tabBarStyle: {
                height: 70,
              },
            }}
          />
        );
      })}
    </Tabs>
  );
}
