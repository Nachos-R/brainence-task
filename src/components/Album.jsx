import React, { Component } from 'react';
import { connect } from 'react-redux';

import {savePhotos, clearPhotos } from '../actions/photos';
import { saveRandPhotos } from '../actions/randPhotos';

class Album extends Component {
    componentDidMount() {
        if(this.props.id){
            const albumId = this.props.id;
            this.props.dispatch(clearPhotos());
            fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(response => response.json())
            .then(data => {
                const photoList = data.filter(photo => photo.albumId === albumId);
                const randomPhoto = photoList[Math.floor(Math.random() * photoList.length)];
                this.props.dispatch(savePhotos(photoList, albumId));
                this.props.dispatch(saveRandPhotos(randomPhoto.thumbnailUrl));
            });
        }
    }

    handleClick = () => {
        this.props.onClick(this.props.id, this.props.title);
    }

    render(){
        return (
            <div className="album-wrapper" style={this.props.style}>
                <h1>{this.props.title}</h1>
                <div className="album" onClick={this.handleClick}></div>
                <img src={this.props.url} alt="img" />
            </div>
        );
    }
}

export default connect()(Album);