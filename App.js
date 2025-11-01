import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {

  return (
    <SafeAreaView style={stylesheet.flex1}>
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
