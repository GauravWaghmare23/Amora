import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={stylesheet.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={stylesheet.container}>
        <Text>Hinge Dating app</Text>
      </View>
    </SafeAreaView>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1:{
    flex:1
  }
});


export default App;
