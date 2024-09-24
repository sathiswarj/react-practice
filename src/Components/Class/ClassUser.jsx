import React, { Component } from 'react';

class ClassUser extends Component {
    constructor(props) {
        // Constructor is a special method for initializing an object created within a class.
        super(props);  // 'super' calls the constructor of the parent class 
        this.state = {
            userdata: [], // Array to store user data
        };
    }

    // Fetch user data from localStorage after the component mounts
    componentDidMount() {
        const userdata = JSON.parse(localStorage.getItem('Users')) || [];
        this.setState({ userdata });

        // Set an interval to reset the storage every hour
        this.resetInterval = setInterval(this.resetStorage, 3600000); // 3600000 ms = 1 hour
    }

    // Clear the interval when the component unmounts
    componentWillUnmount() {
        if (this.resetInterval) {
            clearInterval(this.resetInterval);
        }
    }

    // Reset localStorage by clearing user data (if applicable)
    resetStorage = () => {
        localStorage.removeItem('Users');
        this.setState({ userdata: [] });
    };

    // Delete a user based on the provided id
    handleDelete = (id) => {
        const updatedUserData = this.state.userdata.filter(user => user.id !== id); // Remove user with the matching id
        this.setState({ userdata: updatedUserData });
        localStorage.setItem('Users', JSON.stringify(updatedUserData)); // Update localStorage with the modified user data
    };

    // Handle input changes (if form fields were to be added)
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // Log a message after a user is deleted
    componentDidUpdate(prevProps, prevState) {
        if (prevState.userdata.length > this.state.userdata.length) { 
            // If the previous state length is greater than the current length, it means a user was deleted
            console.log('A user was deleted.');
        }
    }

    render() {
        const { userdata } = this.state;
        return (
            <div className="list">
                {userdata.length > 0 ? (  // Check if user data exists before displaying it
                    userdata.map((user) => (
                        <div key={user.id} className="user-data">
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Message: {user.message}</p>
                            <button onClick={() => this.handleDelete(user.id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No user data found.</p>  // Display this message if no users are found
                )}
            </div>
        );
    }
}

export default ClassUser;
