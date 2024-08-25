import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
  Alert
} from 'react-native';
import React, {useState} from 'react';

type Props = {
  navigation: any;
};

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e: any) => {
    Alert.alert('Login successful')

    ToastAndroid.showWithGravity(
      'Login successful',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
    );
  };

  return (
    <View className="flex-[1] items-center justify-center">
      <View className="w-[70%]">
        <Text className="text-[25px] font-[600] text-center">Login</Text>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={text => setEmail(text)}
          className="w-full h-[35px] border border-[#343434] px-2 my-2"
        />

        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={text => setPassword(text)}
          className="w-full h-[35px] border border-[#343434] px-2 my-2"
          secureTextEntry={true}
        />

        <TouchableOpacity className="mt-6">
          <Text
            className="w-full h-[40px] text-[#fff] text-center pt-[8px] text-[20px] bg-black"
            onPress={submitHandler}>
            Login
          </Text>
        </TouchableOpacity>

        <Text className="pt-3" onPress={() => navigation.navigate('Signup')}>
          Don't have an account? <Text>Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
