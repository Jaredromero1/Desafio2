import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import Cards from "./src/components/Cards";
import Header from "./src/components/Header";

export default function App() {
    return (
        <View style={styles.Container}>
            <Header />
            <View style={styles.contentText}>
                <View>
                    <Text style={styles.texto}>Personajes</Text>
                </View>
                <View>
                    <Text style={styles.texto}>Especie</Text>
                </View>
            </View>
            <ScrollView style={styles.scrollstyle}>
                <Cards />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#000",
    },
    scrollstyle: {
        width: "100%",
        marginBottom: 190,
    },
    texto: {
        color: "#40B6CB",
        paddingVertical: 20,
        paddingTop: 10,
        fontSize: 22,
        fontWeight: "bold",
    },
    contentText: {
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 25,
  },
});
