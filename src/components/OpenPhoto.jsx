import React from 'react';
import Modal from 'react-modal';

const OpenPhoto = (props) => {
    return (
        <Modal
            isOpen={props.isOpen}
            closeTimeoutMS={200}
            className="open-photo"
        >
            <img src={props.url} alt="opened" />
            <button className="modal-button" onClick={props.onClick}>X</button>
        </Modal>
    );
}

export default OpenPhoto;