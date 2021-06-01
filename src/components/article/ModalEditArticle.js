import React, {useState} from "react";
import Modal from 'react-modal';
import {updateArticle} from "../../redux/article/actions";
import {useDispatch} from "react-redux";

export const ModalEditArticle = ({isOpen, closeModal, id, body, title}) => {
    const root = document.getElementById('root')
    Modal.setAppElement(root)

    const dispatch = useDispatch()
    const [titleEdit, setTitleEdit] = useState(title)
    const [bodyEdit, setBodyEdit] = useState(body)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(updateArticle(id, titleEdit, bodyEdit))
        closeModal()
    }

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
            isOpen={isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <form onSubmit={onSubmitHandler}>
                <div className='container'>
                    <div className='row justify-content-md-center'>
                        <div className='col'>
                            <div className='row' style={{borderBottom: '1px solid gray'}}>
                                <div className='col-md-11'>
                                    <h2>{`Edit Article id: ${id}`}</h2>
                                </div>
                                <div className='col-md-1'>
                                    <button type="button" className="btn-close" aria-label="Close"
                                            onClick={closeModal}/>
                                </div>
                            </div>
                            <div style={{marginTop: 10}}>
                                <input
                                    className='form-control'
                                    type='text'
                                    style={{marginBottom: 10}}
                                    value={titleEdit}
                                    onChange={e => setTitleEdit(e.target.value)}
                                />
                            </div>
                            <div>
                                <textarea
                                    className='form-control'
                                    style={{marginBottom: 10}} rows='5'
                                          value={bodyEdit}
                                    onChange={e => setBodyEdit(e.target.value)}
                                />
                            </div>
                            <button type='submit' className='btn btn-success btn-sm'>Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}