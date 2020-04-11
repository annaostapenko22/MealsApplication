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

const CategoriesScreen = (props) => {
  const renderGridITem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
