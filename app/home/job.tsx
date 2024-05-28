import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { Avatar, Button, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FormField from "@/components/FormField";
import { useRouter } from "expo-router";
import { Header } from ".";

type JOB_TYPE = {
  name: string;
  desc: string;
  postedBy: string;
  postedDate: string;
  salary: string;
  salaryCurrency: string;
  tags: string[];
  type: "Remote" | "Onsite" | "Hybrid";
  companyName: string;
  companyIconUrl: string;
  expReq: string;
  location: string;
  shortDesc?: string;
};

const jobs: JOB_TYPE = {
  name: "Senior Java Developer",
  shortDesc:
    "Experience in building scalable restful, soap backend applications using Java, spring boot and MongoDB.",
  desc: "In your role as an Associate Developer, you will be responsible for the coding, testing, and quality assurance in a cloud-native development team that infuses Business AI and reimagine business processes. You will assess and solve issues in new or existing code, and work with high attention to detail, reliability, and efficiency. You will collaborate closely with your team members to ensure success.",
  postedBy: "Divya Rani",
  postedDate: Date.UTC(2024, 2, 12).toString(),
  salary: "9L",
  salaryCurrency: "₹",
  tags: ["Java", "Remote"],
  type: "Remote",
  companyName: "Framer",
  companyIconUrl:
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/framer-color-icon.png",
  expReq: "2+ years",
  location: "Bengaluru, India",
};

export default function Job() {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView>
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <Header />
        <ScrollView>
          <View
            style={{
              position: "absolute",
              zIndex: 100,
              width: "100%",
              top: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 25,
              }}
            >
              <Text style={{ fontSize: 24, color: "white", fontWeight: "600" }}>
                Explore Jobs
              </Text>
            </View>
          </View>
          <View style={{ height: 320, overflow: "hidden" }}>
            <ImageBackground
              source={{
                uri: "https://raw.githubusercontent.com/nitishkr72/social_media_app/15a5b1f36603d784805f240ff0dc1a5c65d6b3f3/assets/images/Frame.svg",
              }}
              style={{ width: "100%", height: 380 }}
            />
          </View>
          <View style={{ padding: 15, marginTop: -220 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: 20,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#301ca523",
                backgroundColor: "white",
              }}
            >
              <FormField
                label="Keyword"
                placeHolderText="Job, Title and Company"
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  gap: 10,
                }}
              >
                <View style={{ flex: 1 }}>
                  <FormField label="Location" placeHolderText="City etc" />
                </View>
                <View style={{ flex: 1 }}>
                  <FormField label="Distance" placeHolderText="5 Km" />
                </View>
              </View>
              <Button mode="contained" style={{ borderRadius: 12 }}>
                Search
              </Button>
            </View>
          </View>
          <View style={{ padding: 15, display: "flex", gap: 8 }}>
            <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  🔥 Popular Job
                </Text>
                <Text style={{ color: colors.primary }}>See all</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 12,
                  backgroundColor: "#f7f8fb",
                  alignItems: "center",
                  borderRadius: 12,
                }}
              >
                <View
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    Java Developer
                  </Text>
                  <Text style={{ fontSize: 12 }}>128 Jobs available</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 15, color: colors.primary }}>
                    View Jobs
                  </Text>
                  <MaterialCommunityIcons
                    size={20}
                    name="arrow-top-right"
                    color={colors.primary}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  Recommended
                </Text>
                <Text style={{ color: colors.primary }}>See all</Text>
              </View>
              <JobPost showShortDesc={true} />
              <JobPost />
              <JobPost showShortDesc={true} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function JobPost({ showShortDesc = false }: { showShortDesc?: boolean }) {
  return (
    <View
      style={{
        padding: 20,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#301ca523",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            marginBottom: 12,
          }}
        >
          <Avatar.Image
            size={44}
            source={{ uri: jobs.companyIconUrl }}
            style={{ backgroundColor: "#f6f1fc" }}
          />
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text
              style={{
                color: "#454545",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              {jobs.name}
            </Text>
            <Text style={{ color: "#aaa" }}>{jobs.companyName}</Text>
          </View>
        </View>
        <Ionicons size={20} name="bookmarks-outline" color={"#a1a1a1"} />
      </View>

      {jobs.shortDesc && showShortDesc && (
        <Text style={{ fontSize: 11, color: "#aaa" }}>{jobs.shortDesc}</Text>
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 12,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons size={15} name="location-outline" color={"#a1a1a1"} />
          <Text style={{ color: "#999", fontWeight: "400" }}>
            {jobs.location}
          </Text>
        </View>
        <Text style={{ color: "#999", fontWeight: "400" }}>
          {jobs.salaryCurrency}{" "}
          <Text style={{ color: "#999", fontWeight: "400" }}>
            {jobs.salary}/Year
          </Text>
        </Text>
      </View>
    </View>
  );
}
