import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import { ScreenProps, AppScreens } from 'Views/Routing';

import { increment, decrement, incrementByAmount } from 'counter-reducer';
import { useAppDispatch, useAppSelector } from 'hooks';

export function HomeScreen({ route, navigation } : ScreenProps) {

    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()
    const [ amountToIncrease, setAmountToIncrease ] = useState('1');

    const navigate = () => {
        navigation.navigate(AppScreens.About);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.name} Screen</Text>
            <Text>{count}</Text>

            <TouchableHighlight onPress={() => navigate() } style={styles.button}>
                <Text>Go to About Screen</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => dispatch(increment()) } style={styles.button}>
                <Text>Increment</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => dispatch(decrement()) } style={styles.button}>
                <Text>Decrement</Text>
            </TouchableHighlight>

            <TextInput
                style={styles.input}
                onChangeText={setAmountToIncrease}
                value={amountToIncrease}
                keyboardType={"numeric"}
            />

            <TouchableHighlight onPress={() => dispatch(incrementByAmount(parseInt(amountToIncrease))) } style={styles.button}>
                <Text>Increment by amount</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: '#F00',
        width: '100%',
        height: 40,
        marginBottom: 40,
        textAlign: 'center',
        alignItems: 'center'
    }
});
