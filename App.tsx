import { TailwindProvider } from "tailwindcss-react-native";
import { NativeScreenContainer } from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import { HomeScreen } from "./screens/HomeScreen";
import { RestaurantScreen } from "./screens/RestaurantScreen";
import { Restaurant } from "./models";
import { store } from "./store";
import { BasketScreen } from "./screens/BasketScreen";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: Restaurant;
  Basket: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NativeScreenContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{ presentation: "modal", headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NativeScreenContainer>
  );
}
