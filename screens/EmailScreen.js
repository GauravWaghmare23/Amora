/* eslint-disable react-native/no-inline-styles */
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const EmailScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate('Password');
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7fae1' }}>
      <View style={{ marginTop: 100, marginHorizontal: 20 }}>
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
            <FontAwesome6Icon name="envelope" size={26} color="black" />
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
            Please provide a valid email
          </Text>
          <Text style={{ color: 'gray', fontSize: 10 }}>
            Email verification help us keep the account secure
          </Text>
          <TextInput
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
            placeholder="Email (required)"
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
          <Text style={{ color: 'gray', fontSize: 12 }}>
            Note: We will not share your email with anyone
          </Text>
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

export default EmailScreen;
