import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import HomeScreen from '../screens/HomeScreen';
import LikesScreen from '../screens/LikesScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BasicInfo from '../screens/BasicInfo';
import NameScreen from '../screens/NameScreen';
import EmailScreen from '../screens/EmailScreen';
import PasswordScreen from '../screens/PasswordScreen';
import BirthScreen from '../screens/BirthScreen';
import LocationScreen from '../screens/LocationScreen';
import GenderScreen from '../screens/GenderScreen';
import TypeScreen from '../screens/TypeScreen';
import DatingType from '../screens/DatingType';
import LookingFor from '../screens/LookingFor';
import HomeTownScreen from '../screens/HomeTownScreen';
import PhotoScreen from '../screens/PhotoScreen';
import PromptsScreen from '../screens/PromptsScreen';
import ShowPromptsScreen from '../screens/ShowPromptsScreen';
import PreFinalScreen from '../screens/PreFinalScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#101010',
                    height: 110,
                    paddingTop: 10
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#989898',
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <FontAwesome6 name="star" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Likes"
                component={LikesScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <FontAwesome6 name="heart" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <FontAwesome6 name="comment" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <FontAwesome6 name="user" size={26} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Basic'
                component={BasicInfo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Name'
                component={NameScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Email'
                component={EmailScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Password'
                component={PasswordScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Birth'
                component={BirthScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Location'
                component={LocationScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Gender'
                component={GenderScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Type'
                component={TypeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Dating'
                component={DatingType}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='LookingFor'
                component={LookingFor}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='HomeTown'
                component={HomeTownScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Photos'
                component={PhotoScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Prompts'
                component={PromptsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='ShowPrompts'
                component={ShowPromptsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='PreFinal'
                component={PreFinalScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

function MainStack(){
    return(
        <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={BottomTabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
    )
}

function StackNavigator() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
}

export default StackNavigator;

const styles = StyleSheet.create({});