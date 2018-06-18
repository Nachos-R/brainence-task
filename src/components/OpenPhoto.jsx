import React from 'react';
import Modal from 'react-modal';

const OpenPhoto = (props) => {
    return (
        <Modal
            isOpen={props.isOpen}
            closeTimeoutMS={200}
            className="open-photo"
        >
            <div className="open-photo-wrapper">
                <img src={props.url} alt="opened" />
                <button className="modal-button" onClick={props.onClick}>X</button>
            </div>
        </Modal>
    );
}

export default OpenPhoto;