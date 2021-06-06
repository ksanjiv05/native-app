import React from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const HomeScreen = () => {
  return (
    // <ScrollView style={{ flex: 1 }}>
    <View
      style={{
        flex: 1,
        marginHorizontal: 3,
        marginTop: 3,
      }}>
      <FlatList
        data={[1, 2, 3, 5, 6, 7, 8, 9, 77, 55, 99]}
        // style={{ }}
        keyExtractor={(item) => item.toString()}
        renderItem={({}) => (
          <View
            style={{
              width: Dimensions.get("screen").width / 2 - 9,
              margin: 2,
              // flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Card style={styles.card}>
              <Card.Cover
                style={styles.cover}
                source={{ uri: "https://picsum.photos/700" }}
              />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  icon="minus"
                  mode="contained"
                  style={styles.button}
                  onPress={() => console.log("Pressed")}></Button>
                <Button
                  mode="contained"
                  style={styles.button}
                  onPress={() => console.log("Pressed")}>
                  1
                </Button>
                <Button
                  icon="plus"
                  mode="contained"
                  style={styles.button}
                  onPress={() => console.log("Pressed")}></Button>
              </Card.Actions>
            </Card>
          </View>
        )}
        numColumns={2}
        ListFooterComponent={() => (
          <View>
            <Text>Copyright buyfreash@2021 </Text>
          </View>
        )}
      />
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0.1)",
    overflow: "hidden",
    width: "100%",
    display: "flex",

    // shadowColor: "gray",
    // shadowRadius: 10,
    // shadowOpacity: 5,
  },
  cover: {
    height: 150,
  },
  button: {
    width: "33%",
    marginLeft: 1,
    borderRadius: 100,
    backgroundColor: "#388e3c",
  },
});
export default HomeScreen;
