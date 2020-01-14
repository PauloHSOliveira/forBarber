import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import ReactotronConfig from './src/configs/ReactotronConfig';

import { store, persistor } from './src/store';
import App from './src/App';

export default function mobile() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
}
