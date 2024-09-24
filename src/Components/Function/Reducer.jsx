// useReducer is a hook used to manage complex state logic in React components.
// It is especially useful when the state is an object or when multiple state updates are required.
// useRef is a hook used to persist values across renders without causing re-renders.

import React, { useReducer, useRef } from 'react';

const Reducer = () => {
    // initialValue defines the initial state for the form fields.
    const initialValue = {
        name: 'sathis',
        username: 'slsjkr@gmail.com',
        password: '123'
    };

    // The reducer function handles state updates based on action types.
    // It takes two parameters: the current state and the action to perform.
    const reducer = (state, action) => {
        switch (action.type) {
            case 'name': // action.type identifies the type of action to perform (update name in this case)
                return { ...state, name: action.payload }; // Update name in the state with the new value from action.payload
            case 'username': // action.type identifies the update for username
                return { ...state, username: action.payload }; // Update username in the state
            case 'password': // action.type identifies the update for password
                return { ...state, password: action.payload }; // Update password in the state
            default:
                return state; // Return current state if the action type is unknown
        }
    };

    // useReducer hook initializes state and provides the dispatch function to update the state.
    const [state, dispatch] = useReducer(reducer, initialValue);  
    
    // useRef stores form values temporarily without triggering re-renders on input change.
    const tempName = useRef(state.name);   
    const tempUsername = useRef(state.username);
    const tempPassword = useRef(state.password);

    const handleSubmit = (e) => {
        e.preventDefault();
        // On form submission, update the state with the values stored in the refs.
        dispatch({ type: 'name', payload: tempName.current }); // tempName.current holds the latest name value
        dispatch({ type: 'username', payload: tempUsername.current }); // tempUsername.current holds the latest username value
        dispatch({ type: 'password', payload: tempPassword.current }); // tempPassword.current holds the latest password value
        console.log("Form Submitted", state); // Logs the updated state after form submission
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Name: {state.name}</p>
                    <p>Username: {state.username}</p>
                    <p>Password: {state.password}</p>
                </div>
                {/* Input for name, updating tempName with the input value */}
                <input
                    type='text'
                    placeholder='Enter name'
                    onChange={(e) => tempName.current = e.target.value}
                    defaultValue={state.name}
                />
                {/* Input for username, updating tempUsername with the input value */}
                <input
                    type='text'
                    placeholder='Enter username'
                    onChange={(e) => tempUsername.current = e.target.value}
                    defaultValue={state.username}
                />
                {/* Input for password, updating tempPassword with the input value */}
                <input
                    type='password'
                    placeholder='Enter password'
                    onChange={(e) => tempPassword.current = e.target.value}
                    defaultValue={state.password}
                />
                {/* Submit button to trigger form submission */}
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Reducer;
