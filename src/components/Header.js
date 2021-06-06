import React from "react";
import { Appbar, Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";
const Header = ({ setOpen }) => {
  return (
    <Appbar style={styles.bottom}>
      <Appbar.Action icon="home" onPress={() => setOpen(true)} />
      <Appbar.Content
        title="Buy Now"
        // subtitle="Subtitle"
      />

      <Appbar.Action icon="magnify" />
      <Appbar.Action
        icon="logout"
        onPress={() => console.log("Pressed delete")}
      />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    paddingTop: 20,
    // position: "relative",
    // width: "100%",
  },
});
export default Header;
