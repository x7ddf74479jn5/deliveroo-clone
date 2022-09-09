import { ScrollView, View, Text, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  UserIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";
import { Categories } from "../components/categories";

const navigation = useNavigation();
export const HomeScreen = () => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-500">
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={require("assets/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.avif")}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
          <View className="flex-row space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
          </View>

          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

        <ScrollView>
          <Categories />
        </ScrollView>
      </Text>
    </SafeAreaView>
  );
};
