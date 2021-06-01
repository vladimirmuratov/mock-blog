import React from "react";
import Modal from 'react-modal';
import {useSelector} from "react-redux";

export const ModalViewUser = ({id, openModal, closeModal}) => {
    const root = document.getElementById('root')
    Modal.setAppElement(root)

    const user = useSelector(state => state.user.users.find(u => u.id === id))

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
            isOpen={openModal}
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
                                <h2>{`User Info id: ${id}`}</h2>
                            </div>
                            <div className='col-md-1'>
                                <button type="button" className="btn-close" aria-label="Close"
                                        onClick={closeModal}/>
                            </div>
                        </div>
                        <div style={{marginTop: 10}}>
                            <h5>{user.name}</h5>
                        </div>
                        <div>
                            <p><u>user name</u>: {user.username}</p>
                            <p><u>email</u>: {user.email}</p>
                            <p><u>street</u>: {user.address.street}</p>
                            <p><u>suite</u>: {user.address.suite}</p>
                            <p><u>city</u>: {user.address.city}</p>
                            <p><u>zipcode</u>: {user.address.zipcode}</p>
                            <p><u>phone</u>: {user.phone}</p>
                            <p><u>website</u>: {user.website}</p>
                            <p><u>company name</u>: {user.company.name}</p>
                            <p><u>company catchPhrase</u>: {user.company.catchPhrase}</p>
                            <p><u>bs</u>: {user.company.bs}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}