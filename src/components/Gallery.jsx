import React, { Component } from 'react';
import { connect } from 'react-redux';

import Album from './Album';
import { getAlbums, getTitle } from '../actions/get';


class Gallery extends Component{
    constructor(props){
        super(props);
        this.openAlbum = this.openAlbum.bind(this);
    }
    
    componentDidMount(){    
        if(this.props.login.loggedIn){

            const userId = this.props.select.userId

            fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then(response => response.json())
            .then(data => {
                const albumList = data.filter(album => album.userId === userId)
                this.props.dispatch(getAlbums(albumList));
                console.log(this.props.getData.albums);
            });
        }
    }

    openAlbum = (id, title) => {
        this.props.history.push(`/album/:${id}`);   
        this.props.dispatch(getTitle(title));     
    }

    render() {
        return (
            <div>
                {this.props.getData.albums ? this.props.getData.albums.map(album => (
                    <div>
                        <Album key={album.id} onClick={this.openAlbum} {...album}/>
                        {
                            this.props.select.rndPhoto ? 
                            <img src={this.props.select.rndPhoto.url} alt="randomImage" />
                            : false
                        }
                    </div>
                )) : false}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    select: state.select,
    login: state.login,
    getData: state.getData
});

export default connect(mapStateToProps)(Gallery);