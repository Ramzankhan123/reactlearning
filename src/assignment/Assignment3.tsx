import React, { useContext } from "react";
import { View, SafeAreaView, Image, Text, StyleSheet, FlatList } from 'react-native';
import { CheckOutBtn } from "../components/CheckOutBtn";
import { CountBtn } from "../components/countBtn";
import { IdContext } from "../store/ParamProvider";
export const Assignment3 = () => {
    let { isProductList, isCartItems } = useContext(IdContext)

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EEF0F0' }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={isProductList}
                    keyExtractor={(item, index) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                    ListHeaderComponent={() => <View style={{ height: 30 }} />}
                    ListFooterComponent={() => <View style={{ height: 150 }} />}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={item.id.toString()} style={styles.Item_container}>
                                <View style={{ width: '100%', height: 140, }}>
                                    <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={{ uri: item.product_image }} />
                                </View>
                                <View style={styles.content_view}>
                                    <Text style={{ fontSize: 26, fontWeight: '700', }}>{item.currency + ' ' + item.product_price}</Text>
                                    <CountBtn itemId={item.id} countValue={0} />
                                </View>
                            </View>
                        )
                    }}
                />


            </View>
            {
                isCartItems.length > 0 ?
                    <CheckOutBtn />
                    :
                    null
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Item_container: {
        height: 270, width: 235, borderWidth: 1, borderColor: '#C5C5C5', backgroundColor: 'white', borderRadius: 14, paddingHorizontal: 10, paddingVertical: 10,
    },
    content_view: {
        flex: 1, alignItems: 'center', paddingTop: 10, paddingBottom: 5, justifyContent: 'space-between'
    }
})