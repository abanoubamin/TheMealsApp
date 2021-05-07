import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import {
  MealsNavigator,
  FavNavigator,
  FiltersNavigator,
} from "./StackNavigator";
import Colors from "../constants/Colors";

const MBTab = createMaterialBottomTabNavigator();
const BTab = createBottomTabNavigator();

const mealsOptions = {
  tabBarIcon: (tabInfo) => {
    return (
      <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
    );
  },
  tabBarColor: Colors.primaryColor,
};
const favOptions = {
  tabBarIcon: (tabInfo) => {
    return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
  },
  tabBarColor: Colors.accentColor,
};

const MealsFavTabNavigator = () => {
  return Platform.OS === "android" ? (
    <MBTab.Navigator
      activeColor="white"
      shifting={true}
      barStyle={{ backgroundColor: Colors.primaryColor }}
    >
      <MBTab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{ ...mealsOptions }}
      />
      <MBTab.Screen
        name="Favorites"
        component={FavNavigator}
        options={{ ...favOptions }}
      />
    </MBTab.Navigator>
  ) : (
    <BTab.Navigator activeColor={Colors.accentColor}>
      <BTab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{ ...mealsOptions }}
      />
      <BTab.Screen
        name="Favorites"
        component={FavNavigator}
        options={{ ...favOptions }}
      />
    </BTab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: { fontFamily: "OpenSans-Bold" },
      }}
    >
      <Drawer.Screen
        name="MealsFavs"
        component={MealsFavTabNavigator}
        options={{ drawerLabel: "Meals" }}
      />
      <Drawer.Screen name="Filters" component={FiltersNavigator} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
