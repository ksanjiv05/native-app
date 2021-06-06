import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import {
  IconButton,
  Subheading,
  Title,
  Paragraph,
  Button,
} from "react-native-paper";

const CartScreen = ({ navigation }) => {
  return (
    <View style={styles.continer}>
      <View style={styles.items}>
        <FlatList
          // ListHeaderComponent={() => (
          //   <View style={{ flex: 1, height: 30, marginLeft: 10 }}>
          //     <Title style={{ color: "gray" }}>Carts</Title>
          //   </View>
          // )}
          data={[1, 2, 3, 6, 4, 5, 7, 8, 9]}
          renderItem={({ item }) => (
            <View
              style={{
                height: 100,
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
                    uri: "https://www.1mg.com/hi/patanjali/wp-content/uploads/2019/02/Potato-health-benefits.jpg",
                  }}
                  style={{ flex: 1, borderRadius: 5, margin: 3 }}
                />
              </View>
              <View
                style={{
                  flex: 1.2,

                  marginHorizontal: 2,
                  alignItems: "baseline",
                  paddingLeft: 5,
                  justifyContent: "center",
                }}>
                <Title style={{ color: "gray" }}>Item</Title>
                <Paragraph numberOfLines={1} style={{ color: "gray" }}>
                  Item 1 tews
                </Paragraph>
              </View>

              <View
                style={{
                  flex: 1.1,

                  marginHorizontal: 2,
                  flexDirection: "row",
                  alignItems: "center",
                }}>
                <IconButton
                  icon="plus"
                  color="white"
                  size={20}
                  style={styles.button}
                  onPress={() => console.log("Pressed")}
                />
                <View
                  style={{
                    width: 21,
                    height: 20,
                  }}>
                  <Text>10</Text>
                </View>
                <IconButton
                  icon="minus"
                  color="white"
                  size={20}
                  style={styles.button}
                  onPress={() => console.log("Pressed")}
                />
              </View>
              <View
                style={{
                  flex: 0.6,

                  marginHorizontal: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Text>{"\u20B9"}2005</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
      <View style={styles.totalValue}>
        <View style={{ flex: 2, flexDirection: "row" }}>
          <View
            style={{
              flex: 2,
              alignItems: "flex-start",
              marginLeft: 5,
              justifyContent: "center",
            }}>
            <Subheading>Subtotal</Subheading>
            <Subheading>Shiping</Subheading>
            <Title>Total</Title>
          </View>
          <View
            style={{
              flex: 1,

              alignItems: "flex-end",
              marginRight: 5,
              justifyContent: "center",
            }}>
            <Subheading>{"\u20B9"}8914</Subheading>
            <Subheading>{"\u20B9"}10</Subheading>
            <Title>{"\u20B9"} 8924</Title>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "blue" }}>
          <Button
            icon="cart"
            mode="contained"
            style={{ flex: 1, backgroundColor: "#388e3c" }}
            contentStyle={{ flexDirection: "row-reverse" }}
            labelStyle={{ lineHeight: 40 }}
            onPress={() => navigation.navigate("Pay")}>
            Place Order
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
    flex: 2,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  button: {
    flex: 1,
    backgroundColor: "#388e3c",
    color: "white",
  },
});
export default CartScreen;
