import React from 'react';

import Modal from '../modal/Modal';

const DeleteBadgeModal = (props) => (
    <Modal 
        isOpen={props.isOpen} 
        onClose={props.onClose}>

        <div className="DeleteBadgeModal">
            <h1>Are You Sure?</h1>
            <p>You are about to delete this badge.</p>

            <div>
                <button 
                    onClick={props.onDeleteBadge}
                    className="btn btn-danger mr-4">
                    Delete
                </button>
                <button 
                    onClick={props.onClose} 
                    className="btn btn-light">
                    Cancel
                </button>
            </div>
        </div>
    </Modal>
);

export default DeleteBadgeModal;

