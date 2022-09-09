import { ScrollView } from "react-native";
import { CategoryCard } from "./CategoryCard";

export const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="assets/sushi-place.jpg" title="Testings" />
    </ScrollView>
  );
};
