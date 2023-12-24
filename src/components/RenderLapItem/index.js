import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Icon, Text } from "react-native-paper";

export default function index({ item, index, laps }) {
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
}

index.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  laps: PropTypes.array.isRequired,
};
