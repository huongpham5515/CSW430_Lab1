/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import EmployeeScreen from './Components/Q1.js';
import SumDigitDisplay from './Components/Q2.js';
import MinNumber from './Components/Q3.js';
import Hailstone from './Components/Q4.js';

function App() {
  const [activeScreen, setActiveScreen] = useState('Q6-1');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'Q6-1 Huong':
        return <EmployeeScreen />;
      case 'Q6-2 Huong':
        return <SumDigitDisplay />;
      case 'Q6-3 Huong':
        return <MinNumber />;
      case 'Q6-4 Huong':
        return <Hailstone />;
      default:
        return <EmployeeScreen />;
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navbar}>
        {['Q6-1 Huong', 'Q6-2 Huong', 'Q6-3 Huong', 'Q6-4 Huong'].map((screenName) => (
          <TouchableOpacity
            key={screenName}
            style={[
              styles.navButton,
              activeScreen === screenName && styles.activeButton,
            ]}
            onPress={() => setActiveScreen(screenName)}
          >
            <Text
              style={[
                styles.navButtonText,
                activeScreen === screenName && styles.activeButtonText,
              ]}
            >
              {screenName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.content}>{renderScreen()}</View>
    </ScrollView>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    fontFamily: 'sans-serif',
  },
  navbar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingTop: 20,
  },
  navButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#ddd',
  },
  navButtonText: {
    fontSize: 16,
    color: '#333',
  },
  activeButtonText: {
    fontWeight: 'bold',
  },
  content: {
    marginTop: 10,
  },
});

export default App;
