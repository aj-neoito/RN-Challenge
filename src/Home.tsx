import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const Home = () => {
  return (
    <SafeAreaView>
      <Video
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        style={{
          height: '100%',
          width: '100%',
        }}
        controls
        onBuffer={e => {
          console.log(e);
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
