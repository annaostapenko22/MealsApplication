import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/data";
const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return (
    <View style={styles.screen}>
      <Text>Category meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Got to the meal details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button
        title="Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
const categoryId = navigationData.navigation.getParam("categoryId")
const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
return {
  headerTitle: selectedCategory.title
}
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
