import { createStackNavigator } from 'react-navigation-stack';
import { Welcome } from '../pages/Welcome';
import { Gong } from '../pages/Gong';

const AppRouters = {
    Welcome: 'Welcome',
    Gong: 'Gong',
}

const AppStackNavigator = createStackNavigator({
    Welcome: {
        screen: Welcome,
    },
    Gong: {
        screen: Gong,
    }
}, { initialRouteName: 'Welcome' })



export {
    AppStackNavigator as AppStackNavigator,
    AppRouters as AppRouters,
}