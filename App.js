import React from "react";
import { useFonts } from "expo-font";
import Providers from "./navigation/Index";

const customFonts = {
  DMSansRegular: require("./assets/fonts/DMSans-Regular.ttf"),
};

export default function App() {
  return <Providers />;
}
