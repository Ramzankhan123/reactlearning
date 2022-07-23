import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation, } from '@react-navigation/native';

export const IndexFile = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <TouchableOpacity onPress={() => navigation.navigate('Assignment1')} style={styles.button_style}>
                    <Text style={styles.text_style}>{"Assignment 1"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Assignment2')} style={styles.button_style}>
                    <Text style={styles.text_style}>{"Assignment 2"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Assignment3')} style={styles.button_style}>
                    <Text style={styles.text_style}>{"Assignment 3"}</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Assignment4')} style={styles.button_style}>
                    <Text style={styles.text_style}>{"Assignment 4"}</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => navigation.navigate('Assignment5')} style={styles.button_style}>
                    <Text style={styles.text_style}>{"Assignment 5"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Assignment6')} style={styles.button_style}>
                    <Text style={styles.text_style}>{"Assignment 6"}</Text>
                </TouchableOpacity>
            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    button_style: {
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    text_style: {
        fontSize: 14,
    }
})