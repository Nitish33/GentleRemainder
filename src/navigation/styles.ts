import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  drawerContentContainerStyle: {
    overflow: 'visible',
  },

  sceneStyle: {
    zIndex: 10,
    overflow: 'visible',
    backgroundColor: 'transparent',
  },

  drawerContentStyle: {
    overflow: 'visible',
    backgroundColor: 'transparent',
  },

  drawerStyle: {
    zIndex: -10,
    width: '100%',
    overflow: 'visible',
    backgroundColor: 'white',
    position: 'absolute',
  },
});

export default style;
