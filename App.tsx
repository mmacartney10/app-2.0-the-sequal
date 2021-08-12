import * as React from 'react';
import { View, Text } from 'react-native'
import Routing from 'Views/Routing';
import { Provider } from 'react-redux';
import store from 'store';

function App() {
    return (
        <Provider store={store}>
            <Routing />
        </Provider>
    );
}

export default App;
