import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function InputWrapper({
  secureText = false,
  placeHolderText = "",
}: {
  secureText: boolean;
  placeHolderText: string;
}) {
  const { colors } = useTheme();

  const [focused, setIsFocused] = useState(false);
  return (
    <TextInput
      style={[styles.input, focused ? styles.foused : styles.blur]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      secureTextEntry={secureText}
      placeholder={placeHolderText}
      placeholderTextColor={"#ccc"}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 15,
    color: "#301ca5",
  },
  foused: {
    borderColor: "#301ca5",
  },
  blur: {
    borderColor: "#aaa",
  },
});
