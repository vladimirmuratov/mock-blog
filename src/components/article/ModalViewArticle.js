import React from "react";
import Modal from 'react-modal';

export const ModalViewArticle = ({modalIsOpen, closeModal, id, title, body}) => {
    const root = document.getElementById('root')
    Modal.setAppElement(root)

    const customStyles = {
        content: {
            width: '50%',
            height: 'auto',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid gray'
        }
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <div className='container'>
                <div className='row justify-content-md-center'>
                    <div className='col'>
                        <div className='row' style={{borderBottom: '1px solid gray'}}>
                            <div className='col-md-11'>
                                <h2>{`Article Info id: ${id}`}</h2>
                            </div>
                            <div className='col-md-1'>
                                <button type="button" className="btn-close" aria-label="Close"
                                        onClick={closeModal}/>
                            </div>
                        </div>
                        <div style={{marginTop: 10}}>
                            <h5>{title}</h5>
                        </div>
                        <div>
                            <p>{body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}