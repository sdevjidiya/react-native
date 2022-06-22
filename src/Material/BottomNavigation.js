import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// icons import
import Ionicons from "react-native-vector-icons/Ionicons";
// import navigate screen
import Home from "../bottomNavigateScreen/Home";
import Profile from "../bottomNavigateScreen/Profile";
import Setting from "../bottomNavigateScreen/Setting";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator shifting={true}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <BottomNavigateIcons name="home-outline" />,
          tabBarColor: "blue",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarIcon: () => <BottomNavigateIcons name="settings-outline" />,
          tabBarColor: "green",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <BottomNavigateIcons name="person-outline" />,
          tabBarColor: "red",
        }}
      />
    </Tab.Navigator>
  );
}

const BottomNavigateIcons = (props) => {
  return <Ionicons name={props.name} size={20} color={"white"} />;
};
