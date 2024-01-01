import { Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon, Text } from "react-native-paper";

export default function GithubUser() {
  return (
    <TouchableOpacity
      testID="github-button"
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

        <Text style={styles.text} variant="bodyMedium">
          joseLuisMtzE
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    marginLeft: 2,
  },
});
