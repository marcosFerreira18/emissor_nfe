import Login from './pages/login';
import Home from './pages/home';
import Product from './pages/product';
import Clientes from './pages/clientes';
import Emitter from './pages/emitter';
import Nfe from './pages/nfe';
import WebView from './pages/viewDanfe';

import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

const AppStack = createStackNavigator({
  Home,
  Product,
  Clientes,
  Nfe,
  WebView,
  Emitter
});
const AuthStack = createStackNavigator({ Login });

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