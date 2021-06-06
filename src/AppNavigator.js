import React from "react";
import { View, Text, Button } from "react-native";
import { IconButton } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import TabNav from "./TabNav";
import CartScreen from "./screens/CartScreen";
import PaymentScreen from "./screens/PaymentScreen";
import SlotScreen from "./screens/SlotScreen";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="Slot"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#388e3c",
        },
        headerTintColor: "#fff",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
      }}>
      <Stack.Screen
        name="Home"
        component={TabNav}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <IconButton
              icon="cart"
              color="#fff"
              size={35}
              onPress={() => navigation.navigate("Cart")}
            />
          ),
          headerLeft: () => (
            <IconButton
              icon="view-headline"
              color="#fff"
              size={25}
              onPress={() => navigation.openDrawer()}
            />
          ),
        })}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Slot" component={SlotScreen} />
      <Stack.Screen name="Pay" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

// const Cart = () => {
//   return (
//     <Stack.Navigator>

//     </Stack.Navigator>
//   );
// };
const InitialNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {/* <Drawer.Screen name="Home" component={Root} /> */}
        <Drawer.Screen
          name="Home"
          component={Root}
          options={{
            drawerIcon: () => (
              <IconButton icon="view-headline" color="green" size={15} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default InitialNavigator;
