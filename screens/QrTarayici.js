import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import openMap from 'react-native-open-maps';

export default function QrTarayici() {
    const [yetki, setYetki] = useState(null);
    const [taratildiMi, setTaratildiMi] = useState(false);
    const [veri, setVeri] = useState("");


    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setYetki(status === 'granted');
        })();
    }, []);



    const handleBarCodeScanned = ({ type, data }) => {
        setTaratildiMi(true);

        setVeri(data);
    };

    if (yetki === null) {
        return <Text>Kamera yetkisi verilmesi bekleniyor.</Text>;
    }
    if (yetki === false) {
        return <Text>Kamera yetkisi verilmedi.</Text>;
    }

    return (
        <View style={styles.container}>
            {taratildiMi ?
                <View style={{
                    alignItems: "center"
                }}>
                    <Text
                        style={{
                            marginTop: 20,
                            marginBottom: 20,
                            textAlign: "center",
                            fontSize: 20
                        }}
                    >QR Kod İçeriği </Text>
                    <Text
                        style={{
                            marginTop: 5,
                            marginBottom: 20,
                            textAlign: "center",
                            fontSize: 15
                        }}
                    >{veri}</Text>
                    <TouchableOpacity onPress={() => openMap({ query: veri.split(":")[1] })} >
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
                        >Maps'de Aç</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTaratildiMi(false)} >
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
                </View>
                :
                <View
                    style={{
                        height: 300,
                        width: "100%",
                    }}>
                    <Text
                        style={{
                            marginTop: 20,
                            marginBottom: 20,
                            textAlign: "center",
                            fontSize: 20
                        }}
                    >Lütfen QR kod okutunuz.</Text>
                    <BarCodeScanner
                        onBarCodeScanned={handleBarCodeScanned}
                        style={{
                            height: "100%",
                            width: "100%",
                        }}
                    />
                </View>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});