import FormField from "@/components/FormField";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const [disabled, setDisabled] = useState(false);

  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 28,
          paddingVertical: 64,
          backgroundColor: colors.background,
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
          <Text style={{ fontSize: 32, fontWeight: "600" }}>
            Create your account
          </Text>
        </View>
        <View style={{ marginBottom: 35 }}>
          <Text style={{ fontSize: 14, color: "#aaa" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            nemo.
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <FormField placeHolderText="Enter your name" label="Full Name" />
          <FormField placeHolderText="Enter your number" label="Phone Number" />
          <FormField placeHolderText="Email" label="Email" />
          <FormField
            placeHolderText="Password"
            secureField={true}
            label="Password"
          />
        </View>
        <Button
          style={{ borderRadius: 10, marginTop: 44 }}
          mode="contained"
          onPress={() => console.log("Pressed")}
          textColor={colors.onPrimary}
          disabled={disabled}
          buttonColor={disabled ? colors.primary : colors.primary}
        >
          Sign Up
        </Button>
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
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            By registering you agree to{" "}
          </Text>
          <Text
            style={{
              color: "#aaa",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            <Text
              style={{
                color: colors.primary,
                fontWeight: "500",
                fontSize: 12,
              }}
            >
              Terms & conditions{" "}
            </Text>
            and{" "}
            <Text
              style={{
                color: colors.primary,
                fontWeight: "500",
                fontSize: 12,
              }}
            >
              Privacy policy
            </Text>
          </Text>
        </View>
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
            Already have an account?{" "}
            <Link href="/">
              <Text
                style={{
                  color: colors.primary,
                  fontWeight: "600",
                  fontSize: 16,
                }}
              >
                Sign In
              </Text>
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
