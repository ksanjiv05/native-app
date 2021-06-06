import React from "react";
import { View } from "react-native";
import Drawer from "./components/DrawerMenu";
import Header from "./components/Header";
import Search from "./components/Search";
import AppNavigator from "./AppNavigator";
import AddressScreen from "./screens/AddressScreen";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ProductListScreen from "./screens/ProductListScreen";

const Index = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <View style={{ flex: 1 }}>
      {/* <Drawer open={open} setOpen={setOpen} />
      <View style={{ flex: 1 }}>
        <Header open={open} setOpen={setOpen} />
      </View> */}

      {/* <Search /> */}
      {/* <View
        style={{
          flex: 9,
        }}>
        <HomeScreen />
      </View> */}
      {/* <LoginScreen /> */}
      {/* <ProductListScreen /> */}
      {/* <CartScreen /> */}
      {/* <AddressScreen /> */}
      {/* <PaymentScreen /> */}
      <AppNavigator />
    </View>
  );
};

export default Index;
