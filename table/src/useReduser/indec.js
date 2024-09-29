import React, { useReducer } from 'react'
function int(state) {
    return {
        counter: state
    }
}
function actions(state, action) { 
    if (action === 'Increament') {
        return { counter: state.counter + 1 }
    }
    else if (action === 'Decrement') {
        return { counter: state.counter - 1 }
    }

    else if (action === 'red') {
        return int(0);
    }
}

export default function Indec() {
    const [state, dispatch] = useReducer(actions, 0, int);

    return (
        <div>count :{state.counter}
            <hr />
            <button onClick={() => dispatch('Increament')}>incrennt</button>
            <button onClick={() => dispatch('Decrement')}>decrmaint</button>
            <button onClick={() => dispatch('red')}>decrmaint</button>


        </div>
    )
}
