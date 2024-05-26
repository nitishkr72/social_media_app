import { View, Text, ScrollView } from "react-native";

import { useState } from "react";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import MatCommnsIcon from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function SignIn() {
  const [text, setText] = useState("");
  const [secureText, setSecureText] = useState(true);
  const { colors } = useTheme();
  const [disabled, setDisabled] = useState(false);

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          paddingHorizontal: 12,
          paddingTop: 12,
          backgroundColor: "white",
        }}
      >
        <ScrollView>
          <View
            style={{
              borderRadius: 15,
              padding: 20,
              backgroundColor: colors.primary,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 22,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
                Analytics
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "600" }}
                >
                  This week{" "}
                </Text>
                <MatCommnsIcon size={20} name="chevron-down" color={"white"} />
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <SimpleLineIcons
                  size={20}
                  name="user"
                  color={"yellow"}
                  style={{ marginTop: 10 }}
                />
                <View
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <Text
                    style={{ color: "yellow", fontSize: 32, fontWeight: "900" }}
                  >
                    174
                  </Text>
                  <Text
                    style={{ color: "white", fontSize: 12, fontWeight: "500" }}
                  >
                    Profile Views
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 24,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    gap: 8,
                  }}
                >
                  <FontAwesome
                    size={20}
                    name="angle-double-up"
                    color={"yellow"}
                    style={{ marginTop: 5 }}
                  />
                  <View
                    style={{ display: "flex", flexDirection: "column", gap: 8 }}
                  >
                    <Text
                      style={{
                        color: "yellow",
                        fontSize: 32,
                        fontWeight: "900",
                      }}
                    >
                      2.3K
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 12,
                        fontWeight: "500",
                      }}
                    >
                      Impressions
                    </Text>
                  </View>
                </View>
                <FontAwesome6
                  size={20}
                  name="arrow-right-long"
                  color={"white"}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
