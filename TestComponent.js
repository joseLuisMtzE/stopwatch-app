import React, { useState, useRef } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

const TestApp = () => {
  const [timerStart, setTimerStart] = useState(false);
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [timerReset, setTimerReset] = useState(false);
  const [stopwatchReset, setStopwatchReset] = useState(false);
  const [laps, setLaps] = useState([]);
  const [timeController, setTimeController] = useState(false);

  const totalDuration = 90000;

  const stopwatchRef = useRef(null);
  const timerRef = useRef(null);

  const toggleTimer = () => {
    setTimerStart(!timerStart);
    setTimerReset(false);
  };

  const resetTimer = () => {
    setTimerStart(false);
    setTimerReset(true);
  };

  const toggleStopwatch = () => {
    setStopwatchStart(!stopwatchStart);
    setStopwatchReset(false);
  };

  const resetStopwatch = () => {
    setStopwatchStart(false);
    setStopwatchReset(true);
    setLaps([]);
  };

  const getFormattedTime = (time) => {
    // Use the time as needed
    if (timeController) {
      console.log(time);
      setTimeController(false);
      setLaps([...laps, time]);
    }
  };

  const handleTimerComplete = () => {
    alert("custom completion function");
  };

  const handleLap = () => {
    if (stopwatchRef.current) {
      setTimeController(true);
      getFormattedTime();
      // stopwatchRef.current.props.getTime.then((time) => {
      //   setLaps([...laps, time]);
      // });
    }
  };

  const renderLapItem = ({ item, index }) => {
    return (
      <View
        key={index}
        style={{
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        }}
      >
        <Text>
          Lap {index + 1}: {item}
        </Text>
      </View>
    );
  };

  const options = {
    container: {
      backgroundColor: "#000",
      padding: 5,
      borderRadius: 5,
      width: 220,
    },
    text: {
      fontSize: 30,
      color: "#FFF",
      marginLeft: 7,
    },
  };

  return (
    <View>
      <Stopwatch
        laps
        msecs
        start={stopwatchStart}
        reset={stopwatchReset}
        options={options}
        getTime={getFormattedTime}
        ref={stopwatchRef}
      />
      <TouchableHighlight onPress={toggleStopwatch}>
        <Text style={{ fontSize: 30 }}>
          {!stopwatchStart ? "Start" : "Stop"}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={resetStopwatch}>
        <Text style={{ fontSize: 30 }}>Reset</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={handleLap}>
        <Text style={{ fontSize: 30 }}>Lap</Text>
      </TouchableHighlight>
      <FlatList
        data={laps}
        renderItem={renderLapItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <Timer
        totalDuration={totalDuration}
        msecs
        start={timerStart}
        reset={timerReset}
        options={options}
        handleFinish={handleTimerComplete}
        getTime={getFormattedTime}
        ref={timerRef}
      />
      <TouchableHighlight onPress={toggleTimer}>
        <Text style={{ fontSize: 30 }}>{!timerStart ? "Start" : "Stop"}</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={resetTimer}>
        <Text style={{ fontSize: 30 }}>Reset</Text>
      </TouchableHighlight> */}
    </View>
  );
};

AppRegistry.registerComponent("TestApp", () => TestApp);

export default TestApp;
