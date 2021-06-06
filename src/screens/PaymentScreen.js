// import * as React from "react";
// import { StyleSheet, View, Text, Image, FlatList } from "react-native";
// import {
//   RadioButton,
//   Card,
//   Title,
//   Paragraph,
//   Subheading,
//   Button,
// } from "react-native-paper";

// const PaymentScreen = () => {
//   const [value, setValue] = React.useState("first");
//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 9 }}>
//         <FlatList
//           data={[1, 2, 3, 4, 6, 5, 7, 8, 9]}
//           renderItem={({ item }) => (
//             <RadioButton.Group
//               onValueChange={(newValue) => setValue(newValue)}
//               value={value}>
//               <View
//                 style={{
//                   // flex: 1,
//                   height: 80,
//                   // backgroundColor: "blue",
//                   marginVertical: 4,
//                   marginHorizontal: 5,
//                   borderBottomWidth: 2,
//                   borderBottomColor: "gray",
//                   padding: 6,
//                 }}>
//                 <View style={{ flex: 1, flexDirection: "row" }}>
//                   <View style={{ flex: 1 }}>
//                     <Image
//                       source={{
//                         uri:
//                           "data:image/png;base64,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",
//                       }}
//                       style={{
//                         flex: 1,
//                         borderRadius: 155,
//                         margin: 3,
//                       }}
//                     />
//                   </View>
//                   <View
//                     style={{
//                       flex: 3,
//                       justifyContent: "center",
//                       paddingLeft: 10,
//                     }}>
//                     <Title style={{ color: "gray" }}>Phone Pay</Title>
//                   </View>
//                   <View
//                     style={{
//                       flex: 1,
//                       alignItems: "flex-end",
//                       justifyContent: "center",
//                     }}>
//                     <Button
//                       mode="contained"
//                       style={{ backgroundColor: "#388e3c" }}>
//                       Pay
//                     </Button>
//                     {/* <RadioButton mode="ios" color="#388e3c" value="first" /> */}
//                   </View>
//                 </View>
//               </View>
//             </RadioButton.Group>
//           )}
//           keyExtractor={(item) => item.toString()}
//         />
//       </View>
//       {/* <View style={{ flex: 1 }}>
//         <Button
//           // icon="payment"
//           mode="contained"
//           style={{ flex: 1, backgroundColor: "#388e3c" }}
//           contentStyle={{ flexDirection: "row-reverse" }}
//           labelStyle={{ lineHeight: 40 }}
//           onPress={() => console.log("Pressed")}>
//           Make Payment
//         </Button>
//       </View> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     top: 30,
//   },
// });

// export default PaymentScreen;
import React from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";
import {
  Card,
  Layout,
  Text,
  Icon,
  Tab,
  TabBar,
  TabView,
  Input,
  Button,
  ListItem,
  Divider,
  CheckBox,
} from "@ui-kitten/components";

const PayIcon = (props) => <Icon {...props} name="credit-card-outline" />;
const LinkIcon = (props) => <Icon {...props} name="external-link-outline" />;

