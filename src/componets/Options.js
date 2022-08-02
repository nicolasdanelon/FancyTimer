import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const MiniClockIcon = () => <View style={styles.miniClock}><View style={styles.miniClockHands} /></View>;

const Options = ({ children }) => <View style={styles.options}>{children}</View>;

const SetOption = ({ value, isActive, setActive }) => {
  let theStyle = isActive
    ? { ...styles.set_option, ...styles.active_option }
    : styles.set_option;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={theStyle}
      onPress={() => {
        setActive(value);
      }}>
      <MiniClockIcon />
      <Text style={{ color: '#fff' }}>
        {value} min
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  active_option: {
    opacity: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  options: {
    width: Dimensions.get('screen').width / 1.5,
    height: 30,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  set_option: {
    opacity: 0.4,
    width: Dimensions.get('screen').width / 5,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  miniClock: {
    borderRadius: 10,
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 5,
  },
  miniClockHands: {
    width: 5,
    height: 7.5,
    borderWidth: 1,
    marginLeft: 4,
    borderLeftColor: '#fff',
    borderBottomColor: '#fff',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
  },
});

export { Options, SetOption };
