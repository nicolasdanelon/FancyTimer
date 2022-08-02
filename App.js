import React, { useState, useReducer } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Timer from './src/componets/Timer';
import { Options, SetOption } from './src/componets/Options';
import Action from './src/componets/Action';

const Time = () => <Text style={styles.timeClock}>00:20</Text>;

export const actions = {
  run: 0x00,
  stop: 0x01,
};

const App = () => {
  const [active, setActive] = useState(1);

  const timerColors = {
    active: '#ffffff',
    paused: '#473e8d',
  };

  const initialState = {
    breatheAction: false,
    isRunning: false,
    timerColor: timerColors.paused,
  };

  const [data, dispatch] = useReducer((state, action) => {
    switch (action) {
      case actions.run:
        return {
          ...state,
          isRunning: true,
          timerColor: timerColors.active,
        };
      case actions.stop:
        return {
          ...state,
          isRunning: false,
          timerColor: timerColors.paused,
        };
      default:
        return state;
    }
  }, initialState);

  const { breatheAction, timerColor, isRunning } = data;

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <LinearGradient style={styles.wrapper} colors={['#bcbcc7', '#816efd']}>
        <Text style={styles.white}>Breathe &amp; relax</Text>
        {isRunning ?
          <Text style={styles.white}>{breatheAction ? 'Inhale' : 'Exhale'}</Text>
          :
          <Text style={styles.white}>{' '}</Text>
        }
        <Timer v={timerColor} />
        {isRunning ?
          <Time />
          :
          <Text style={styles.white}>{' '}</Text>
        }
        <Action play={false} onClick={dispatch} />
        <Options>
          {[1, 2, 3].map((i, index) => {
            return (
              <SetOption
                value={i}
                isActive={active === i}
                setActive={setActive}
                key={`set_option_${index}`}
              />
            );
          })}
        </Options>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  timeClock: {
    color: '#ffffff',
    marginTop: 30,
  },
  white: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 30,
    fontWeight: '500',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
