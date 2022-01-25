import React from "react";
import { View, Text } from 'react-native';
import AuthNavigation from "./src/route/AuthNavigation";

const App = () => {
  return (
    <View style={{flex : 1}}>
      <AuthNavigation />
    </View>
  )
}

export default App;