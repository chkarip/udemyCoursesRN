import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
  <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button 
    onPress={() => navigation.navigate('Components')}
    title='Go to the Components Demo'
    />
    <Button title='go to list demo' 
    onPress={() => navigation.navigate('List')}
    />
    <Button title='go to image Demo'
    onPress={() => navigation.navigate('Image')}
    />
    <Button title='go to Counter Demo'
    onPress={() => navigation.navigate('Counter')}
    />
    <Button title='go to color Demo'
    onPress={() => navigation.navigate('Color')}
    />
    <Button title='go to square Demo'
    onPress={() => navigation.navigate('Square')}
    />
    <Button title='go to text Demo'
    onPress={() => navigation.navigate('text')}
    />
    
  </View>);
};
/*<TouchableOpacity onPress={() => props.navigation.navigate('List') }>
<Text> Go to List demo</Text>
</TouchableOpacity>*/

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
