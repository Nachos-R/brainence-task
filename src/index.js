import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
//import { selectUser, selectAlbum, selectPhoto } from './actions/select';


const store = configureStore();

// store.dispatch(selectUser(4));
// store.dispatch(selectAlbum(5));
// store.dispatch(selectPhoto(6));

store.subscribe(() => {
    console.log('subscribe', store.getState());
});

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
