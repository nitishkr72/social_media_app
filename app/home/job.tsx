import { View, Text } from "react-native";

import { useTheme } from "react-native-paper";
import { useState } from "react";

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
