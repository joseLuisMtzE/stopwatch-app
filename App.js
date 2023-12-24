import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { IconButton, PaperProvider } from "react-native-paper";
import { convertMillisecondsToTime } from "./src/utils/convertMillisecondsToTime";
import { GithubUser, RenderLapItem, Stopwatch } from "./src/components";

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
    return <RenderLapItem item={item} index={index} laps={laps} />;
  };

  return (
    <PaperProvider>
      <StatusBar backgroundColor="#6B4FAA" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Stopwatch
          options={styles.stopwatch.options}
          stopwatchRef={stopwatchRef}
          stopwatchReset={stopwatchReset}
          stopwatchStart={stopwatchStart}
        />

        <FlatList
          data={laps}
          renderItem={renderLapItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
        />

        <View style={styles.buttons.container}>
          <IconButton
            icon="restart"
            mode="contained"
            disabled={stopwatchStart === false ? true : false}
            size={50}
            onPress={() => resetStopwatch()}
          />
          <IconButton
            icon={stopwatchStart ? "pause" : "play"}
            mode="contained"
            size={70}
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
        <GithubUser />
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
  buttons: {
    container: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      height: 120,
      alignContent: "center",
      alignItems: "center",
      bottom: 0,
      position: "relative",
      width: "100%",
      alignSelf: "center",
    },
  },
  flatList: {
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  stopwatch: {
    options: {
      container: {
        borderRadius: 5,
      },
      text: {
        fontWeight: "bold",
        fontSize: 40,
        color: "#FFF",
        letterSpacing: 4,
      },
    },
  },
});
