import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 justify-center bg-white p-6">
      <Text className="text-2xl font-bold mb-6">Sign In</Text>

      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity className="bg-primary py-3 rounded-lg mb-4">
        <Text className="text-white text-center font-semibold">Login</Text>
      </TouchableOpacity>

      <View className="flex-row items-center justify-center mb-4">
        <Text className="text-gray-500 mr-2">Don’t have an account?</Text>
        <Link href="/join">
          <Text className="text-primary font-semibold">Sign Up</Text>
        </Link>
      </View>

      <View className="flex-row justify-center space-x-4">
        <TouchableOpacity>
          <Image source={require("../assets/images/google.png")} className="w-10 h-10" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/images/facebook.png")} className="w-10 h-10" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
