import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

function Root() {
    // const store = configureStore();
    // window.store = store
    return(
        <h1>Todos!</h1>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('content');
    ReactDOM.render(<Root/>, root);
});