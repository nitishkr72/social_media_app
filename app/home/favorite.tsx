import { View, Text, TouchableOpacity } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { Button, TextInput, useTheme } from "react-native-paper";
import { useState } from "react";
import { Link } from "expo-router";

export default function SignIn() {
  const [text, setText] = useState("");
  const [secureText, setSecureText] = useState(true);
  const { colors } = useTheme();
  const [disabled, setDisabled] = useState(false);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
