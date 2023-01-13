import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



export default function AnaSayfa() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
                style={{
                    marginTop: 20,
                    height: 150,
                    width: 150,
                }}
                source={require("../logo.jpg")}
            />
            <Text
                style={{
                    marginTop: 20,
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 25
                }}
            >QR2LOCATION UYGULAMASI</Text>
            <Text
                style={{
                    marginTop: 10,
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 20
                }}
            >Ercüment Ömer ARTAR</Text>
            <TouchableOpacity onPress={() => navigation.navigate("QR Tarayıcı")} >
                <Text
                    style={{
                        marginTop: 10,
                        marginBottom: 20,
                        textAlign: "center",
                        fontSize: 25,
                        padding: 10,
                        backgroundColor: "gray",
                        borderRadius: 10,

                    }}
                >QR Kod Tara</Text>
            </TouchableOpacity>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
