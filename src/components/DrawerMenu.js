import React, { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Animated,
  Text,
  Image,
} from "react-native";
import { Drawer } from "react-native-paper";

// function useOnClickOutside(ref, handler) {
//   useEffect(() => {

//     const listener = (event) => {
//       if (
//         !ref.current ||
//         document
//           .getElementsByClassName("drawerUniqueClass")[0]
//           .contains(event.target)
//       ) {
//         return;
//       }
//       handler(event);
//     };

//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);

//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [ref, handler]);
// }

const DrawerMenu = ({ setOpen, open }) => {
  const [active, setActive] = React.useState("");
  // const initialValue = React.useState(new Animated.Value(0))[0];
  const initialValue = React.useRef(new Animated.Value(0.0)).current;
  // const ref = useRef();
  // useOnClickOutside(ref, () => setOpen(false));

  const drawerAnimationOpen = () => {
    Animated.timing(initialValue, {
      toValue: Dimensions.get("screen").width / 1.3,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const drawerAnimationClose = () => {
    console.log("initia value ", initialValue);
    Animated.timing(initialValue, {
      toValue: 0.0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    setOpen(!open);
  };

  React.useEffect(() => {
    open ? drawerAnimationOpen() : null;
  }, [open]);
  return (
    <Animated.View
      // ref={ref}
      style={[
        styles.container,
        { width: initialValue, display: open ? "flex" : "none" },
      ]}
      className="drawerUniqueClass">
      <Drawer.Section style={styles.draweSec}>
        <Drawer.Item
          label="@ksanjiv0005                   X"
          style={styles.userItem}
          // icon="star"
          icon={{
            uri:
              "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png",
          }}
          // active={active === "first"}
          onPress={() => drawerAnimationClose()}></Drawer.Item>
        <Drawer.Item
          label="dashboard"
          icon="view-dashboard"
          active={active === "dashboard"}
          onPress={() => setActive("dashboard")}
        />
        <Drawer.Item
          label="client"
          icon="account-group"
          active={active === "client"}
          onPress={() => setActive("client")}
        />
        <Drawer.Item
          label="user"
          icon="account"
          active={active === "user"}
          onPress={() => setActive("user")}
        />
        <Drawer.Item
          label="news feed"
          icon="rss"
          active={active === "news feed"}
          onPress={() => setActive("news feed")}
        />
        <Drawer.Item
          label="my profile"
          icon="face"
          active={active === "my profile"}
          onPress={() => setActive("my profile")}
        />
        <Drawer.Item
          label="setting"
          icon="cog"
          active={active === "setting"}
          onPress={() => setActive("setting")}
        />
        <Drawer.Item
          label="logout"
          icon="logout"
          active={active === "logout"}
          onPress={() => setActive("logout")}
        />
        <Drawer.Item
          label="support"
          icon="face-agent"
          active={active === "support"}
          onPress={() => setActive("support")}
        />
      </Drawer.Section>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    // zIndex: 1999,
    height: Dimensions.get("screen").height,
  },
  draweSec: {
    width: "100%",
    top: 80,
    backgroundColor: "transparent",
  },
  userItem: {
    top: -20,
  },
});
export default DrawerMenu;
