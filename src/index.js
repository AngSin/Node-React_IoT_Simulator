import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';

import reducers from './reducers'
import styles from '../styles.css';
import App from './containers/App';
import { ENGINE_METHOD_PKEY_METHS } from 'constants';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)()

export const store = createStore(
    reducers,
    compose(applyMiddleware(ReduxPromise))
);

function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Provider store={ store }>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
}

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        render(NextApp);
    });
}

