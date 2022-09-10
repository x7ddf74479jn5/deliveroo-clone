import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NativeScreenContainer } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./screens/HomeScreen";
import { RestaurantScreen } from "./screens/RestaurantScreen";
import { Restaurant } from "./models";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: Omit<Restaurant, "image" | "name" | "type"> & { imgUrl: string; title: string; genre: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NativeScreenContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NativeScreenContainer>
  );
}
