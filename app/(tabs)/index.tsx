import FormField from "@/components/FormField";
import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [disabled, setDisabled] = useState(false);

  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 28,
          paddingVertical: 64,
          backgroundColor: "white",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: "600" }}>Welcome Back!</Text>
          <HelloWave />
        </View>
        <View style={{ marginBottom: 35 }}>
          <Text style={{ fontSize: 14, color: "#aaa" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            nemo.
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <FormField placeHolderText="Email" label="Email" />
          <FormField
            placeHolderText="Password"
            secureField={true}
            label="Password"
          />

          <View style={{ display: "flex", alignItems: "flex-end" }}>
            <Text
              style={{ color: colors.primary, fontWeight: "600", fontSize: 16 }}
            >
              Forget password?
            </Text>
          </View>
        </View>
        <Link href={{ pathname: "/home/" }} asChild>
          <Button
            style={{ borderRadius: 10, marginTop: 44 }}
            mode="contained"
            onPress={() => console.log("Pressed")}
            textColor={colors.onPrimary}
            disabled={disabled}
            buttonColor={disabled ? colors.primary : colors.primary}
          >
            Sign In
          </Button>
        </Link>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: "#aaa",
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            Don't have an account?{" "}
            <Link href="/signUp">
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: "600",
                  fontSize: 16,
                }}
              >
                Sign Up
              </Text>
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
