import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Text>This is Demo App...</Text>
      </View>
    </SafeAreaView>
  );
}
