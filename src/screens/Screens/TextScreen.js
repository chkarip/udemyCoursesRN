import React,{useState}  from "react";
import {View, Text, StyleSheet,TextInput} from "react-native";

const TextScreen = () => {
    const [name,setName] = useState('');
return (
<View>
    <Text>Enter Password:</Text>
   <TextInput style={styles.input} 
   autoCapitalize="none"
   autoCorrect={false}
   value={name}
   onChangeText={(newValue) => setName(newValue)}
   />

  

   {name.length<=5 ? <Text>Password must  be longer than 5 character</Text> : null}
</View>
);
};

const styles = StyleSheet.create({
    input: {
        margim: 20,
        borderColor: 'black',
        borderWidth: 1,
    },
});

export default TextScreen;