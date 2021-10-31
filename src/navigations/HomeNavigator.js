/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View } from 'react-native';


const Contacts = () => {
    return (
        <View>
      <Text>Hi</Text>
        </View>
    );
};

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (<HomeStack.Navigator>
        <HomeStack.Screen name="Contact" component={Contacts}></HomeStack.Screen>
    </HomeStack.Navigator>);
}

export default HomeNavigator;