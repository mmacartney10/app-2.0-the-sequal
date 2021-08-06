import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { ScreenProps, AppScreens } from 'Views/Routing';

export function HomeScreen({ route, navigation } : ScreenProps) {

    const navigate = () => {
        navigation.navigate(AppScreens.About);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.name} Screen</Text>
            <TouchableHighlight onPress={() => navigate() }>
                <Text>Go to About Screen</Text>
            </TouchableHighlight>
        </View>
    );
}
