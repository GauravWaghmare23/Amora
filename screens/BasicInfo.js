/* eslint-disable react-native/no-inline-styles */
import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const BasicInfo = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f7fae1',
      }}
    >
      <View style={{ marginTop: 80 }}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'GezzaPro-Bold',
            marginLeft: 20,
          }}
        >
          You're one of a kind.
        </Text>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'GezzaPro-Bold',
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          You're profile should be too.
        </Text>
      </View>
      <View>
        <LottieView
          style={{
            height: 260,
            width: 300,
            alignSelf: 'center',
            marginTop: 40,
            justifyContent: 'center',
          }}
          source={require('../assets/love.json')}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate('Name')}
        style={{ padding: 15, marginTop: 'auto', backgroundColor: '#FF0000' }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: 15,
          }}
        >
          Enter Basic Info
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default BasicInfo;
