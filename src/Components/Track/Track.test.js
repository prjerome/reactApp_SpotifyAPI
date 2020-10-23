 import React from 'react';
 import ReactDOM from 'react-dom';
 import Track from './Track';

 it('Track component renders without throwing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Track/>, div);
 });