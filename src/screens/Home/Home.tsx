import React from 'react';
import RemixIcon from 'react-native-remix-icon';
import {Pressable, Text, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import Colors from '../../Utils/Colors';
import ScreenContainer from '../../components/ScreenContainer';

export default function Home() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <ScreenContainer>
      <View style={{paddingHorizontal: 0}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={openDrawer}>
            <RemixIcon name="menu-line" color={Colors.DIVIDER} />
          </Pressable>

          <Text style={{fontSize: 18, marginLeft: 12, color: Colors.DIVIDER}}>
            START
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
}
