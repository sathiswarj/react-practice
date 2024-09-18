import React, { useContext, useState } from 'react';
import { UserContext } from './Context';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const { addUser, deleteUser, data } = useContext(UserContext)
    //   const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const id = Date.now();
    //     const data = { id, name, email, message };

    //     let existingDataString = localStorage.getItem('Userdata');
    //     let existingData = existingDataString ? JSON.parse(existingDataString) : [];

    //     existingData.push(data);

    //     localStorage.setItem('Userdata', JSON.stringify(existingData));

    //     console.log(`id: ${id}, Name: ${name}, Email: ${email}, Message: ${message}`);

    //     setName('');
    //     setEmail('');
    //     setMessage('');
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Date.now();
        const userData = { id, name, email, message };
        addUser(userData)
        setName('');
        setEmail('');
        setMessage('');
    }



    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            deleteUser(id);
        }
    };



    return (
        <>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type='text'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder='Enter your message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type='submit'>Submit</button>
                </form>

                <div className='form-class'>
                    {data.length > 0 ? (
                        data.map((user) => (
                            <div key={user.id}>
                                <p>Name : {user.name}</p>
                                <p>Email : {user.email}</p>
                                <p>Message : {user.message}</p>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>

                            </div>
                        ))
                    ) : (
                        <p>No users found</p>
                    )}
                </div>

            </div>
        </>
    );
};

export default Form;
