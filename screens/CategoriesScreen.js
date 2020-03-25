import React from 'react'
import {View, Text, StyleSheet, Button, FlatList} from "react-native"
import {CATEGORIES} from "../data/data"

const renderGridITem = (itemData) => {
return <View style={styles.gridItem}>
    <Text>
        {itemData.item.title}
    </Text>
</View>
}

const CategoriesScreen = (props) => {
    return(
        // <View style={styles.screen}>
        //     <Text>Categories Screen</Text>
        //     <Button title="go to meals" onPress={()=> {
        //         props.navigation.navigate({routeName: "CategoryMeals"})
        //     }}/>
        // </View>
        <FlatList 
        keyExtractor={(item, idx)=> item.id}
        data={CATEGORIES} renderItem={renderGridITem} numColumns={2} />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    gridItem: {
       flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoriesScreen;