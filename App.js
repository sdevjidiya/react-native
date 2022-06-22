import "react-native-gesture-handler";
// In App.js in a new project
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import bottom navigate
import BottomNavigation from "./src/Material/BottomNavigation";
import SplashScreen from "./src/Screens/SplashScreen";

// use state

const Stack = createNativeStackNavigator();

function App() {
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowScreen(false);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showScreen ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : null}
        <Stack.Screen name="Header" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
