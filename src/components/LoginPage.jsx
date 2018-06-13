import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/select';
import { getTitle } from '../actions/get';
import { isLogged } from '../actions/login';

class LoginPage extends Component{
    state={
        user: '',
        id: '',
        loggedIn: false
    };

    onInputChange = (e) => {
        const id = e.target.value;
        this.setState(() => ({ id }));
    };

    onSubmit = (e) => {
        e.preventDefault();     
        fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(response => response.json())
        .then(json => res(json));

        const res = (result) => {  
            console.log(result);
            if(result.id){
                this.setState(()=>({user: result, id: result.id, loggedIn: true }));
                this.props.dispatch(getTitle(result.username));  
                this.props.dispatch(selectUser(result.id));  
                this.props.dispatch(isLogged(true));
                this.props.history.push(`/gallery/:${result.id}`);
            }
            
        };
    };
    
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.id} onChange={this.onInputChange}/>
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getData: state.getData,
        select: state.select,
        login: state.login
    };
};

export default connect(mapStateToProps)(LoginPage);