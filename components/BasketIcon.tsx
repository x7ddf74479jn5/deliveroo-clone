import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootStackParamList } from "../App";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import Currency from "react-currency-formatter";

export const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity>
        <View className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
          <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
          <Text className="text-white flex-1 font-extrabold text-lg text-center">View Basket</Text>
          <Text className="text-lg text-white font-extrabold">
            <Currency quantity={basketTotal} currency="USD" />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
