import { StyleSheet, View } from "react-native";
// import { GoHome } from "react-icons/go";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
// import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import { Index } from "pages/index";

// const Tab = createBottomTabNavigator();
const TabBarComponent = (props: any) => <BottomTabBar {...props} />;
const Tab = createBottomTabNavigator();

export const Navbar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#3a675c" }, // Custom background color for the tab bar
          tabBarActiveTintColor: "#ffffff", // Active tab text/icon color
          tabBarInactiveTintColor: "#b0bec5", // Inactive tab text/icon color
        }}
      >
        <Tab.Screen name="Home" component={Index} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
