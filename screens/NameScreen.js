/* eslint-disable react-native/no-inline-styles */
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const NameScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Email');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7fae1' }}>
      <Text style={{ marginTop: 50, textAlign: 'center', color: 'gray' }}>
        NO BACKGROUND CHECKS ARE CONDUCTED
      </Text>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              backgroundColor: '#f7fae1',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesome6Icon name="newspaper" size={26} color="black" />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              fontFamily: 'GezzaPro-Bold',
            }}
          >
            What's your name?
          </Text>
          <TextInput
            value={firstName}
            onChangeText={text => {
              setFirstName(text);
            }}
            placeholder="First Name (required)"
            placeholderTextColor={'#BEBEBE'}
            style={{
              width: 340,
              marginVertical: 10,
              marginTop: 25,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          />
          <TextInput
            value={lastName}
            onChangeText={text => {
              setLastName(text);
            }}
            placeholder="Last Name"
            placeholderTextColor={'#BEBEBE'}
            style={{
              width: 340,
              marginVertical: 10,
              marginTop: 25,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          />
        </View>
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 30,
            marginLeft: 'auto',
            width: 44,
            height: 44,
            borderColor: '#581845',
            borderRadius: 22,
            borderWidth: 3,
            backgroundColor: '#581845',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FontAwesome6Icon name="arrow-right" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NameScreen;
