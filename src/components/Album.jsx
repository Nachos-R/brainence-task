import React, { Component } from 'react';
import { connect } from 'react-redux';

import {savePhotos, clearPhotos } from '../actions/photos';
import { saveRandPhotos } from '../actions/randPhotos';

class Album extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }    
    
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
                console.log('get photos---------------------------------------')
                console.log(this.props.photos);
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

const mapStateToProps = (state) => ({
    showData: state.showData,
    photos: state.photos,
    randPhotos: state.randPhotos
});


export default connect(mapStateToProps)(Album);