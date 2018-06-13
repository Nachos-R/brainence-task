import React, { Component } from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';
import { getPhotos } from '../actions/get';
import { selectRandomPhoto } from '../actions/select';
import { showAlbums } from '../actions/show';

class Album extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    componentDidMount() {
        if(this.props.id){
            const albumId = this.props.id;
    
            fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(response => response.json())
            .then(data => {
                const photoList = data.filter(photo => photo.albumId === albumId)
                this.props.dispatch(getPhotos(photoList));
                const randomPhoto = photoList[Math.floor(Math.random() * photoList.length)];
                this.props.dispatch(selectRandomPhoto(randomPhoto));
                this.props.dispatch(showAlbums(false));
                console.log(randomPhoto);
            });
        }
    }

    handleClick = () => {
        this.props.onClick(this.props.id, this.props.title);
        this.props.dispatch(showAlbums(true));
    }

    render(){
        return (
            <div onClick={this.handleClick}>
            <h1>{this.props.title}</h1>
                {this.props.showData.display && (this.props.getData.photos ? this.props.getData.photos.map(photo => (                    
                    <Photo key={photo.id} {...photo}/>
                )) : false)}
            </div>
        );
    }
    
}

const mapStateToProps = (state) => ({
    getData: state.getData,
    showData: state.showData
});


export default connect(mapStateToProps)(Album);