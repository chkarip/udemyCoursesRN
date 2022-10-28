import React, {useReducer} from "react";
import {View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch(action.methodToUse){
    case 'Increase':
        return {...state,Counter: state.Counter + action.amount};
    case 'Decrease':
        return {...state, Counter: state.Counter + action.amount};
    default:
        return state;
  }  
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {Counter:0})

return (
    <View>
        <Button title="Increase" onPress={() => dispatch({methodToUse: 'Increase', amount:1})}/>
        <Button title="Decrease" onPress={() => dispatch({methodToUse: 'Decrease', amount:-1})}/>
     <Text> Current Count: {state.Counter}</Text>   
    </View>
);
};

const styles = StyleSheet.create({

});

export default CounterScreen;