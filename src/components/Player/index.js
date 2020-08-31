import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import Slider from "react-native-slider";
import Moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Player extends React.Component {
    state = {
        isPlaying: true,
        trackLength: 300,
        timeElapsed: "0:00",
        timeRemaining: "5:00"
    };

    changeTime = seconds => {
        this.setState({ timeElapsed: Moment.utc(seconds * 1000).format("m:ss") });
        this.setState({ timeRemaining: Moment.utc((this.state.trackLength - seconds) * 1000).format("m:ss") });
    };

    handlePlayPause = async () => {
      const isPlaying = this.state

      this.setState({
        isPlaying: !isPlaying
      })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 32 }}>
                    <TouchableOpacity>
                        <FontAwesome5 name="backward" size={25} color="#fff"></FontAwesome5>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.playButtonContainer} onPress={this.handlePlayPause}>
                      {this.state.isPlaying ? (
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
                        maximumValue={this.state.trackLength}
                        trackStyle={styles.track}
                        thumbStyle={styles.thumb}
                        minimumTrackTintColor="#fff"
                        onValueChange={seconds => this.changeTime(seconds)}
                    ></Slider>
                    <View style={{ marginTop: -12, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeElapsed}</Text>
                        <Text style={[styles.textLight, styles.timeStamp]}>{this.state.timeRemaining}</Text>
                    </View>
                </View>

            </SafeAreaView>
        );
    }
}

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
