import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Timer from './src/componets/Timer';
import { Options, SetOption } from './src/componets/Options';
import Action from './src/componets/Action';

const Time = () => <Text style={styles.timeClock}>00:20</Text>;

const App = () => {
  const [action, setAction] = useState(true);
  const [active, setActive] = useState(1);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#bcbcc7',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" />
      <LinearGradient style={styles.wrapper} colors={['#bcbcc7', '#816efd']}>
        <Text style={styles.white}>Breathe &amp; relax</Text>
        <Text style={styles.white}>{action ? 'Inhale' : 'Exhale'}</Text>
        {/* <Timer v="#fff" /> */}
        <Timer v="#473e8d" />
        <Time />
        <Action play={false} />
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
