import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends =[
        {name: 'friend #1',age: 20 ,key: '1'},
        {name: 'friend #2',age: 30 ,key: '2'},
        {name: 'friend #3',age: 40 ,key: '3'},
        {name: 'friend #4',age: 50 ,key: '4'},
        {name: 'friend #5',age: 60 ,key: '5'},
        {name: 'friend #6',age: 70 ,key: '6'},
        {name: 'friend #7',age: 80 ,key: '7'},
        {name: 'friend #8',age: 90 ,key: '8'},
        {name: 'friend #9',age: 990 ,key: '9'},
    ];
    return (
    <FlatList 
    //horizontal
    //showsHorizontalScrollIndicator={false}
    //keyExtractor={friend => friend.name}
    data={friends} 
    renderItem={({item}) => {
        return <Text style={style.textStyle}>{item.name}-  age {item.age}</Text>
    }}
     />
    );
};

const style =StyleSheet.create({
    textStyle:{
        marginVertical:50
    }
});

export default ListScreen;