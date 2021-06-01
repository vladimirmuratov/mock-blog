import React, {useState} from "react";
import {ModalViewArticle} from "./ModalViewArticle";
import {ModalEditArticle} from "./ModalEditArticle";
import {ModalDeleteArticle} from "./ModalDeleteArticle";

export const Article = ({id, title, body, colSize}) => {
    const [themeClass, setThemeClass] = useState('lightTheme')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [isModalEditOpen, setIsModalEditOpen] = useState(false)
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)

    const onModalDeleteOpen = () => {
        setIsModalDeleteOpen(true)
    }

    const closeModalDelete = () => {
        setIsModalDeleteOpen(false)
    }

    const closeModalEdit = () => {
        setIsModalEditOpen(false)
    }

    const onOpenEditModalHandler = () => {
        setIsModalEditOpen(true)
    }

    const onModalOpenHandler = () => {
        setModalIsOpen(true)
    }

    const onCloseViewModalHandler = () => {
        setModalIsOpen(false)
    }

    const onChangeColor = () => {
        if (themeClass === 'lightTheme') {
            setThemeClass('darkTheme')
        } else if (themeClass === 'darkTheme') {
            setThemeClass('brownTheme')
        } else if (themeClass === 'brownTheme') {
            setThemeClass('lightTheme')
        }
    }

    return (
        <>
            <ModalDeleteArticle id={id} modalIsOpen={isModalDeleteOpen} closeModal={closeModalDelete}/>
            <ModalEditArticle isOpen={isModalEditOpen} closeModal={closeModalEdit} id={id} title={title} body={body}/>
            <ModalViewArticle
                modalIsOpen={modalIsOpen}
                closeModal={onCloseViewModalHandler}
                id={id}
                title={title}
                body={body}
            />
            <div className={`col-md-${colSize} article ${themeClass}`}>
                <div>
                    <h5>{title}</h5>
                    <span>id: {id}</span>
                </div>
                <div>
                    <p>{body}</p>
                </div>
                <div className="articleFooter center-block">
                    <div className='cardButtons'>
                        <button
                            className={`btn cardButton ${themeClass}`}
                            onClick={onModalOpenHandler}
                        >
                            View
                        </button>
                        <button
                            className={`btn cardButton ${themeClass}`}
                            style={{borderLeft: '1px solid black', borderRadius: 0}}
                            onClick={onChangeColor}
                        >
                            Change Color
                        </button>
                        <button
                            className={`btn cardButton ${themeClass}`}
                            style={{borderLeft: '1px solid black', borderRadius: 0}}
                            onClick={onOpenEditModalHandler}
                        >
                            Edit
                        </button>
                        <button
                            className={`btn cardButton ${themeClass}`}
                            style={{borderLeft: '1px solid black', borderRadius: 0}}
                            onClick={onModalDeleteOpen}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}