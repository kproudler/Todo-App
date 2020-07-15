import React from 'react';
import ReactDOM from 'react-dom';

function Root() {
    return(
        <h1>Todos!</h1>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('content');
    ReactDOM.render(<Root/>, root);
});