import React from "react";
import { Text,View, StyleSheet } from "react-native";

const BoxScreen = () => { 
    return (
        <View style={styles.viewStyle}>
            <View   style={styles.textOneStyle} />  
            <View
            style={styles.textTwoStyle}
            />
            <View
            style={styles.textThreeStyle}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
     viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'flex-start',
        flexDirection:'row',
        justifyContent: 'space-between',
        height:200,
        
     },
     textOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        flex:1
     },
     textTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple',
        flex:1
     },
     textThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        flex:1
     },
});

export default BoxScreen;