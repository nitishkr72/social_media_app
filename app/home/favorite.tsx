import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from ".";

export default function Activity() {
  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <Header />
      </View>
    </SafeAreaView>
  );
}
