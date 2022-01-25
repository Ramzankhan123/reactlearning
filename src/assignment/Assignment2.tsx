import React, { useState } from "react";
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ArrayList = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
]
export const Assignment2 = () => {
    const [isState, setIsState] = useState([
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
    ])
    const leftSwipe = (progress: any, dragX: any, item: any) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity onPress={() => onPreesDelete(item)} activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                    <Animated.Text style={{ fontSize: 19, color: 'white', fontWeight: 'bold', transform: [{ translateX: scale }], }}>
                        {'Delete'}
                    </Animated.Text>
                </View>
            </TouchableOpacity>
        );
    };

    const onPreesDelete = (item: any) => {
        setIsState((itm) => {
            return ([...itm.filter((it: any) => it.id !== item.id)])
        })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.continer}>
                <FlatList
                    data={isState}
                    keyExtractor={(item, index) => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                    renderItem={({ item, index }) => {
                        return (
                            <Swipeable renderRightActions={(progress: any, dragX: any) => leftSwipe(progress, dragX, item)}>
                                <View style={{ height: 90, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 6, backgroundColor: 'white' }}>
                                    <Text>{item.id}</Text>
                                </View>
                            </Swipeable>
                        )
                    }}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    continer: {
        flex: 1, paddingHorizontal: 20, paddingTop: 10
    },
    deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 90,

        borderRadius: 10
    },
})