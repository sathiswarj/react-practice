import React, { Component } from 'react';

class ClassUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: [],
        };
    }

    componentDidMount() {
        const userdata = JSON.parse(localStorage.getItem('Users')) || [];
        this.setState({ userdata });

        this.resetInterval= setInterval(()=>{
               this.resetStorage()
        },3600000)
    }

    componentWillUnmount() {   
        if (this.resetInterval) {
            clearInterval(this.resetInterval);
        }
    }

    resetStorage= () =>{
        localStorage.removeItem('Users')
        this.setState({userdata: []})
    }

    
    handleDelete = (id) => {
        const updatedUserData = this.state.userdata.filter(user => user.id !== id);
        this.setState({ userdata: updatedUserData });
        localStorage.setItem('Users', JSON.stringify(updatedUserData));
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.userdata.length > this.state.userdata.length) {
            console.log('A user was deleted.');
        }
    }

   

    render() {
        const { userdata } = this.state;
        return (
            <>
                <div className="list">
                    {userdata.length > 0 ? (
                        userdata.map((user) => (
                            <div key={user.id} className="user-data">
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                                <p>Message: {user.message}</p>
                                <button onClick={() => this.handleDelete(user.id)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <p>No user data found.</p>
                    )}
                </div>
            </>
        );
    }
}

export default ClassUser;
