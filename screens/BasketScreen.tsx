import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { Image, View, Text, SafeAreaView, TouchableOpacity, ScrollView, Touchable } from "react-native";
import { XCircleIcon } from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../App";
import { removeFromBasket, selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { selectRestaurant } from "../features/restaurantSlice";
import { Dish } from "../models";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

export const BasketScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<Record<string, Dish[]>>({});
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[Number(item.id)] = results[Number(item.id)] || []).push(item);
      return results;
    }, {} as any);

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-4 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>

          <TouchableOpacity onPress={navigation.goBack}>
            <View className="rounded-full bg-gray-100 absolute top-3 right-5">
              <XCircleIcon color="#00CCBB" height={50} width={50} />
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: "assets/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.avif" }}
            className="w-7 h-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text=[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text=[#00CCBB]">{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.name).url(),
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>

              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="USD" />
              </Text>

              <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id: key }))}>
                <Text className="text-[#00CCBB] text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="b-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="USD" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="USD" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-exrabold">
              <Currency quantity={basketTotal + 5.99} currency="USD" />
            </Text>
          </View>

          <TouchableOpacity>
            <View className="rounded-lg bg-[#00CCBB] p-4">
              <Text className="text-center text-white text-lg font-bold">Place Order</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};