import { ScrollView, View, Text } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { RestaurantCard } from "./RestaurantCard";
type FeaturedRowProps = {
  id: string;
  title: string;
  description: string;
  featuredCategory: string;
};

export const FeaturedRow: React.FC<FeaturedRowProps> = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id="123"
          imgUrl="assets/sushi-place.jpg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};
