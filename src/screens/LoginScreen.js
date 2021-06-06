import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const LoginScreen = () => {
  const [text, setText] = React.useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        bottom: 50,
      }}>
      <View
        style={{
          margin: 6,
        }}>
        <TextInput
          style={{ width: Dimensions.get("screen").width - 12 }}
          label="Mobile Number"
          mode="outlined"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button
          icon="login"
          mode="contained"
          style={{
            width: Dimensions.get("screen").width - 12,
            marginVertical: 5,
            height: 50,
          }}
          labelStyle={{ fontSize: 20 }}
          onPress={() => console.log("Pressed")}>
          Login
        </Button>
      </View>
    </View>
  );
};

StyleSheet;

export default LoginScreen;
