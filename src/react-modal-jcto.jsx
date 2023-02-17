import "./modal.css"
import React from 'react';

/**
 * Creates a customizable Modal
 * @param {modalBackgroundStyle} inline styling for modal background
 * @param {modalBodyStyle} inline styling for modal body
 * @param {modalButtonStyle} inline styling for modal button
 * @param {closeModalFunction} function to close modal
 * @param {modalTextStyle} inline styling for modal text
 * @param {modalText} string for modal text
 * @returns displays a Modal
 */
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
