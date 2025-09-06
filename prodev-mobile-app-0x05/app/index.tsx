import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      <Image
        source={require("../assets/images/logo.png")}
        className="w-32 h-32 mb-6"
        resizeMode="contain"
      />

      <Text className="text-3xl font-bold mb-2">Welcome</Text>
      <Text className="text-gray-600 mb-8 text-center">
        Find your dream property today!
      </Text>

      <Link href="/signin" asChild>
        <TouchableOpacity className="bg-primary py-3 px-6 rounded-xl mb-4 w-full">
          <Text className="text-white text-center font-semibold">Sign In</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/join" asChild>
        <TouchableOpacity className="border border-primary py-3 px-6 rounded-xl w-full">
          <Text className="text-primary text-center font-semibold">
            Create Account
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
