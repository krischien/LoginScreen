import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import tailwind from 'twrnc'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = { 
    Login: undefined;
    Signup: undefined;
  };
  
  // Use this type for navigation
  type SignupcreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

export default function LoginScreen() {
    const navigation = useNavigation<SignupcreenNavigationProp>();
  return (
    <View style={tailwind`bg-white h-full w-full`}>
        <StatusBar style='light' />
     <Image style={tailwind`h-full w-full absolute`} source={require('../../assets/images/background.png')} />

     <View style={tailwind`flex-row justify-around w-full absolute`}>
        <Animated.Image entering={FadeInUp.delay(200).duration(2000).springify()} style={{height:225, width:90}} source={require('../../assets/images/light.png')} />
        <Animated.Image entering={FadeInUp.delay(400).duration(2000).springify()}style={{height:160, width:65}} source={require('../../assets/images/light.png')} />
     </View>

    <View style={tailwind`h-full w-full flex justify-around pt-40 pb-10`}>
        <View style={tailwind` flex items-center`}>
            <Animated.Text entering={FadeInUp.duration(1000).springify()} style={tailwind`text-white font-bold tracking-wider text-5xl`}>Login</Animated.Text>
        </View>

        <View style={tailwind`flex items-center mx-4 space-y-4`}>
            <Animated.View entering={FadeInDown.duration(1000).springify()} style={tailwind`bg-black/5 p-5 rounded-2xl w-full`}>
             <TextInput placeholder='Email' placeholderTextColor={'gray'}/>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} style={tailwind`bg-black/5 p-5 rounded-2xl w-full my-5`}>
             <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} style={tailwind`w-full`}>
                <TouchableOpacity style={tailwind`w-full bg-sky-400 p-3 rounded-2xl mb-3`}>
                    <Text style={tailwind`text-xl font-bold text-white text-center`}>Login</Text>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} style={tailwind`flex-row justify-center`}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={tailwind`text-sky-600`}>Sign up</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    </View>

    </View>
  )
}