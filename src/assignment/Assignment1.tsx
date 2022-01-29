import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput ,TouchableOpacity} from 'react-native';
import { useNavigation, } from '@react-navigation/native';
export const Assignment1 = () => {
    const [value, setValue] = useState('')
    const navigation = useNavigation();
    const limit = 280
    const isTotal = limit - value.length
    const colorCode = value.length >= 10 ? (isTotal <= 10 ? (isTotal < 0 ? 'red' : "yellow") : "#a9a9a9") : "black"
    const bg = value.length >= 10 ? (isTotal <= 10 ? (isTotal < 0 ? '#ffcccb' : "#FFFFE0") : "white") : "white"
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.box_style, { borderColor: colorCode, backgroundColor: bg }]}>
                <TextInput multiline style={{ flex: 1 }} value={value} onChangeText={(e) => setValue(e)} />
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                <Text style={{ fontWeight: '600', color: colorCode, fontSize: 17 }} >{`${isTotal} characters remaining`}</Text>
            </View>
            {/* <TouchableOpacity activeOpacity={0.8} onPress={()=> navigation.navigate('Assignment2')} style={styles.button_style}>
                <Text style={{ fontSize: 18, color: 'white',fontWeight : 'bold' }}>{"Next"}</Text>
            </TouchableOpacity> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', backgroundColor: '#dcdcdc'
    },
    box_style: {
        height: 200, borderWidth: 1, marginHorizontal: 20, borderRadius: 20, paddingVertical: 10, paddingHorizontal: 15
    },
    button_style : {
        height: 50,marginTop: '16%', marginHorizontal: '15%', borderRadius: 7, backgroundColor: '#20B840', justifyContent: 'center', alignItems: 'center'
    }
})