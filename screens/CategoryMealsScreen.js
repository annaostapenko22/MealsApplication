import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Category meals Screen</Text>
      <Button title="Got to the meal details" onPress={()=> {
          props.navigation.navigate({routeName: "MealDetail"})
      }}/>
      <Button title="Back" onPress={()=> {
        props.navigation.pop()
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default CategoryMealsScreen;
