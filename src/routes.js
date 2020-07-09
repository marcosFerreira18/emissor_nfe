import Login from './pages/login';
import Home from './pages/home';
import Product from './pages/product';
import Clientes from './pages/clientes';
import Emitter from './pages/emitter';
import Nfe from './pages/nfe';
import WebView from './pages/viewDanfe';
import Register from './pages/register';
import Address from './pages/address';
import Upload from './pages/uploadImages';

import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

const AppStack = createStackNavigator({
  Upload,
  Home,
  Product,
  Clientes,
  Nfe,
  WebView,
  Emitter,
  Upload
});
const AuthStack = createStackNavigator({
  Login,
  Register,
  Address
});

export const createRootNavigator = (signedIn = false, params = null) => {
  return createAppContainer(
    createSwitchNavigator(
      {
        App: { screen: AppStack, path: '' },
        Auth: { screen: AuthStack },

      }, {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "App" : "Auth",
      navigationOptions: {
        gesturesEnabled: false
      }
    }
    )
  );
};