import React, {memo, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import styles from './styles';

import Animated, {
  withTiming,
  interpolate,
  Extrapolation,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {
  useDrawerProgress,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function DrawerContent(props: DrawerContentComponentProps) {
  const progress = useDrawerProgress();

  const navigation = useNavigation();

  const drawerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: interpolate(progress.value, [0, 1], [-50, 50])},
        {translateX: interpolate(progress.value, [0, 1], [0, 0])},
      ],
    };
  });

  const [index, updateIndex] = useState(0);
  const animated = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        animated.value,
        [2, 3],
        [130, 150],
        Extrapolation.CLAMP,
      ),
      transform: [
        {translateY: interpolate(animated.value, [0, 1], [0, 40 + 16])},
      ],
    };
  });

  const onChangeIndex = (index: number) => {
    updateIndex(index);
    animated.value = withTiming(index, {duration: 100});
  };

  return (
    <AnimatedPressable
      onPress={() => {
        navigation.dispatch(DrawerActions.closeDrawer());
      }}
      style={[styles.container, drawerStyle]}>
      <Text style={styles.title}>Beka</Text>

      <View style={{rowGap: 16}}>
        <DrawerItem
          name="Start"
          index={0}
          onPress={onChangeIndex}
          selected={index === 0}
        />
        <DrawerItem
          name="Your Cart"
          index={1}
          onPress={onChangeIndex}
          selected={index === 1}
        />
        <DrawerItem
          name="Favourite"
          index={2}
          onPress={onChangeIndex}
          selected={index === 2}
        />
        <DrawerItem
          name="Your Orders"
          index={3}
          onPress={onChangeIndex}
          selected={index === 3}
        />

        <Animated.View style={[styles.indicator, animatedStyle]} />
      </View>

      <View style={styles.divider} />

      <DrawerItem name="Sign Out" index={0} onPress={() => {}} />
    </AnimatedPressable>
  );
}

const DrawerItem = memo(
  (props: {
    name: string;
    index: number;
    selected?: boolean;
    onPress: (index: number) => void;
  }) => {
    const {name, index, selected, onPress} = props;

    const navigation = useNavigation();

    return (
      <Pressable
        hitSlop={24}
        style={styles.itemContainer}
        onPress={() => {
          onPress?.(index);
          navigation.dispatch(DrawerActions.closeDrawer());
        }}>
        <Text
          style={[
            styles.item,
            {
              color: selected ? 'rgba(222, 118, 110, 1)' : 'white',
            },
          ]}>
          {name}
        </Text>
      </Pressable>
    );
  },
);
