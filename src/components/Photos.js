import React, { Component } from 'react';
import { connect } from 'react-redux';

import Photo from './Photo';
import OpenPhoto from './OpenPhoto';
import { getTitle } from '../actions/get';


class Gallery extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            url: ''
        }
    }

    componentWillUnmount(){
        this.props.dispatch(getTitle(''));
    }

    openPhoto = (url) => {
        this.setState(() => ({
            isOpen: true,
            url
        }));
    }

    closeModal = () => {
        this.setState(() => ({
            isOpen: false
        }));
    }
    
    render() {
        const albumId = `id-${this.props.select.albumId}`;
        console.log(this.props.photos[albumId]);
        return (
            <div className="container">
               {                   
                this.props.showData.displayPhotos ? 
                    this.props.photos[albumId].photos.map(photo => (
                        <Photo onClick={this.openPhoto} key={photo.id} {...photo} />
                    ))
                : false
               }
               <OpenPhoto isOpen={this.state.isOpen} url={this.state.url} onClick={this.closeModal}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    select: state.select,
    getData: state.getData,
    showData: state.showData,
    photos: state.photos
});

export default connect(mapStateToProps)(Gallery);