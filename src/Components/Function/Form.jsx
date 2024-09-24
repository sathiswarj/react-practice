// useState is used for managing the state within a component.
// It provides two values: the current state and a function to update that state.

// useContext is used for managing shared state across multiple components without needing to pass props manually at every level.

import React, { useContext, useState } from 'react';
import { UserContext } from './Context';

const Form = () => {
    // Local state for name, email, and message fields in the form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    // Destructure addUser, deleteUser, and data from the UserContext
    const { addUser, deleteUser, data } = useContext(UserContext);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload on form submission
        const id = Date.now(); // Generate a unique ID for the user based on the current timestamp
        const userData = { id, name, email, message }; // Collect user data from form
        addUser(userData); // Add new user to the context
        // Reset form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    // Handle user deletion
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            deleteUser(id); // Remove user from the context using the deleteUser function
        }
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Update name state on input change
                    required
                />
                <input
                    type='email'  
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                    required
                />
                <textarea
                    placeholder='Enter your message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} // Update message state on input change
                    required
                />
                <button type='submit'>Submit</button>
            </form>

            {/* Displaying user details */}
            <div className='form-class'>
                {data.length > 0 ? (
                    data.map((user) => (
                        <div key={user.id}> {/* Assigning id for every user */}
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Message: {user.message}</p>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </div>
        </div>
    );
};

export default Form;
