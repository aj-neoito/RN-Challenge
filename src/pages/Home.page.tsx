import {SafeAreaView, NativeModules, AppState} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {style} from './Home.style';
import {Pressable} from 'react-native';

const Home = () => {
  const {PipModule} = NativeModules;
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const appstatus = AppState.addEventListener('change', e => {
      if (e === 'background') {
        PipModule.EnterPipMode();
        console.log(e);
      }
    });
    return () => {
      appstatus.remove();
    };
  }, []);

  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          setPaused(!paused);
        }}>
        <Video
          paused={paused}
          source={{
            uri: 'https://player.vimeo.com/external/538571502.sd.mp4?s=931e8b30977433ba260a9e08678ac56e13b73aa0&profile_id=165&oauth2_token_id=57447761',
          }}
          style={style.videoBox}
          pictureInPicture
          fullscreen
          posterResizeMode="cover"
          resizeMode="cover"
          repeat={true}
          playInBackground
          controls={paused}
          poster="https://images.pexels.com/photos/1546035/pexels-photo-1546035.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
