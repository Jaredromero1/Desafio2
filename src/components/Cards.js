import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';

export default function Cards() {
    const [data, setData] = useState([]);
    const url = "https://rickandmortyapi.com/api/character";

    fetch(url)
        .then((response) => response.json())
        .then((resjson) => setData(resjson.results));

        return(
          data.map((results,i) => {
                  return(
                      <View key={i} style={styles.container}>
                        <TouchableOpacity style={styles.item} onPress={() => console.log(results.name + ' - ' + results.species)}>
                          <Image style={styles.image} source={{ uri: results.image }} />
                          <View style={styles.contentCard}>
                              <View>
                                  <Text style={styles.name}>{results.name}</Text>
                              </View>
                              <View>
                                  <Text style={styles.species}>{results.species}</Text>
                              </View>
                          </View>
                        </TouchableOpacity>
                      </View>     
                  )
          })
      )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 15,
        marginHorizontal: 25,
        marginVertical: 15,  
        backgroundColor: '#40B6CB',
    },
    contentCard: {
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
    },
    image: {
      backgroundColor: '#fff',
        width: "100%",
        height: 250,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        marginBottom: 10,
        resizeMode: 'stretch',
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        paddingBottom: 20,
    },
    species: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
      paddingBottom: 20,
  },
});
