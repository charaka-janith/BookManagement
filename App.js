import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import DrawerPanel from "./src/screens/DrawerPanel";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";
import Signup from "./src/screens/Signup";
import Splash from "./src/screens/Splash";

const DrawerNavigation = createDrawerNavigator({
  DrawerPanel: DrawerPanel,
  Home: Home,
  Login: Login,
  Profile: Profile,
  Signup: Signup,
  Splash: Splash
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    DrawerPanel: DrawerPanel,
    Home: Home,
    Login: Login,
    Profile: Profile,
    Signup: Signup,
    Splash: Splash
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  // await Promise.all([Font.loadAsync({})]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    console.log('loading finished'.repeat(50));
  setLoadingComplete(true);
}

export default App;
