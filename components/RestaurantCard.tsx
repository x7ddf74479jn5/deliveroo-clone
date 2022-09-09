import { View, Image, Text, TouchableOpacity } from "react-native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/solid";
type RestaurantCardProps = {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: string[];
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
  return (
    <TouchableOpacity>
      <View className="bg-white mr-3 shadow">
        <Image
          source={{
            uri: imgUrl,
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
