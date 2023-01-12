import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Elso from './Elso'
import Bevetel from './Bevetel'
import Megjelenit from './megjelenit'
const IP= require('./Ipcim');

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Elso_lap({ navigation }) {
  return (
   <Elso />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Első" component={Elso_lap} />
        <Drawer.Screen name="Bevétel" component={Bevetel_lap} />
        <Drawer.Screen name="megjelenit" component={Megjelenit_lap} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Bevetel_lap({ navigation }) {
  return (
   <Bevetel />
  );
}


function Megjelenit_lap({ navigation }) {
  return (
   <Megjelenit />
  );
}