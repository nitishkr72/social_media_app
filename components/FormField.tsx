import { Text, View } from "react-native";
import InputWrapper from "./InputWrapper";

export default function FormField({
  secureField = false,
  label = "",
  placeHolderText = "",
}: {
  secureField?: boolean;
  label?: string;
  placeHolderText?: string;
}) {
  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <Text style={{ fontSize: 12, fontWeight: "600", color: "#454545" }}>
        {label}
      </Text>
      <InputWrapper
        secureText={secureField}
        placeHolderText={placeHolderText}
      />
    </View>
  );
}
