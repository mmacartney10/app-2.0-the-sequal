import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined,
    About: undefined
}

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type ScreenProps = {
    route: ProfileScreenRouteProp,
    navigation: ProfileScreenNavigationProp
}

function HomeScreen({ route, navigation } : ScreenProps) {

    const navigate = () => {
        navigation.navigate('About');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.name} Screen</Text>
            <TouchableHighlight onPress={() => navigate() }>
                <Text>Go to Not Home Screen</Text>
            </TouchableHighlight>
        </View>
    );
}

function AboutScreen({ route, navigation } : ScreenProps) {

    const navigate = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.name} Screen</Text>
            <TouchableHighlight onPress={() => navigate() }>
                <Text>Go to Home Screen</Text>
            </TouchableHighlight>
        </View>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
