import * as React from "react";
import { StyleSheet, Image, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  List,
} from "react-native-paper";
const ProductListScreen = () => {
  return (
    <Card>
      {/* <Card.Cover
                  style={styles.cover}
                  source={{ uri: "https://picsum.photos/700" }}
                /> */}
      <Card.Content>
        <List.Section>
          <List.Subheader>Some title</List.Subheader>
          <List.Item
            title="First Item"
            left={() => (
              <Image
                style={{ width: 40, height: 40, borderRadius: 5 }}
                source={{ uri: "https://picsum.photos/700" }}
              />
            )}
          />
          <List.Item
            title="First Item"
            left={() => (
              <Image
                style={{ width: 40, height: 40, borderRadius: 5 }}
                source={{ uri: "https://picsum.photos/700" }}
              />
            )}
          />
          <List.Item
            title="First Item"
            left={() => (
              <Image
                style={{ width: 40, height: 40, borderRadius: 5 }}
                source={{ uri: "https://picsum.photos/700" }}
              />
            )}
          />
        </List.Section>
      </Card.Content>
      <Card.Actions>
        <Button
          icon="cart"
          mode="contained"
          style={styles.button}
          onPress={() => console.log("Pressed")}>
          checkout
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => console.log("Pressed")}>
          clear cart
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginRight: 5,
  },
});
export default ProductListScreen;
