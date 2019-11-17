import React from 'react';
import { Navigation } from "react-native-navigation";
import TravelScreen from '../Screens/TravelScreen'
import Article from '../Screens/Article'
export function registerScreens(){
    Navigation.registerComponent("TravelScreen", () => TravelScreen);
    Navigation.registerComponent("Article", () => Article);
}