const GoIcon = (props) => <Icon {...props} name="arrowhead-right-outline" />;
const GPayIcon = (evprops) => (
  <Image
    source={{
      uri: "https://1000logos.net/wp-content/uploads/2020/04/Google-Pay-Logo.jpg",
    }}
    style={styles.icon}
  />
);
const PPayIcon = (evprops) => (
  <Image
    source={{
      uri: "https://www.searchpng.com/wp-content/uploads/2018/11/phone-pe.png",
    }}
    style={styles.icon}
  />
);
const Header = (props) => (
  <View {...props}>
    <Text category="h6">Payment Details</Text>
  </View>
);
const Footer = (props) => <View {...props}></View>;
const CardImage = (props) => (
  <Image
    {...props}
    style={[styles.icon, { width: 60 }]}
    source={{
      uri: "https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg",
    }}
  />
);
const BankCardUI = () => (
  <>
    <View>
      <ListItem
        title="**** **** **** 8976"
        description="Exp 09/26"
        accessoryLeft={CardImage}
        accessoryRight={GoIcon}
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          borderRadius: 8,
        }}
      />
    </View>
    <View style={{ height: 190 }}>
      <Input
        placeholder="Name of card holder"
        style={styles.inputBox}
        // onChangeText={nextValue => setValue(nextValue)}
      />
      <Input
        placeholder="Card Number"
        style={styles.inputBox}
        // onChangeText={nextValue => setValue(nextValue)}
      />
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Input
          placeholder="Exp Date"
          style={[styles.inputBox, { flex: 1, marginRight: 10 }]}
          // onChangeText={nextValue => setValue(nextValue)}
        />
        <Input
          placeholder="CVV"
          style={[styles.inputBox, { flex: 1 }]}
          // onChangeText={nextValue => setValue(nextValue)}
        />
      </View>
    </View>
    <View>
      <CheckBox>save card</CheckBox>
    </View>
  </>
);
const InstallButton = (props) => (
  <Button
    size="small"
    style={{ backgroundColor: "#388e3c", borderColor: "#388e3c" }}
    accessoryRight={LinkIcon}>
    Link
  </Button>
);
const PayUI = ({ PayIcon }) => (
  <>
    <ListItem
      title="Google Pay"
      description="Link with app"
      accessoryLeft={PayIcon}
      style={{
        marginTop: 20,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 1,
        borderRadius: 8,
      }}
      accessoryRight={InstallButton}
    />
    <View style={[styles.upiCard, { height: 90 }]}>
      <Text category="s1">Pay using upi id :</Text>
      <Input style={styles.inputBox} placeholder="Enter UPI ID" />
    </View>
    <View
      style={[
        styles.upiCard,
        { height: 150, padding: 15, flexDirection: "row" },
      ]}>
      <View style={styles.payDetails}>
        <Text category="s1">Port Charge </Text>
        <Text category="s1">Service Charge </Text>
        <Divider
          style={{ backgroundColor: "rgba(0,0,0,0.09)", marginVertical: 10 }}
        />
        <Text category="h4">Total Charge </Text>
      </View>
      <View style={[styles.payDetails, { alignItems: "flex-end" }]}>
        <Text category="s1">$500</Text>
        <Text category="s1">$200</Text>
        <Divider
          style={{ backgroundColor: "rgba(0,0,0,0.09)", marginVertical: 10 }}
        />
        <Text category="h4">$700</Text>
      </View>
    </View>
  </>
);
const PaymentScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [checked, setChecked] = React.useState(false);
  return (
    <Layout style={styles.container} level="1">
      <Card appearance="filled">
        <View style={styles.msgCon}>
          <Text status="primary" style={{ color: "#388e3c" }} category="h4">
            Confirm order & Pay
          </Text>
          <Text category="p1" style={{ textAlign: "center" }}>
            Please make this payment to enjoy our services unintrupted and also
            get updated always
          </Text>
        </View>
      </Card>
      <Card appearance="filled" style={{ height: 500 }}>
        <TabView
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
          // indicatorStyle={{ display: "none" }}
        >
          <Tab
            icon={(evprops) => (
              <Image
                source={{
                  uri: "http://www.sonalia.com/wp-content/uploads/2019/04/credit_card_logo.png",
                }}
                style={styles.icon}
              />
            )}
            title="BANK CARD"
            style={styles.tabs}>
            <Layout style={styles.tabContainer}>
              <Card appearance="filled" header={Header} style={{ height: 370 }}>
                <View
                  style={{
                    height: 180,
                    // alignItems: "center",
                    // justifyContent: "center",
                  }}>
                  <BankCardUI />
                </View>
              </Card>
            </Layout>
          </Tab>
          <Tab icon={GPayIcon} title="GPAY" style={styles.tabs}>
            <PayUI PayIcon={GPayIcon} />
          </Tab>
          <Tab icon={PPayIcon} title="UPI" style={styles.tabs}>
            <PayUI PayIcon={PPayIcon} />
          </Tab>
        </TabView>
      </Card>
      <View style={{ marginHorizontal: 25 }}>
        <Divider
          style={{ backgroundColor: "rgba(0,0,0,0.09)", marginVertical: 10 }}
        />
        <Button
          // appearance="ghost"
          status="primary"
          style={{ backgroundColor: "#388e3c", borderColor: "#388e3c" }}
          accessoryRight={PayIcon}>
          Make Payment
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 20,
    // backgroundColor: "red",
  },
  msgCon: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabs: {
    borderRadius: 8,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 2,
    marginHorizontal: 5,
  },
  icon: { width: 45, height: 45 },
  tabContainer: {
    // minHeight: 300,
    // alignItems: "center",
    // justifyContent: "center",
  },
  inputBox: {
    marginVertical: 8,
  },
  upiCard: {
    marginVertical: 10,

    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  payDetails: { flex: 1, justifyContent: "center" },
});
export default PaymentScreen;
