import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { RootStackParamList } from "../App";
import { Dish, Restaurant } from "../models";
import { urlFor } from "../sanity";
type RestaurantCardProps = {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: Dish[];
  long: number;
  lat: number;
};

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
    >
      <View className="bg-white mr-3 shadow">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="h-36 w-36 rounded-sm"
        />

        <View className="px-3 pb-4">
          <Text className="font-bold text-lg pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text className="text-sm text-gray-500 ">
              <Text className="text-green-300">{rating}</Text> · {genre}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center space-x-1 ">
          <MapPinIcon color="green" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
