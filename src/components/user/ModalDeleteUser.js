import React from "react";
import Modal from 'react-modal';
import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux/user/actions";

export const ModalDeleteUser = ({openModal, closeModal, id}) => {
    const root = document.getElementById('root')
    Modal.setAppElement(root)

    const dispatch = useDispatch()

    const onDeleteUserHandler = () => {
        dispatch(deleteUser(id))
        closeModal()
    }

    const customStyles = {
        content: {
            width: '40%',
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
            isOpen={openModal}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <div className='container'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-12'>
                        <div>
                            <h5 className='text-center'>{`Вы уверены, что хотите User id: ${id}?`}</h5>
                        </div>
                        <div className='text-center'>
                            <button
                                className='btn btn-danger btn-sm'
                                style={{width: 100, marginRight: '10%'}}
                                onClick={onDeleteUserHandler}
                            >
                                Delete
                            </button>
                            <button
                                className='btn btn-secondary btn-sm'
                                style={{width: 100}}
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}