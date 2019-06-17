import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const ModalMarkup = ({ children, onClose }) => (
    <div className="Modal">
        <div className="Modal__container">
            <button onClick={onClose} className="Modal__close-button">
                ×
            </button>

            {children}
        </div>
    </div>
)

const Modal = (props) => {
    if(!props.isOpen) {
        return null
    }
    return  ReactDOM.createPortal(
                ModalMarkup(props)
                ,document.getElementById('modal')
            )
        
    
}

export default Modal;

