import React, { useEffect, useState, useContext, useRef } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { IdContext } from "../store/ParamProvider";

interface Props {
    countValue: number,
    itemId: number,
}
export const CountBtn = ({ countValue, itemId }: Props) => {
    const [isCount, setIsCount] = useState(0)
    const isCheck = useRef(true)
    let { isProductList, isCartItems, setIsCartItems, setIsProductList } = useContext(IdContext)


    useEffect(() => {
        if (isCheck) {
            setIsCount(countValue)
            isCheck.current = false
        }

    }, [countValue])

    const onAddItem = () => {
        console.log("addedd item", isCartItems)
        setIsCount((prev) => prev + 1)
        setIsProductList((prev: any) => {
            return ([...prev.map((li: any) => {
                if (li.id === itemId) {
                    li.count = li.count + 1
                    li.total_price = li.count * li.product_price
                    if (isCartItems.length == 0) {
                        setIsCartItems([li])
                    } else {
                        setIsCartItems((cart_prev: any) => {
                            if (cart_prev.filter((e: any) => e.id === li.id).length > 0) {
                                cart_prev = cart_prev.map((data: any) => {
                                    if (data.id === li.id) {
                                        data = li
                                    }
                                    return ({ ...data })
                                })
                                console.log("cart_prev item", cart_prev)
                            } else {
                                cart_prev.push(li)
                            }
                            return ([...cart_prev])
                        })
                    }
                }
                return ({ ...li })
            })])
        })
    }
    const onDelete = () => {
        setIsCount((prev) => prev - 1)
        if (isCount == 1 && isCartItems.length == 1) {
            setIsCartItems([])
        } else {
            setIsProductList((prev: any) => {
                return ([...prev.map((li: any) => {
                    if (li.id === itemId) {
                        li.count = li.count - 1
                        li.total_price = li.count * li.product_price
                        if (isCartItems.length == 0) {
                            setIsCartItems([li])
                        } else {
                            setIsCartItems((cart_prev: any) => {
                                if (cart_prev.filter((e: any) => e.id === itemId).length > 0) {
                                    cart_prev.map((data: any) => {
                                        if (data.id == itemId)
                                            return ({ ...data })
                                    })
                                } else {
                                    cart_prev.push(li)
                                }
                                return ([...cart_prev])
                            })
                        }
                    }
                    return ({ ...li })
                })])
            })
        }

    }
    return (
        <>
            {
                isCount == 0 ?
                    <TouchableOpacity activeOpacity={0.6} onPress={onAddItem} style={{ ...styles.btn_size, ...styles.bg_color, borderRadius: 30, }}>
                        <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>{"Add Item"}</Text>
                    </TouchableOpacity>
                    :
                    <View style={{ ...styles.btn_size, flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={0.6} onPress={onDelete} style={{ ...styles.addbtn, ...styles.bg_color }}>
                            <Text style={{ ...styles.addbtnTxt }}>{"-"}</Text>
                        </TouchableOpacity>
                        <View style={{ width: 90, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: '700' }}>{isCount}</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.6} onPress={onAddItem} style={{ ...styles.addbtn, ...styles.bg_color }}>
                            <Text style={{ ...styles.addbtnTxt }}>{"+"}</Text>
                        </TouchableOpacity>
                    </View>
            }

        </>
    )
}

const styles = StyleSheet.create({
    btn_size: {
        height: 38, width: "80%", marginHorizontal: 10,
    },
    bg_color: {
        backgroundColor: '#F43F5E', justifyContent: 'center', alignItems: 'center',
    },
    addbtn: {
        flex: 5, borderRadius: 5,
    },
    addbtnTxt: {
        fontSize: 22, fontWeight: '500', color: 'white'
    }

})