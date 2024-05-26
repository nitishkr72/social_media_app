import FormField from "@/components/FormField";
import { ImageBackground } from "expo-image";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useNavigation, useRouter } from "expo-router";
import moment from "moment";
import { useEffect } from "react";

type CREATE_JOBS_TYPE = {
  title: string;
  experienceReq: string;
  createdDate: string;
};

const jobs: CREATE_JOBS_TYPE[] = [
  {
    title: "Java Developer",
    experienceReq: "3+ Year",
    createdDate: Date.UTC(2024, 1, 31).toString(),
  },
  {
    title: "Staff Software Engineer",
    experienceReq: "13+ Year",
    createdDate: Date.UTC(2024, 1, 31).toString(),
  },
  {
    title: "UI Engineer",
    experienceReq: "1+ Year",
    createdDate: Date.UTC(2024, 1, 12).toString(),
  },
  {
    title: "Data Scientist",
    experienceReq: "3+ Year",
    createdDate: Date.UTC(2024, 2, 12).toString(),
  },
  {
    title: "HR Recuiter",
    experienceReq: "0 Year",
    createdDate: Date.UTC(2024, 3, 4).toString(),
  },
  {
    title: "Receptionist",
    experienceReq: "Entry level",
    createdDate: Date.UTC(2024, 1, 31).toString(),
  },
  {
    title: "Technical Recuiter",
    experienceReq: "5+ Year",
    createdDate: Date.UTC(2024, 1, 31).toString(),
  },
  {
    title: "Accountant",
    experienceReq: "10+ Year",
    createdDate: Date.UTC(2024, 3, 24).toString(),
  },
];

export default function JobsCreate() {
  return (
    <SafeAreaView>
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <View
          style={{
            position: "absolute",
            zIndex: 100,
            width: "100%",
            paddingLeft: 15,
            top: 58,
          }}
        >
          <Text style={{ fontSize: 24, color: "white", fontWeight: "600" }}>
            Create jobs
          </Text>
        </View>
        <View style={{ height: 320, overflow: "hidden" }}>
          <ImageBackground
            source={{
              uri: "https://raw.githubusercontent.com/nitishkr72/social_media_app/15a5b1f36603d784805f240ff0dc1a5c65d6b3f3/assets/images/Frame.svg",
            }}
            style={{ width: "100%", height: 380 }}
          />
        </View>
        <View
          style={{ paddingHorizontal: 15, paddingTop: 15, marginTop: -230 }}
        >
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
            <FormField label="Job Title" placeHolderText="Java Developer" />
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
                <FormField
                  label="Experience Required"
                  placeHolderText="2+ Years"
                />
              </View>
            </View>
            <Button mode="contained" style={{ borderRadius: 12 }} icon={"plus"}>
              Create Job
            </Button>
          </View>
        </View>
        <ScrollView>
          <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>All Jobs</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 10,
              }}
            >
              {jobs.map((item, index) => {
                return (
                  <View key={index}>
                    <JobPost key={index} job={item} />
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function JobPost({ job }: { job: CREATE_JOBS_TYPE }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/jobrecuiter/jobsCreate");
      }}
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
            marginBottom: 6,
          }}
        >
          <Avatar.Image
            size={44}
            source={{
              uri: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/framer-color-icon.png",
            }}
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
              {job.title}
            </Text>
            <Text style={{ color: "#aaa", marginTop: 9 }}>
              {moment(new Date(parseInt(job.createdDate, 10))).fromNow()}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Ionicons size={18} name="create-outline" color={"#a1a1a1"} />
          <Ionicons
            size={20}
            name="ellipsis-vertical-outline"
            color={"#a1a1a1"}
          />
        </View>
      </View>

      {/* <View
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
        </View> */}
      {/* <Text style={{ color: "#999", fontWeight: "400" }}>
          {jobs.salaryCurrency}{" "}
          <Text style={{ color: "#999", fontWeight: "400" }}>
            {jobs.salary}/Year
          </Text>
        </Text> */}
      {/* </View> */}
    </TouchableOpacity>
  );
}
