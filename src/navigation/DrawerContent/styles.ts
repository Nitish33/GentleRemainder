import {StyleSheet} from 'react-native';
import Colors from '../../Utils/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderTopLeftRadius: 32,
    backgroundColor: Colors.BG,
    height: '100%',
    paddingTop: 100,
    paddingLeft: 32,
  },

  title: {
    fontSize: 24,
    paddingLeft: 24,
    color: Colors.LIGHT,
    fontWeight: '900',
    marginBottom: 50,
  },

  divider: {
    width: 130,
    marginTop: 50,
    marginVertical: 30,
    height: 1,
    backgroundColor: Colors.DIVIDER,
  },

  item: {
    fontSize: 24,
    color: Colors.LIGHT,
  },

  indicator: {
    height: 40,
    borderRadius: 12,
    width: 130,
    backgroundColor: 'rgba(64, 41, 61, 1)',
    marginLeft: -10,
    zIndex: -1,
    position: 'absolute',
  },

  itemContainer: {
    height: 40,
    justifyContent: 'center',
  },
});

export default styles;
