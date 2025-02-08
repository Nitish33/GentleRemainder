import {View} from 'react-native';
import React, {PropsWithChildren} from 'react';

import styles from './styles';

interface Props extends PropsWithChildren {}

export default function ScreenContainer(props: Props) {
  return <View style={styles.container}>{props.children}</View>;
}
