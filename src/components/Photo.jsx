import React from 'react';
import { connect } from 'react-redux';

const Photo = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            {props.showData.display && <img src={props.url} alt="img" />}
        </div>
    );
}

const mapStateToProps = (state) => ({
    showData: state.showData
});

export default connect(mapStateToProps)(Photo);