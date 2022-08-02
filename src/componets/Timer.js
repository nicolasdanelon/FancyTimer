import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Dimensions, StyleSheet, View } from 'react-native';

const thirdOfScreenWidth = Dimensions.get('screen').width / 2.5;

function Timer({ v }) {
  return (
    <View style={styles.wrapperCircle}>
      <View style={styles.ball} />
      <View style={styles.superCircle}>
        <View style={styles.circle}>
          <Svg width={70} height={60}>
            <Path
              d="M58.4292 43.9311C69.3496 32.7184 65.0361 18.9487 60.1606 11.601C55.2852 4.2532 46.7342 -0.508144 37.849 0.535237C30.1485 1.44636 27.5361 5.38475 23.2986 13.6289C20.0938 19.8892 18.3472 23.9158 13.092 22.7989C8.82408 21.9025 9.67463 15.0103 16.8435 5.86971C18.2864 4.03277 16.7524 2.44565 14.6412 2.93061C12.53 3.41556 1.35142 10.8074 0.181921 22.9459C-0.729379 32.3804 1.86783 38.5231 6.07499 41.3887C7.02369 42.0577 8.11163 42.5186 9.26312 42.7394C10.4146 42.9602 11.602 42.9356 12.7427 42.6673C13.7396 42.424 14.7834 42.424 15.7803 42.6673C16.5701 42.9612 17.9523 43.9311 19.2433 44.3425C22.0086 45.3511 24.999 45.6399 27.9158 45.1802C34.2949 44.3425 37.0288 40.7715 41.6916 36.8038C49.058 30.5141 54.4346 39.302 44.2888 44.3425C41.8435 45.5623 37.1503 47.6343 35.0847 50.6322C34.3468 51.4973 33.8745 52.5453 33.7214 53.6572C33.5684 54.769 33.7408 55.9001 34.219 56.9219C35.3429 59.1115 37.6971 59.5965 38.0768 58.2445C38.6073 56.5531 39.669 55.0636 41.1145 53.9828C45.4431 50.6322 51.5033 51.0584 58.4292 43.9311Z"
              fill={v}
            />
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperCircle: {
    borderRadius: thirdOfScreenWidth + 60,
    width: thirdOfScreenWidth + 60,
    height: thirdOfScreenWidth + 60,
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: '#7c799b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  superCircle: {
    borderRadius: thirdOfScreenWidth + 30,
    width: thirdOfScreenWidth + 30,
    height: thirdOfScreenWidth + 30,
    backgroundColor: '#9588e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderRadius: thirdOfScreenWidth,
    width: thirdOfScreenWidth,
    height: thirdOfScreenWidth,
    backgroundColor: '#7f6cfb',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  ball: {
    borderWidth: 5,
    borderColor: '#fcfcfe',
    backgroundColor: '#fff',
    width: 12,
    height: 12,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 100,
    top: -8,
  },
});

export default Timer;
