import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Slider from 'react-native-slider';
import Moment from 'moment';
import { FontAwesome5 } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const soundObject = new Audio.Sound();

const Player = () => {
  const [seconds, setSeconds] = useState(0);
  const [play, setPlay] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [loadInRequest, setLoadInRequest] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackLength, setTrackLength] = useState(300);
  const [timeElapsed, setTimeElapsed] = useState('0:00');
  const [timeRemaining, setTimeRemaining] = useState('3:40');

  useEffect(() => {
    let interval = null;

    if (isPlaying && seconds < trackLength - 1) {
      interval = setInterval(() => {
        changeTime(seconds + 1);
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isPlaying && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, seconds]);

  async function loadAudio(){
    setLoadInRequest(true);

    const source = { 
      uri: 'https://upload-ex-audio.s3.amazonaws.com/fa9974601cbfa15071042f259b639c8c-Golden%20Empire%20-%20The%20126ers.mp3',
    };

    const initialStatus = {};
    const downloadFirst = true;

    try {
      await soundObject.loadAsync(source, initialStatus, downloadFirst);
      const soundData = await soundObject.getStatusAsync();
      setTimeRemaining(Moment.utc(soundData.durationMillis).format("m:ss"));
      setTrackLength(soundData.durationMillis/1000);
      setIsLoad(true);
      //await soundObject.unloadAsync();
    } catch (error) {
      console.log(error);
      // An error occurred!
    }

    setLoadInRequest(false);
  }

  async function playSound(){
    await soundObject.playAsync();
    setIsPlaying(true);
  }

  async function pauseSound(){
    await soundObject.pauseAsync();
    setIsPlaying(false);
  }

  function changeTime(seconds) {
    setTimeElapsed(Moment.utc(seconds * 1000).format("m:ss"));
    setTimeRemaining(Moment.utc((trackLength - seconds) * 1000).format("m:ss"));
  };

  async function handleChangeTime(seconds){
    await pauseSound();

    await soundObject.setPositionAsync(seconds * 1000);
    changeTime(seconds);
    setSeconds(seconds);

    await playSound();
  }

  async function toggleSoundState() {
    if(loadInRequest){
      return;
    }
    
    if(!isLoad){
      await loadAudio();
    }

    if(play) {
      setPlay(false);
      pauseSound();
    } else {
      setPlay(true);
      playSound();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 32 }}>
        <TouchableOpacity>
          <FontAwesome5 name="backward" size={25} color="#fff"></FontAwesome5>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButtonContainer} onPress={toggleSoundState}>
          {!play ? (
            <FontAwesome5
              name="play"
              size={35}
              color="#fff"
              style={[styles.playButton, { marginLeft: 8 }]}
            ></FontAwesome5>
        ) : (
            <FontAwesome5
              name="pause"
              size={35}
              color="#fff"
              style={[styles.playButton, { marginLeft: 8 }]}
            ></FontAwesome5>
          )
          }
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="forward" size={25} color="#fff"></FontAwesome5>
        </TouchableOpacity>
      </View>

      <View style={{ margin: 32 }}>
        <Slider
          minimumValue={0}
          maximumValue={trackLength}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          minimumTrackTintColor="#fff"
          value={seconds}
          onValueChange={seconds => handleChangeTime(seconds)}
        ></Slider>
        <View style={{ marginTop: -12, flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.textLight, styles.timeStamp]}>{timeElapsed}</Text>
          <Text style={[styles.textLight, styles.timeStamp]}>{timeRemaining}</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

export default Player;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
    },
    textLight: {
        color: "#fff"
    },
    text: {
        color: "#fff"
    },
    textDark: {
        color: "#fff"
    },
    coverContainer: {
        marginTop: 32,
        width: 250,
        height: 250,
        shadowColor: "#5D3F6A",
        shadowOffset: { height: 15 },
        shadowRadius: 8,
        shadowOpacity: 0.3
    },
    cover: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    track: {
        height: 2,
        borderRadius: 1,
        backgroundColor: "#FFF"
    },
    thumb: {
        width: 8,
        height: 8,
        backgroundColor: "#3D425C"
    },
    timeStamp: {
        fontSize: 11,
        fontWeight: "500"
    },
    playButtonContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 32,
        shadowRadius: 30,
        shadowOpacity: 0.5
    }
});
