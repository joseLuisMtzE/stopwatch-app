import React from "react";
import PropTypes from "prop-types";
import { Stopwatch } from "react-native-stopwatch-timer";
import { View } from "react-native";

export default function index({
  stopwatchStart,
  stopwatchReset,
  options,
  stopwatchRef,
}) {
  return (
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
  );
}

index.propTypes = {
  stopwatchStart: PropTypes.bool.isRequired,
  stopwatchReset: PropTypes.bool.isRequired,
  options: PropTypes.object.isRequired,
  stopwatchRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
