import { ImageBackground } from "expo-image";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { Avatar, Button, SegmentedButtons, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";

type CANDIDATE_TYPE = {
  name: string;
  profilePic: number;
  jobProfile: string;
  score: number;
};

const candidates: CANDIDATE_TYPE[] = [
  {
    name: "Aditi Singh",
    profilePic: require("../../assets/images/woman1.png"),
    jobProfile: "Data Engineer",
    score: 843,
  },
  {
    name: "Arvind Praksh",
    profilePic: require("../../assets/images/man1.png"),
    jobProfile: "Software Engineer",
    score: 812,
  },
  {
    name: "Sukanya Deka",
    profilePic: require("../../assets/images/woman2.png"),
    jobProfile: "QA Engineer",
    score: 795,
  },
  {
    name: "Vivek yadav",
    profilePic: require("../../assets/images/man2.png"),
    jobProfile: "Front End Engineer",
    score: 789,
  },
  {
    name: "Adwait Pathak",
    profilePic: require("../../assets/images/man1.png"),
    jobProfile: "Java Developer",
    score: 767,
  },
  {
    name: "Jay Prakash",
    profilePic: require("../../assets/images/man2.png"),
    jobProfile: "Java Developer",
    score: 754,
  },
];

export default function JobRecuiterSingleJob() {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={{ width: "100%", backgroundColor: "white" }}>
        <View
          style={{
            position: "absolute",
            zIndex: 100,
            width: "100%",
            padding: 15,
          }}
        >
          <View
            style={{
              marginTop: 32,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons size={30} name="arrow-back-sharp" color={"white"} />
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
              Java Developer
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 64,
            }}
          >
            <Button
              icon="pencil"
              mode="contained"
              textColor="white"
              style={{ width: 150 }}
              onPress={() => console.log("presses")}
            >
              Edit Job
            </Button>
            <Button icon="delete" textColor="white" style={{ width: 150 }}>
              Delete Job Post
            </Button>
          </View>
        </View>
        <View
          style={{
            height: "100%",
            backgroundColor: "white",
          }}
        >
          <View style={{ height: 320, overflow: "hidden" }}>
            <ImageBackground
              source={{
                uri: "https://raw.githubusercontent.com/nitishkr72/social_media_app/15a5b1f36603d784805f240ff0dc1a5c65d6b3f3/assets/images/Frame.svg",
              }}
              style={{ width: "100%", height: 380 }}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
              marginTop: -120,
              backgroundColor: "white",
              marginHorizontal: 12,
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#e5e5e5",
            }}
          >
            <ImageBackground
              source={{
                uri: "https://raw.githubusercontent.com/nitishkr72/social_media_app/0e1c141f84d0209b5c6bcbaba47b0a65dbd70263/assets/images/CandiateMatches.svg",
              }}
              style={{ width: "100%", height: 270 }}
            />
          </View>
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#454545" }}>
              Profile Matches (34)
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginTop: 6,
              }}
            >
              {candidates.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: 8,
                      }}
                    >
                      <Avatar.Image
                        size={44}
                        source={item.profilePic}
                        style={{ backgroundColor: "#f6f1fc" }}
                      />

                      <View style={{ display: "flex" }}>
                        <Text style={{ fontSize: 16, fontWeight: "500" }}>
                          {item.name}
                        </Text>
                        <Text style={{ color: "#aaa", fontSize: 14 }}>
                          {item.jobProfile}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        marginRight: 20,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <MaterialIcons
                        size={20}
                        name="stacked-line-chart"
                        color={colors.primary}
                      />
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "600",
                          color: colors.primary,
                        }}
                      >
                        {" "}
                        {item.score}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 1,
              width: "100%",
              padding: 15,
            }}
          >
            <Button icon="lock" mode="contained">
              Subscribe to unlock
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
