import * as React from "react";
import { Dimensions, View } from "react-native";
import { Drawer } from "react-native-paper";

const DrawerComponent = () => {
  const [active, setActive] = React.useState("");

  return (
    <View style={{ display: "none" }}>
      <Drawer.Section
        title="Some title"
        style={{
          width: Dimensions.get("screen").width / 2,
          position: "absolute",
          zIndex: 999,
          backgroundColor: "gray",

          height: Dimensions.get("screen").height,
        }}>
        <Drawer.Item
          label="First Item"
          active={active === "first"}
          onPress={() => setActive("first")}
        />
        <Drawer.Item
          label="Second Item"
          active={active === "second"}
          onPress={() => setActive("second")}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerComponent;
