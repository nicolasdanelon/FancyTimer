import React from 'react';
import { StyleSheet, View } from 'react-native';

const Pause = () => (
  <View style={styles.pause}>
    <View style={styles.pause_rec} />
    <View style={styles.pause_rec} />
  </View>
);

const Play = () => <View style={styles.triangle} />;

const Action = ({ play }) => (
  <View style={styles.action}>{play ? <Play /> : <Pause />}</View>
);

const styles = StyleSheet.create({
  action: {
    width: 50,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    transform: [{ rotate: '90deg' }],
    marginLeft: 5,
  },
  pause: {
    alignContent: 'center',
    flexDirection: 'row',
  },
  pause_rec: {
    backgroundColor: '#fff',
    width: 6,
    height: 20,
    marginHorizontal: 2,
  },
});

export default Action;
