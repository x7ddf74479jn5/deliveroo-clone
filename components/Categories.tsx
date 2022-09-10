import { useEffect } from "react";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Category } from "../models";
import { client, urlFor } from "../sanity";
import { CategoryCard } from "./CategoryCard";

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    client.fetch(`*[_type == "featured" && _id == $id]`).then((data) => [setCategories(data)]);
  });

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => (
        <CategoryCard key={category.id} imgUrl={urlFor(category.image).width(200).url()} title={category.name} />
      ))}
    </ScrollView>
  );
};
