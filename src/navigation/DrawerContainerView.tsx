import React from 'react';
import {Dimensions, Platform, Pressable, StatusBar, View} from 'react-native';
import {useDrawerProgress} from '@react-navigation/drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Colors from '../Utils/Colors';

import Animated, {
  interpolate,
  Extrapolation,
  useAnimatedStyle,
} from 'react-native-reanimated';

const DeviceHeight = Dimensions.get('screen').height;
const DeviceWidth = Dimensions.get('screen').width;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function DrawerContainerView(props) {
  const animated = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      flex: 1,
      overflow: 'hidden',
      borderRadius: interpolate(
        animated.value,
        [0, 0.25],
        [0, 24],
        Extrapolation.CLAMP,
      ),

      transform: [
        {
          translateY: interpolate(
            animated.value,
            [0, 1],
            [0, -DeviceHeight / 2],
          ),
        },
        {
          translateX: interpolate(
            animated.value,
            [0, 1],
            [0, DeviceWidth / 2 - 50],
          ),
        },
        {rotate: `${interpolate(animated.value, [0, 1], [0, -5])}deg`},
        {
          translateY: interpolate(
            animated.value,
            [0, 1],
            [0, DeviceHeight / 2 + 70],
          ),
        },
      ],
    };
  });

  const {top} = useSafeAreaInsets();

  const topPadding =
    Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : top;

  const notchAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: Colors.LIGHT,
      paddingTop: interpolate(
        animated.value,
        [0, 1],
        [topPadding, topPadding / 2],
      ),
    };
  }, [topPadding]);

  return (
    <View style={{flex: 1}}>
      <AnimatedPressable style={animatedStyle}>
        <Animated.View style={notchAnimatedStyle} />
        {props.children}
      </AnimatedPressable>
    </View>
  );
}
