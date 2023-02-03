import React from 'react';
import {StyleSheet, Text, View} from "react-native";

type ProductInfoProps = {
    ean: number,
    name: string,
    manufacturer: string
};

const ProductInfo = (props: ProductInfoProps) => {
    return (
        <View style={styles.product_container}>
            <Text style={styles.product_text}>EAN: {props.ean}</Text>
            <Text style={styles.product_text}>Name: {props.name}</Text>
            <Text style={styles.product_text}>Manufacturer: {props.manufacturer}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    product_container: {
        flex: 2,
        margin: 12,
    },
    product_text: {
        fontSize: 17,
    }
});

export default ProductInfo;