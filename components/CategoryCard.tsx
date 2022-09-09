import { Image, View, TouchableOpacity, Text } from "react-native";

type CategoryCardProps = {
  imgUrl: string;
  title: string;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <View className="relative mr-2">
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-20 h-20 rounded"
        />
        <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
