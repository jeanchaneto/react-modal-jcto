import "./modal.css"
import React from 'react';

const Modal = ({ modalBackgroundStyle, modalBodyStyle, modalButtonStyle, closeModalFunction, modalTextStyle, modalText }) => {
    return (
        <div className="modal"
            style={modalBackgroundStyle}>
            <div className="modal-body"
                style={modalBodyStyle}
            >
                <button className="modal-button"
                    style={modalButtonStyle}
                    onClick={closeModalFunction}
                >
                    X
                </button>
                <p className="modal-text"
                    style={modalTextStyle}
                >
                    {modalText}
                </p>
            </div>
        </div>
    );
}

export default Modal;
