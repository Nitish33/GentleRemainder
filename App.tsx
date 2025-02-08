import React from 'react';

import MainRoute from './src/navigation/MainRoute';
import {StatusBar, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <GestureHandlerRootView>
        <StatusBar hidden />
        <MainRoute />
      </GestureHandlerRootView>
    </View>
  );
}
