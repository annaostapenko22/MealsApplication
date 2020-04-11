import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {},
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {},
    },
    MealDetail: MealDetailScreen,
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS == "android" ? Colors.primaryColor : "#fff",
      },
      headerTintColor: Platform.OS == "android" ? "#fff" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigator);
