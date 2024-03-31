import React from 'react';
import CounterState from './CounterState';
import CounterDispatch from './CounterDispatch';
function CounterApp(props) {
    return (
        <div>
            <CounterState/>
            <CounterDispatch/>
         
        </div>
    );
}

export default CounterApp;