import React from "react";
import { View, Text } from 'react-native';
import AuthNavigation from "./src/route/AuthNavigation";
import { IdProvider } from "./src/store/ParamProvider";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <IdProvider>
        <AuthNavigation />
      </IdProvider>
    </View>
  )
}

export default App;