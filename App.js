import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/Screens/HomeScreen';
import ComponentsScreen from './src/screens/Screens/ComponentsScreen';
import ListScreen from './src/screens/Screens/ListScreen';
import ImageScreen from './src/screens/Screens/ImageScreen';
import CounterScreen from './src/screens/Screens/CounterScreen';
import ColorScreen from './src/screens/Screens/ColorScreen';
import SquareScreen from './src/screens/Screens/SquareScreen';
import TextScreen from './src/screens/Screens/TextScreen';
import BoxScreen from './src/screens/Screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    text: TextScreen,
    box: BoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
