import React from 'react';
import CounterState from './CounterState';
import CounterDispatch from './CounterDispatch';
function CounterApp(props) {
    return (
        <div>
        <p> app is live </p>
            <CounterState/>
            <CounterDispatch/>
         
        </div>
    );
}

export default CounterApp;
