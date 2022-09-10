import { View, Text, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import React, { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/outline";

type DishRowProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export const DishRow: React.FC<DishRowProps> = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
        <View className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
          <View className="flex-row">
            <View className="flex-1 pr-2">
              <Text className="text-lg mb-1">{name}</Text>
              <Text className="text-gray-400">{description}</Text>
              <Text className="text-gray-400">
                <Currency quantity={price} currency="USD" />
              </Text>
            </View>

            <View>
              <Image
                source={{
                  uri: urlFor(image).url(),
                }}
                className="w-20 h-20 bg-gray-300 p-4 "
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon color={items.length > 0 ? "#00CCBB" : "gray"} size={40} />

              <Text>0</Text>

              <PlusCircleIcon color={items.length > 0 ? "#00CCBB" : "gray"} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};
