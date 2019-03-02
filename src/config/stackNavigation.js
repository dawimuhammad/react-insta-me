import { createStackNavigator} from 'react-navigation'
import DetailScreen from '../screens/Home/Detail';
import MainScreen from '../screens/Home';

const stackNav = createStackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions:({navigation}) => ({
            title: "Home",
        })
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: (props) => ({
            title: "Detail",
        })
    }
})

export default stackNav;