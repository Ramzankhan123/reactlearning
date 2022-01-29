import React, { useContext } from "react";
import { View, SafeAreaView, StyleSheet, Text, FlatList, Image } from 'react-native';
import { ProductsList } from "../assests/ProductList";
import { IdContext } from "../store/ParamProvider";

export const Assignmen3Checkout = () => {
    let { isProductList, isCartItems } = useContext(IdContext)

    const isTotalPrice = () => {
        let totalPrice = 0
        return isCartItems.reduce(function (total: any, option: any) {
            totalPrice = totalPrice + option.total_price
            return "$" + totalPrice;
        }, [])
    }


    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 10 }}>
                <FlatList
                    data={isCartItems}
                    keyExtractor={(item, index) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                    ListFooterComponent={() => (
                        <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 29, fontWeight: 'bold' }}>{`Total : ${isTotalPrice()}`}</Text>
                        </View>
                    )}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.item_container}>
                                <View style={{ width: 100, overflow: 'hidden' }}>
                                    <Image source={{ uri: item.product_image }} style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} />
                                </View>
                                <View style={styles.content_view}>
                                    <Text style={{ fontSize: 20, fontWeight: '700' }}>{`Product ${index + 1}`}</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '400' }}>{item.count + " X " + item.product_price}</Text>
                                </View>
                            </View>
                        )
                    }}

                />


            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    item_container: {
        height: 110, borderRadius: 9, padding: 10, flexDirection: 'row', backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    content_view: {
        flex: 1, paddingLeft: 20, justifyContent: 'space-between', paddingBottom: 20,
    }
})