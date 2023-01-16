/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  NativeModules,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import BackgroundTimer from 'react-native-background-timer';

const ONE_HOUR = 4000; //3600000;

const App = () => {
  const [buttonLabel, setButtonLabel] = useState('Start');
  const [intervalId, setIntervalId] = useState(-1);
  const [timeInHours, setTimeInHours] = useState('1');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const timeAnnouncer = () => {
    const timeNow = new Date().toLocaleTimeString();
    const hoursMinutes = timeNow.split(':');

    NativeModules.TimeAnnouncer.CalloutTime(
      `The time is ${hoursMinutes[0]} ${
        hoursMinutes[1] === '00' ? '' : hoursMinutes[1]
      }`,
    );
  };

  const clearTime = (id: number) => {
    NativeModules.TimeAnnouncer.StopCallout();
    clearInterval(id);
    BackgroundTimer.stop();
  };

  const buttonOnPress = () => {
    const currentLabel = buttonLabel;
    if (currentLabel === 'Start') {
      const timeNumber = isNaN(Number(timeInHours)) ? 1 : Number(timeInHours);
      BackgroundTimer.start(); // https://github.com/ak1394/react-native-tts/issues/18
      // interval for 1 hour 3600000 ms
      const getId = setInterval(
        timeAnnouncer,
        timeNumber < 1 ? ONE_HOUR * timeNumber : ONE_HOUR,
      );
      setIntervalId(getId);

      setTimeout(() => clearTime(getId), timeNumber * ONE_HOUR + 1000); // Set timeout 1 second after the number of hours
    } else {
      clearTime(intervalId);
    }

    setButtonLabel(currentLabel === 'Start' ? 'Stop' : 'Start');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Text>Time in Hours: </Text>
        <TextInput
          placeholder="Time in hours"
          style={styles.hourInput}
          keyboardType="decimal-pad"
          value={timeInHours}
          onChangeText={value => {
            setTimeInHours(value);
          }}
        />
        <Text style={styles.warning}>
          * Works only for 0.5, 1, etc. Not 1.5 or 2.5
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={buttonOnPress}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    backgroundColor: 'blue',
    width: 300,
    height: 100,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 40,
  },

  hourInput: {
    marginVertical: 8,
    padding: 8,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  warning: {
    fontWeight: '700',
    marginBottom: 16,
  },
});

export default App;
