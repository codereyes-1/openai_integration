import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Main from './Main';

const Stack = createStackNavigator();
// const NavigationContainer = NavigationContainer();
// import Main from './Main'

const App = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;