import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClassForms extends Component {
    constructor(props) {
        // The constructor is a special method used for initializing component state  
        super(props); // The super keyword calls the constructor of the parent class
        this.state = {
            name: '',
            email: '',
            message: '',
            nextId: 1 // Initialize nextId for user entries
        };
    }

    // componentDidMount is executed after the component is mounted
    componentDidMount() {
        const existingData = JSON.parse(localStorage.getItem('Users')) || [];
        
        if (existingData.length > 0) {
            // Set nextId based on the last user's id in localStorage
            const lastId = existingData[existingData.length - 1].id || 0;
            this.setState({ nextId: lastId + 1 });
        }
    }

    // handleChange updates the state with input field values
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // handleSubmit stores form data in localStorage and updates the state
    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message, nextId } = this.state;
        const data = { id: nextId, name, email, message };
        const existingData = JSON.parse(localStorage.getItem('Users')) || [];
        
        // Add new user data to existing data
        existingData.push(data);
        localStorage.setItem('Users', JSON.stringify(existingData));

        // Reset the form and update nextId for the next entry
        this.setState((prevState) => ({
            name: '',
            email: '',
            message: '',
            nextId: prevState.nextId + 1,
        }));
    };

    // componentDidUpdate checks for changes in form fields
    // If there are changes in form fields, it logs a message to the console
    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.name !== this.state.name ||
            prevState.email !== this.state.email ||
            prevState.message !== this.state.message
        ) {
            console.log('Form data created.');
        }
    }

    render() {
        const { name, email, message } = this.state;  //Dstruct the state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={this.handleChange}  // handle the name state changes
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={this.handleChange} // handle the email state changes
                    />
                    <textarea
                        name="message"
                        value={message}
                        placeholder="Message"
                        onChange={this.handleChange} // handle the message state changes
                    />
                    <button type="submit">Submit</button>
                </form>
                <Link to="/user">All Users</Link>
            </div>
        );
    }
}

export default ClassForms;
