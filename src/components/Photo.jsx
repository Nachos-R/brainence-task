import React, { Component } from 'react';
import { connect } from 'react-redux';

class Photo extends Component{
    
    openPhoto = (url) => {
        this.props.onClick(url)
    }
    
    render() {
        return (
            <div className="photo-wrapper" onClick={()=>(this.openPhoto(this.props.url))}>
                <p>{this.props.title}</p>
                <div className="photo"></div>
                <img src={this.props.thumbnailUrl} alt="photo" />
            </div>
        );
    }
}

export default connect()(Photo);