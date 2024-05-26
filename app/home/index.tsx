import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Avatar, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Posts from "@/components/posts";
import Analytics from "@/components/Analytics";
import { Drawer } from "react-native-paper";
import { Link, useRouter } from "expo-router";

export default function SignIn() {
  const [active, setActive] = useState("");

  const router = useRouter();
  return (
    <SafeAreaView>
      <View style={{ width: "100%", backgroundColor: "white" }}>
        <View
          style={{
            height: "100%",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              padding: 12,
              display: "flex",
              flexDirection: "row",
              gap: 12,
            }}
          >
            <Avatar.Image
              size={44}
              source={require("../../assets/images/man1.png")}
              style={{ backgroundColor: "#f6f1fc" }}
            />

            <View
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                paddingHorizontal: 12,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#e5e5e5",
                borderRadius: 15,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1,
                  gap: 8,
                  height: 39,
                }}
              >
                <Feather size={20} name="search" color={"#a1a1a1"} />
                <TextInput
                  style={{
                    flex: 1,
                    height: "100%",
                    fontSize: 15,
                  }}
                />
              </View>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderColor: "#a1a1a1",
                  width: 40,
                }}
              >
                <Feather
                  size={20}
                  name="settings"
                  color={"#a1a1a1"}
                  style={{ marginHorizontal: "auto" }}
                />
              </View>
            </View>
          </View>
          <ScrollView
            style={{
              paddingHorizontal: 12,
              paddingTop: 12,
            }}
          >
            <Analytics />
            <Posts />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
