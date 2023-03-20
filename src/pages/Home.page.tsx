import {SafeAreaView, NativeModules, AppState} from 'react-native';
import React, {useEffect} from 'react';
import Video from 'react-native-video';
import {style} from './Home.style';

const Home = () => {
  const {PipModule} = NativeModules;
  console.log(PipModule);
  useEffect(() => {
    const appstatus = AppState.addEventListener('change', e => {
      if (e === 'background') {
        PipModule.EnterPipMode();
      }
    });
    return () => {
      appstatus.remove();
    };
  }, []);

  return (
    <SafeAreaView>
      <Video
        source={{
          uri: 'https://player.vimeo.com/external/538571502.sd.mp4?s=931e8b30977433ba260a9e08678ac56e13b73aa0&profile_id=165&oauth2_token_id=57447761',
        }}
        style={style.videoBox}
        pictureInPicture={true}
        fullscreen
        posterResizeMode="cover"
        resizeMode="cover"
        repeat={true}
        playInBackground
        poster="https://images.pexels.com/photos/1546035/pexels-photo-1546035.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
    </SafeAreaView>
  );
};

export default Home;
