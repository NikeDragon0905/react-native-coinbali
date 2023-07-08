import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import LoginScreen from "./screens/auth/LoginScreen";
import ForgotPasswordScreen from "./screens/auth/ForgotPasswordScreen";
import CheckEmailScreen from "./screens/auth/CheckEmailScreen";
import ResetPasswordScreen from "./screens/auth/ResetPasswordScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import VerifyEmail from "./screens/auth/VerifyEmail";
import Liftoff from "./screens/Liftoff";
import ProfileScreen from "./screens/profile/ProfileScreen";
import SettingsScreen from "./screens/settings";
import MyProfileScreen from "./screens/profile/MyProfileScreen";
import SettingsProfileScreen from "./screens/settings/SettingsProfileScreen";

import Feed_Img from "./assets/images/Feed.png";
import Liftoff_Img from "./assets/images/Liftoff.png";
import Portfolio_Img from "./assets/images/Portfolio.png";
import Messages_Img from "./assets/images/Messages.png";
import Profile_Img from "./assets/images/Profile.png";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={VerifyEmail}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Feed_Img} style={styles.tabImg} />
          ),
        }}
      />
      <Tab.Screen
        name="Liftoff"
        component={Liftoff}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Liftoff_Img} style={styles.tabImg} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={VerifyEmail}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Portfolio_Img} style={styles.tabImg} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={VerifyEmail}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Messages_Img} style={styles.tabImg} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Profile_Img} style={styles.tabImg} />
          ),
        }}
      />
      {/* <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Profile_Img} style={styles.tabImg} />
          ),
        }}
      /> */}
      {/* <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Profile_Img} style={styles.tabImg} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckEmail"
          component={CheckEmailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings/Profile"
          component={SettingsProfileScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabImg: {
    width: 24,
    height: 24,
  },
});

export default AppNavigator;
