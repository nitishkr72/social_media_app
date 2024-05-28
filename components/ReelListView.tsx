import { ImageBackground } from "expo-image";
import { ScrollView, Text, View } from "react-native";
import { Avatar, useTheme } from "react-native-paper";

type REEL_TYPE = {
  createdBy: string;
  image: string;
};

const reels: REEL_TYPE[] = [
  {
    createdBy: "Anurag",
    image:
      "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU",
  },
  {
    createdBy: "Rita",
    image:
      "https://fastly.picsum.photos/id/45/4592/2576.jpg?hmac=Vc7_kMYufvy96FxocZ1Zx6DR1PNsNQXF4XUw1mZ2dlc",
  },
  {
    createdBy: "John",
    image:
      "https://fastly.picsum.photos/id/44/4272/2848.jpg?hmac=a0rRK2VqTNYMvxqfQjFI65m4ZzMGnKRJzHvrJovjoQQ",
  },
  {
    createdBy: "Divya",
    image:
      "https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ",
  },
  {
    createdBy: "Sam",
    image:
      "https://fastly.picsum.photos/id/68/4608/3072.jpg?hmac=0KfOS12jehkc6HbfMXWj3GMFve9kVs82dYsN12Npn2Y",
  },
  {
    createdBy: "Rahul",
    image:
      "https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8",
  },
];

export default function ReelListView() {
  const { colors } = useTheme();

  return (
    <View
      style={{
        width: "100%",
        marginBottom: 25,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Avatar.Image
        size={60}
        source={require("../assets/images/man1.png")}
        style={{ backgroundColor: "#f6f1fc" }}
      />

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          {reels.map((item, index) => {
            return (
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 100,
                  overflow: "hidden",
                  borderColor: "#aaaaaa65",
                  borderStyle: "solid",
                }}
              >
                <ImageBackground
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
