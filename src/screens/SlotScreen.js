import React from "react";
import RadioButtonRN from "radio-buttons-react-native";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { Button } from "@ui-kitten/components";

const SlotScreen = () => {
  const [active, setActive] = React.useState({
    btn1: false,
    btn2: false,
  });
  const data = [
    {
      label: "data1",
    },
    {
      label: "data2",
    },
  ];
  return (
    <>
      <View>
        <RadioButtonRN
          data={data}
          style={{
            margin: 9,

            borderColor: "red",
            color: "black",
          }}
          boxStyle={{ color: "black" }}
          activeColor="green"
          boxActiveBgColor="green"
          circleSize={-51}
          textColor="white"
          selectedBtn={(e) => console.log(e)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal={true}
          style={{ flex: 1, backgroundColor: "blue" }}>
          {[1, 2, 3, 5, 6].map((v) => (
            <Button key={v} style={styles.btn} onPress={() => console.log(v)}>
              <View>
                <Text>12</Text>
                <Text>wed</Text>
              </View>
            </Button>
          ))}
        </ScrollView>
        <View style={{ flex: 5 }}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    // width: 60,
    flex: 1,
    // height: 100,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
export default SlotScreen;
