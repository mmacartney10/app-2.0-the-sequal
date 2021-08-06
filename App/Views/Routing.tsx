import * as React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeScreen, AboutScreen } from 'Views/Screens';

export enum AppScreens {
    Home = 'Home',
    About = 'About'
}

type RootStackParamList = {
    Home: undefined,
    About: undefined
}

type ProfileScreenRouteProp = RouteProp<RootStackParamList, AppScreens>;
type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, AppScreens>;

export type ScreenProps = {
    route: ProfileScreenRouteProp,
    navigation: ProfileScreenNavigationProp
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routing = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={AppScreens.Home}>
            <Stack.Screen name={AppScreens.Home} component={HomeScreen} />
            <Stack.Screen name={AppScreens.About} component={AboutScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routing;
