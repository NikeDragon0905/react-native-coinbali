import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/store';
import AppNavigator from './src/AppNavigator';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { MyCustomFont } from './src/assets/fonts/Montserrat-Regular.ttf';
import Notification from './src/components/Notification';

export default function App() {
  const [fontsLoaded] = useFonts({
    MyCustomFont: MyCustomFont,
  });

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
        <Notification />
      </View>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});