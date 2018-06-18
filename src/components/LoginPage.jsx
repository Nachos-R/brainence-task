import React, { Component } from 'react';
import Modal from 'react-modal';

import { connect } from 'react-redux';
import { selectUser } from '../actions/select';
import { getUsername } from '../actions/get';
import { isLogged } from '../actions/login';

Modal.setAppElement('#root');

class LoginPage extends Component{
    state = {
        id: '',
        error: ''
    };

    componentDidMount(){
        this.props.dispatch(isLogged(false));
    }

    onInputChange = (e) => {
        const id = e.target.value;
        this.setState(() => ({ id }));
    };

    onSubmit = (e) => {
        e.preventDefault();     
        fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(response => response.json())
        .then(result => {
            if(result.id){
                this.setState(()=>({ id: result.id, error: '' }));
                this.props.dispatch(getUsername(result.username));  
                this.props.dispatch(selectUser(result.id));  
                this.props.dispatch(isLogged(true));
                this.props.history.push(`/gallery/:${result.id}`);
            } else {
                this.setState(() => ({
                    error: 'User does not exist'
                }));
            }
        });
    };
    
    render(){
        return (
            <Modal
                isOpen={true}
                className="modal"
            >
                <form onSubmit={this.onSubmit} className="login-form">
                    <h2>Enter your id</h2>
                    <input value={this.state.id} onChange={this.onInputChange}/>
                    <button>Login</button>
                    {this.state.error && <span>{this.state.error}</span>}
                </form>
            </Modal>
        );
    }
}

export default connect()(LoginPage);