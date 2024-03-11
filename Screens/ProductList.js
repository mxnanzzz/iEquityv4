import React, {useEffect, useState} from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { gogetProducts} from "./Services/ProductServices.js";
import {Products} from "./Components/Products.js"

export function ProductList (){

    function render ({item:Products}){
    return(
        <Products
            {... Products}        
            onPress= {() => {
                navigation. navigate('ProductDetails', {productId: product.id})
        
        }}    
        /> 
        )
    }

    const [Products, setProducts] =useState([]);
    useEffect(() => {
        setProducts(gogetProducts())

         
    })

        return (
            <FlatList
                style={styles.ProductList} 
                contentContainerStyle={styles.productsListContainer}
                keyExtractor={(item) => item.id.toString()} 
                data={Products}
                renderItem={render}

            />

        )
    }
    
const styles = StyleSheet.create({
    ProductList: {
        backgroundColor: "#eeeeee",
    }
    productsListContainer: {
        backgroundColor:"#eeeeee",
        paddingVertical:8,
        marginHorizontal:8,

    }

});

