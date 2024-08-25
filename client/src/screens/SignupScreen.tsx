import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';

type Props = {
  navigation: any;
};

const SignupScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.9,
      includeBase64: true,
    }).then((image: ImageOrVideo | null) => {
      setAvatar('data:image/jpeg;base64,' + image.data);
    });
  };


  const submitHandler = (e: any) => {
    Alert.alert('Login successful');

    // ToastAndroid.showWithGravity(
    //   'Login successful',
    //   ToastAndroid.LONG,
    //   ToastAndroid.BOTTOM,
    // );
  };

  return (
    <View className="flex-[1] items-center justify-center">
      <View className="w-[70%]">
        <Text className="text-[25px] font-[600] text-center">Sign Up</Text>

        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={text => setName(text)}
          className="w-full h-[35px] border border-[#343434] px-2 my-2"
        />

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

        <TouchableOpacity className="flex-row items-center"  onPress={uploadImage}>
          <Image
            source={{
              uri: avatar
                ? avatar
                : 'https://cdn-icons-png.flaticon.com/128/568/568717.png',
            }}
            className="w-[30px] h-[30px] rounded-full"
          />
          <Text className="text-black pl-2">
            Upload image
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-6">
          <Text
            className="w-full h-[40px] text-[#fff] text-center pt-[8px] text-[20px] bg-black"
            onPress={submitHandler}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <Text className="pt-3" onPress={() => navigation.navigate('Login')}>
          Already have an account? <Text>Sign in</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignupScreen;
