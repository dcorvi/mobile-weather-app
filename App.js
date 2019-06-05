import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './screens/searchScreen.js';
import DataScreen from './screens/dataScreen.js';


const MainNavigator = createStackNavigator({
  Home: { screen: SearchScreen },
  Data: { screen: DataScreen },
});


const App = createAppContainer(MainNavigator);

export default App;
