import React, { Component } from 'react';
import { connect } from 'react-redux';

import Album from './Album';
import { getAlbums, getTitle } from '../actions/get';
import { showAlbums, showPhotos } from '../actions/show';
import { selectAlbum } from '../actions/select';
import { clearRandPhotos } from '../actions/randPhotos';


class Gallery extends Component{
    componentDidMount(){    
        if(this.props.login.loggedIn && !this.props.showData.displayAlbums){

            const userId = this.props.select.userId

            fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then(response => response.json())
            .then(data => {
                const albumList = data.filter(album => album.userId === userId);
                this.props.dispatch(clearRandPhotos());
                this.props.dispatch(getAlbums(albumList));
                this.props.dispatch(showAlbums(true));
            });
        }
    }

    componentWillUnmount(){
        this.props.dispatch(showAlbums(false));
    }

    openAlbum = (id, title) => {
        this.props.dispatch(showPhotos(true));
        this.props.history.push(`/album/:${id}`);
        this.props.dispatch(getTitle(title));
        this.props.dispatch(selectAlbum(id));
    }

    render() {
        return (
            <div className="container">                
                {this.props.showData.displayAlbums ? this.props.getData.albums.map((album, index) => (
                        <Album key={album.id} onClick={this.openAlbum} url={this.props.randPhotos[index]}  {...album}/>
                )) : false}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    select: state.select,
    login: state.login,
    getData: state.getData,
    showData: state.showData,
    randPhotos: state.randPhotos
});

export default connect(mapStateToProps)(Gallery);