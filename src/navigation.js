import { createStackNavigator, createAppContainer  } from 'react-navigation'
import SelectCountry from './screens/selectCountry'
import SelectPlan from './screens/selectPlan'


const RootStack = createStackNavigator(
  {
    SelectCountry: {
      screen: SelectCountry,
    },
    SelectPlan: {
      screen: SelectPlan,
    },
  },
  {
    initialRouteName: 'SelectPlan',
    headerMode: 'none ',
    gesturesEnabled: false,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  }
)

export default createAppContainer(RootStack)
