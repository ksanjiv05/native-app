import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import {
  IconButton,
  Subheading,
  Title,
  Paragraph,
  Button,
  RadioButton,
} from "react-native-paper";

const TimeSloatScreen = () => {
  const [value, setValue] = React.useState(1);
  return (
    <View style={styles.continer}>
      <View style={styles.items}>
        <FlatList
          ListHeaderComponent={() => (
            <View style={{ flex: 1, height: 30, marginLeft: 10 }}>
              <Title style={{ color: "gray" }}>Time Sloats</Title>
            </View>
          )}
          data={[1, 2, 3, 6, 4, 5, 7, 8, 9]}
          renderItem={({ item }) => (
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}>
              <View
                style={{
                  height: 80,
                  // backgroundColor: "gray",
                  borderBottomWidth: 2,
                  borderColor: "gray",
                  marginVertical: 2,
                  marginHorizontal: 4,
                  // borderRadius: 8,
                  flexDirection: "row",
                }}>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 2,
                  }}>
                  <Image
                    source={{
                      uri:
                        "https://preview.pixlr.com/images/800wm/100/1/1001503340.jpg",
                    }}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 5,
                      margin: 3,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 3,

                    marginHorizontal: 2,
                    alignItems: "baseline",
                    paddingLeft: 5,
                    justifyContent: "center",
                  }}>
                  <Title style={{ color: "gray" }}>Monday 25 Mar </Title>
                  <Paragraph numberOfLines={1} style={{ color: "gray" }}>
                    10:00AM-12:00PM
                  </Paragraph>
                </View>

                <View
                  style={{
                    flex: 1,
                    // marginHorizontal: 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <RadioButton.Item
                    mode="ios"
                    style={{ flex: 1, borderRadius: 100 }}
                    value={item}
                  />
                </View>
              </View>
            </RadioButton.Group>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
      <View style={styles.totalValue}>
        <View style={{ flex: 1, backgroundColor: "blue" }}>
          <Button
            icon="cart"
            mode="contained"
            style={{ flex: 1, backgroundColor: "#388e3c" }}
            contentStyle={{ flexDirection: "row-reverse" }}
            labelStyle={{ lineHeight: 40 }}
            onPress={() => console.log("Pressed")}>
            Choose time slot
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
  items: {
    // top: 30,
    flex: 8,
    // backgroundColor: "red",
  },
  totalValue: {
    // flex: 2,
    height: 50,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  button: {
    flex: 1,
    backgroundColor: "#388e3c",
    color: "white",
  },
});
export default TimeSloatScreen;
