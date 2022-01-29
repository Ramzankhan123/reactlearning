import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MyColors } from "../assests/colors";
import { useNavigation, } from '@react-navigation/native';
import { IdContext } from "../store/ParamProvider";

export const CheckOutBtn = () => {
    const navigation = useNavigation();
    let { isProductList, isCartItems } = useContext(IdContext)


    const isTotalPrice = () => {
        let totalPrice = 0
        return isCartItems.reduce(function (total: any, option: any) {
            totalPrice = totalPrice + option.total_price
            return "$" + totalPrice;
        }, [])
    }

    return (
        <TouchableOpacity activeOpacity={1}
          //  onPress={() => console.log("my array", isProductList, isCartItems)}
             onPress={() => navigation.navigate('Assignmen3Checkout')} 
            style={styles.btn_style}>
            <View style={{ flex: 5, left: 5, }}>
                <Text style={{ ...styles.checkout_text, fontSize: 16, fontWeight: '600' }} >{`Total : ${isTotalPrice()}`}</Text>
            </View>
            <View style={{ flex: 5, alignItems: 'flex-end', right: 5 }}>
                <Text style={styles.checkout_text}>{"Checkout"}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn_style: {
        backgroundColor: MyColors.btnBg,
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        marginHorizontal: '6%',
        bottom: '7%',
        borderRadius: 55,
        shadowRadius: 55,
        paddingVertical: '5%'
        // height : 60,
    },
    checkout_text: {
        color: 'white', fontSize: 19, fontWeight: 'bold',
    }
})
