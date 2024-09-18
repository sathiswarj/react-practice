import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ClassForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            nextId: 1
        };
    }

    componentDidMount() {
        const existingData = JSON.parse(localStorage.getItem('Users')) || [];
        
        if (existingData.length > 0) {
            const lastId = existingData[existingData.length - 1].id || 0;
            this.setState({ nextId: lastId + 1 });
        }
       
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message, nextId } = this.state;
        const data = { id: nextId, name, email, message };
        const existingData = JSON.parse(localStorage.getItem('Users')) || [];
        existingData.push(data);
        localStorage.setItem('Users', JSON.stringify(existingData));
        this.setState((prevState) => ({
            name: '',
            email: '',
            message: '',
            nextId: prevState.nextId + 1,
        }));
    };

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
        const { name, email, message } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <textarea
                        name="message"
                        value={message}
                        placeholder="Message"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <Link to="/user">All User</Link>
            </div>
        );
    }
}

export default ClassForms;
