import { ImageBackground } from "expo-image";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function JobRecuiter() {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={{
            uri: "https://raw.githubusercontent.com/nitishkr72/social_media_app/15a5b1f36603d784805f240ff0dc1a5c65d6b3f3/assets/images/Frame.svg",
          }}
          style={{ width: "100%", height: 380 }}
        />
      </View>
    </SafeAreaView>
  );
}
