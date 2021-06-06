import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import {
  RadioButton,
  Card,
  Title,
  Paragraph,
  Subheading,
  Button,
} from "react-native-paper";

const AddressScreen = () => {
  const [value, setValue] = React.useState("first");
  return (
    <View style={styles.container}>
      <View style={{ flex: 9 }}>
        <FlatList
          data={[1, 2, 3, 4, 6, 5, 7, 8, 9]}
          renderItem={({ item }) => (
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}>
              <View
                style={{
                  // flex: 1,
                  height: 150,
                  // backgroundColor: "blue",
                  marginVertical: 4,
                  marginHorizontal: 5,
                  borderBottomWidth: 2,
                  borderBottomColor: "gray",
                  padding: 6,
                }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 4 }}>
                    <Title>Sanjiv Kumar Pandit </Title>
                  </View>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <RadioButton mode="ios" color="#388e3c" value="first" />
                  </View>
                </View>
                <View style={{ flex: 4, justifyContent: "space-around" }}>
                  <Subheading>
                    J-428 Prem Nager road baljeet nagar sadhipur krishna dairy
                    near dms , new Delhi -110008
                  </Subheading>
                  <Subheading>9540991156</Subheading>
                </View>
              </View>
            </RadioButton.Group>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Button
          icon="plus"
          mode="contained"
          style={{ flex: 1, backgroundColor: "#388e3c" }}
          contentStyle={{ flexDirection: "row-reverse" }}
          labelStyle={{ lineHeight: 40 }}
          onPress={() => console.log("Pressed")}>
          Add New Address
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
  },
});
export default AddressScreen;
