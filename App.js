import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Icon, IconButton, PaperProvider, Text } from "react-native-paper";
import { Stopwatch } from "react-native-stopwatch-timer";
import { convertMillisecondsToTime } from "./src/components/utils/convertMillisecondsToTime";
import { Linking } from "react-native";

export default function App() {
  const stopwatchRef = useRef(null);
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [stopwatchReset, setStopwatchReset] = useState(false);
  const [laps, setLaps] = useState([]);

  const toggleStopwatch = () => {
    setStopwatchStart(!stopwatchStart);
    setStopwatchReset(false);
  };

  const resetStopwatch = () => {
    setStopwatchStart(false);
    setStopwatchReset(true);
    setLaps([]);
  };

  const handleLap = () => {
    const currentTime = stopwatchRef.current.state.elapsed;
    const formattedTime = convertMillisecondsToTime(currentTime);
    setLaps((prevLaps) => [formattedTime, ...prevLaps]);
  };

  const renderLapItem = ({ item, index }) => {
    return (
      <View
        key={index}
        style={{
          paddingTop: 8,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <View
          style={{
            padding: 8,
            height: 60,
            justifyContent: "space-between",
            backgroundColor: "#EBDEFA",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 8,
          }}
          icon="timer"
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon color="#6B4FAA" source="timer" size={20} />
            <Text
              variant="titleMedium"
              style={{ fontWeight: "bold", marginLeft: 4 }}
            >
              Lap {laps.length - index}:
            </Text>
          </View>
          <Text variant="titleMedium">{item}</Text>
        </View>
      </View>
    );
  };

  const options = {
    container: {
      borderRadius: 5,
    },
    text: {
      fontWeight: "bold",
      fontSize: 40,
      color: "#FFF",
      letterSpacing: 4,
    },
  };

  return (
    <PaperProvider>
      <StatusBar backgroundColor="#6B4FAA" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View
          style={{
            width: "100%",
            height: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stopwatch
            laps
            msecs
            start={stopwatchStart}
            reset={stopwatchReset}
            options={options}
            ref={stopwatchRef}
          />
        </View>

        <FlatList
          data={laps}
          renderItem={renderLapItem}
          keyExtractor={(item, index) => index.toString()}
          style={{
            borderRadius: 8,
            backgroundColor: "#fff",
            overflow: "hidden",
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            height: 120,
            alignContent: "center",
            alignItems: "center",
            bottom: 0,
            position: "relative",
            width: "100%",
            alignSelf: "center",
          }}
        >
          <IconButton
            icon="restart"
            mode="contained"
            disabled={
              stopwatchStart === false &&
              stopwatchRef.current.state.elapsed === 0
                ? true
                : false
            }
            size={50}
            onPress={() => resetStopwatch()}
          />
          <IconButton
            icon={stopwatchStart ? "pause" : "play"}
            mode="contained"
            size={50}
            onPress={() => toggleStopwatch()}
          />
          <IconButton
            icon="flag"
            mode="contained"
            disabled={stopwatchStart === true ? false : true}
            size={50}
            onPress={() => handleLap()}
          />
        </View>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => {
            Linking.openURL("https://github.com/joseLuisMtzE");
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Icon color="#fff" source="github" size={20} />

            <Text
              style={{ ...styles.text, marginLeft: 2 }}
              variant="bodyMedium"
            >
              joseLuisMtzE
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B4FAA",
    marginTop: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },
  text: {
    color: "#fff",
  },
});
