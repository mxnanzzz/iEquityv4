import React, {useEffect, useState} from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { gogetProducts} from "./Services/ProductServices"
import {Products} from "./Components/Products.js"

export function ProductList (){

    function render ({item:Products}){
    return(
        <Products
            {... product}        
            onPress= {() => {
                navigation. navigate('ProductDetails', {productId: product.id})
        
        }}    
        /> 
        )
    }

    const [product, setProducts] =useState([]);
    useEffect(() => {
        setProducts(gogetProducts())

         
    })

        return (
            <FlatList
                style={Styles.ProductList} 
                contentContainerStyle={Styles.productsListContainer}
                keyExtractor={(item) => item.id.toString()} 
                data={Products}
                renderItem={render}

            />

        )
    }
    
const Styles = StyleSheet.create({
    ProductList: {
        backgroundColor: "#eeeeee",
    },
    ProductListContainer: {
        backgroundColor:"#eeeeee",
        paddingVertical:8,
        marginHorizontal:8,

    }

});

