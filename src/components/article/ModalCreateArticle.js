import React, {useState} from "react";
import Modal from 'react-modal';
import {useDispatch} from "react-redux";
import {createArticle} from "../../redux/article/actions";

export const ModalCreateArticle = ({createModalIsOpen, closeCreateModal}) => {
    const root = document.getElementById('root')
    Modal.setAppElement(root)

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(createArticle(title, text))
        setTitle('')
        setText('')
        closeCreateModal()
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
            border: '10px solid transparent'
        }
    }

    return (
        <Modal
            isOpen={createModalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeCreateModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='row' style={{borderBottom: '1px solid gray'}}>
                            <div className='col-md-11'>
                                <h2>Create Article</h2>
                            </div>
                            <div className='col-md-1'>
                                <button type="button" className="btn-close" aria-label="Close" onClick={closeCreateModal}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">Text</label>
                                <textarea
                                    className="form-control"
                                    id="text"
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm">Crete Article</button>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    )
}