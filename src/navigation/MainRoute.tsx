import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import style from './styles';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Contact from '../screens/Contact';
import Favourite from '../screens/Favourite';
import DrawerContainerView from './DrawerContainerView';
import DrawerContent from './DrawerContent/DrawerContent';

import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Favourite" component={Favourite} />
    </Stack.Navigator>
  );
};

const AppBottomTab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          overflow: 'visible',
          backgroundColor: 'transparent',
        },
      }}>
      <Stack.Screen name="BottomTab" component={HomeStack} />
      <Stack.Screen name="Contact" component={Contact} />
    </BottomTab.Navigator>
  );
};

const AppDrawer = () => {
  const screenOptions: DrawerNavigationOptions = useMemo(() => {
    return {
      headerShown: false,
      drawerType: 'back',
      overlayColor: 'transparent',
      sceneStyle: style.sceneStyle,
      drawerStyle: style.drawerStyle,
      drawerContentStyle: style.drawerContentStyle,
      drawerContentContainerStyle: style.drawerContentContainerStyle,
    } as const;
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={screenOptions}>
      <Drawer.Screen name="start">
        {props => (
          <DrawerContainerView {...props}>
            <AppBottomTab />
          </DrawerContainerView>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default function MainRoute() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}
