import { StyleSheet, View } from "react-native";
// import { GoHome } from "react-icons/go";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Index } from "pages/index";
import { User } from "pages/user";

const Tab = createBottomTabNavigator();

export const Navbar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Index} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
