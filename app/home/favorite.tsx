import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

type ACTIVITY_TYPE = {
  name: string;
  iconName: string;
};

const activities: ACTIVITY_TYPE[] = [
  {
    name: "Create Post",
    iconName: "document-text-outline",
  },
  {
    name: "Messages",
    iconName: "chatbox-ellipses-outline",
  },
  {
    name: "Saved Post",
    iconName: "bookmarks-outline",
  },
  {
    name: "Applied Jobs",
    iconName: "briefcase-outline",
  },
  {
    name: "Events",
    iconName: "calendar-outline",
  },
  {
    name: "Profile",
    iconName: "person-outline",
  },
];

const recuiter: ACTIVITY_TYPE[] = [
  { name: "Create a Job Post", iconName: "briefcase-outline" },
  { name: "All Job Post", iconName: "trending-up" },
];

export default function Activity() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 15,
            marginTop: 20,
            alignItems: "center",
            gap: 17,
          }}
        >
          <Avatar.Image
            size={60}
            source={require("../../assets/images/man1.png")}
            style={{ backgroundColor: "#f6f1fc" }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: 5,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Anurag Yadav
            </Text>
            <Text style={{ fontSize: 12, color: "#a1a1a1" }}>
              anurag_yadav@gmail.com
            </Text>
          </View>
        </View>

        <ScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: 15,
            }}
          >
            <Text style={{ fontSize: 14 }}>Activites</Text>
            {activities.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      padding: 7,
                    }}
                  >
                    <Ionicons
                      size={22}
                      name={item.iconName}
                      color={"#a1a1a1"}
                    />
                    <Text style={{ fontSize: 18, color: "#454545" }}>
                      {item.name}
                    </Text>
                  </View>
                  <MaterialIcons
                    size={20}
                    name="arrow-forward-ios"
                    color={"#a1a1a1"}
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: 15,
            }}
          >
            <Text style={{ fontSize: 14 }}>Recruiter</Text>
            {recuiter.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    router.push("/jobrecuiter/");
                  }}
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      padding: 7,
                    }}
                  >
                    <Ionicons
                      size={22}
                      name={item.iconName}
                      color={"#a1a1a1"}
                    />
                    <Text style={{ fontSize: 18, color: "#454545" }}>
                      {item.name}
                    </Text>
                  </View>
                  <MaterialIcons
                    size={20}
                    name="arrow-forward-ios"
                    color={"#a1a1a1"}
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
