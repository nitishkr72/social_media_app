import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Avatar, Surface, useTheme } from "react-native-paper";
import moment from "moment";
import { Image } from "expo-image";
import Svg, { LinearGradient, Defs, Stop, Rect } from "react-native-svg";

type POST_TYPE = {
  postDesc: string;
  postDate: string;
  postedBy: string;
  isLiked: boolean;
  likeCount: number;
  commentCount: number;
  imageUrls: string[];
  avatarImage?: string;
  postImage: string;
  postImageType: "URI" | "LOCAL_ASSET";
};

const posts: POST_TYPE[] = [
  {
    postDesc:
      "20% of your efforts will deliver 80% of results in your job hunt.\n\nIt is called the Pareto Principle - the famous 80/20 rule.\n\nBut how do you find the golden 20%?\n\nSimply by focusing on high-impact activities\n\nTargeted Research",
    postDate: Date.UTC(2024, 3, 26, 1, 15, 15, 15).toString(),
    postedBy: "Kasaf Noor",
    isLiked: true,
    likeCount: 50,
    commentCount: 29,
    imageUrls: [],
    avatarImage:
      "https://media.licdn.com/dms/image/D4D03AQFursTOki0L4g/profile-displayphoto-shrink_200_200/0/1712144194949?e=1722470400&v=beta&t=AV1G2qjNZTDk5NsSDiGF0dlb2O6KSV9oDV23K20Cu_A",
    postImageType: "URI",
    postImage:
      "https://media.licdn.com/dms/image/D4D22AQFsjF_W9_Bd4Q/feedshare-shrink_800/0/1716205505397?e=1719446400&v=beta&t=rhJqLrbWDWJ7s0CUHd2wjMJaj8qArdt4wlyvEEjXxGw",
  },
  {
    postDesc:
      "Looking for more resources to enhances your skills\n\nAs you go through each project, take time to understand the approach used to solve it\n\nThis will not only imporve your proficiency but also deppen your understanding of the subject matter.\n\nHere are the projects that you can follow\n\nhttps://github.com/The-Cool-Coders/Project-Ideas-And-Resources",
    postDate: Date.UTC(2024, 4, 26, 1, 15, 15, 15).toString(),
    postedBy: "Nitish Kumar",
    isLiked: false,
    likeCount: 5,
    commentCount: 13,
    imageUrls: [],
    postImageType: "URI",
    postImage:
      "https://raw.githubusercontent.com/nitishkr72/temporary/main/postImage1.jpg",
  },
];

const Posts = () => {
  const { colors } = useTheme();

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 25,
        marginBottom: 22,
      }}
    >
      {posts.map((item, index) => {
        return (
          <View style={{ borderRadius: 15, overflow: "hidden" }} key={index}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 12,
                paddingHorizontal: 15,
                backgroundColor: "white",
                borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderColor: "#301ca523",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <Avatar.Image
                  size={44}
                  source={
                    item.avatarImage
                      ? { uri: item.avatarImage }
                      : require("../assets/images/man2.png")
                  }
                  style={{ backgroundColor: "#f6f1fc" }}
                />

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 1,
                  }}
                >
                  <Text style={{ color: "1e1e1f" }}>{item.postedBy}</Text>
                  <Text style={{ color: "#878787" }}>
                    {moment(new Date(parseInt(item.postDate, 10))).fromNow()}
                  </Text>
                </View>
              </View>
              <Feather size={20} name="more-vertical" />
            </View>
            <Text
              style={{
                paddingHorizontal: 15,
                paddingTop: 12,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderColor: "#301ca523",
                height: 80,
              }}
            >
              <Text style={{ color: "#898998" }}>{item.postDesc}</Text>
            </Text>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderColor: "#301ca523",
                paddingHorizontal: 15,
                height: 30,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: colors.onSurfaceDisabled,
                }}
              >
                ...Read More
              </Text>
            </TouchableOpacity>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={item.postImage}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                paddingVertical: 12,
                backgroundColor: "white",
                borderColor: "#301ca523",
                borderEndWidth: 1,
                borderBottomWidth: 1,
                borderStartWidth: 1,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
            >
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Ionicons
                  name={item.isLiked ? "heart" : "heart-outline"}
                  size={20}
                  color={"#717171"}
                />
                <Text style={{ color: "#717171" }}>{item.likeCount}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Ionicons
                  size={20}
                  color={"#717171"}
                  name="chatbox-ellipses-outline"
                />
                <Text style={{ color: "#717171" }}>{item.commentCount}</Text>
              </TouchableOpacity>
              <MaterialCommunityIcons
                size={20}
                color={"#717171"}
                name="share-all-outline"
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Posts;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#301ca523",
  },
  image: {
    flex: 1,
    width: "100%",
    height: 390,
    backgroundColor: "#0553",
  },
});
