// Play component

import React, { Component } from "react";
import { TextInput } from "react-native";

export default function LoginTextInput({ inText, style }) {
  const [value, onChangeText] = React.useState(inText);

  return (
    <TextInput
      style={style}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
}
