import React, { Component } from 'react';
import { connect } from 'react-redux';

import Photo from './Photo';
import OpenPhoto from './OpenPhoto';
import { getTitle } from '../actions/get';
import { addPhotos, clearAddedPhoto } from '../actions/add';


class Photos extends Component{
    state = {
        isOpen: false,
        photos: []
    }


    componentDidMount(){
        try{
            const albumId = `id-${this.props.select.albumId}`;
            const json = localStorage.getItem('photos');
            const photos = JSON.parse(json);
            
            if(photos[albumId]){
                this.props.dispatch(addPhotos( albumId, photos[albumId] ));
                console.log('componentDidMount');
                console.log(photos);
            }
        } catch (e){
            //Do nothing at all
        }
    }

    componentWillUnmount(){
        this.props.dispatch(getTitle(''));
    }
    componentDidUpdate(prevProps, prevState){
        const albumId = `id-${this.props.select.albumId}`;

        console.log(this.props.added);
        //if(this.props.added.albumId.length !== this.state.photos.length) {
            const json = JSON.stringify({[albumId]: this.props.added[albumId]});
            localStorage.setItem('photos', json);
            console.log('componentDidUpdate');
            console.log(json);
        //}
    }
    addPhotos = () => {
        const fileElem = document.getElementById("fileInput");
        fileElem.click();
    }

    handleFile = (e, albumId) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(this.props.added);

        let photos;
        
        reader.onloadend = () => {
            if(this.props.added[albumId]){
                photos = this.props.added[albumId].concat({ name: file.name, url: reader.result });
            } else {
                photos = [{ name: file.name, url: reader.result }];
            }
            this.props.dispatch(addPhotos(albumId, photos));
            console.log(this.props.added);
        }
        reader.readAsDataURL(file)
        
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
        console.log('render');
        let photos = this.props.added[albumId];
        let $imagePreview = null;
        if (photos) {
            $imagePreview = (
                photos.map( (photo, index) => (
                    <div key={index} className="photo-wrapper" onClick={()=>(this.openPhoto(photo.url))}>
                        <p>{photo.name}</p>
                        <div className="photo"></div>
                        <img src={photo.url} alt="img"/>
                    </div>
                ))
            );
        }
        return (
            <div className="container">
                <div className="add-photo" onClick={this.addPhotos}>
                    <input type="file" id="fileInput" onChange={(e) => this.handleFile(e, albumId)}/>
                    <p>+</p>
                </div>
                {$imagePreview}
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
    added: state.added,
    select: state.select,
    getData: state.getData,
    showData: state.showData,
    photos: state.photos
});

export default connect(mapStateToProps)(Photos);