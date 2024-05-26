import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Activity() {
  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>This is Demo App...</Text>
      </View>
    </SafeAreaView>
  );
}
