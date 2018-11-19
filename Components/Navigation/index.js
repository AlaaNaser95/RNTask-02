import { createStackNavigator } from "react-navigation";

import CoffeeList from "../CoffeeList";
import CoffeeDetail from "../CoffeeDetail";
import CoffeeCart from "../CoffeeCart";
import Login from "../Login";

const OurStack = createStackNavigator(
  {
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart,
    Login: Login
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: { backgroundColor: "rgb(20, 90, 100)" }
  }
);
export default OurStack;
