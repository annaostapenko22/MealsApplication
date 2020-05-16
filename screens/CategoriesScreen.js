import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";
const CategoriesScreen = (props) => {
  const renderGridITem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    // <View style={styles.screen}>
    //     <Text>Categories Screen</Text>
    //     <Button title="go to meals" onPress={()=> {
    //         props.navigation.navigate({routeName: "CategoryMeals"})
    //     }}/>
    // </View>

    <FlatList
      keyExtractor={(item, idx) => item.id}
      data={CATEGORIES}
      renderItem={renderGridITem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
