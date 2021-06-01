import React, {useState} from "react";
import {ModalViewUser} from "./ModalViewUser";
import {ModalDeleteUser} from "./ModalDeleteUser";

export const User = ({id, name, email, phone, colSize}) => {
    const [classTheme, setClassTheme] = useState('lightTheme')
    const [isModalViewUserOpen, setIsModalViewUserOpen] = useState(false)
    const [isModalDeleteUserOpen, setIsModalDeleteUserOpen] = useState(false)

    const onCloseModalDeleteUser = () => {
        setIsModalDeleteUserOpen(false)
    }

    const onModalDeleteUserOpen = () => {
        setIsModalDeleteUserOpen(true)
    }

    const onModalViewUserOpen = () => {
        setIsModalViewUserOpen(true)
    }

    const onCloseModalViewUser = () => {
        setIsModalViewUserOpen(false)
    }

    const onChangeTheme = () => {
        if (classTheme === 'lightTheme') {
            setClassTheme('darkTheme')
        } else if (classTheme === 'darkTheme') {
            setClassTheme('brownTheme')
        } else if (classTheme === 'brownTheme') {
            setClassTheme('lightTheme')
        }
    }

    return (
        <>
            <ModalViewUser openModal={isModalViewUserOpen} closeModal={onCloseModalViewUser} id={id}/>
            <ModalDeleteUser id={id} openModal={isModalDeleteUserOpen} closeModal={onCloseModalDeleteUser}/>
            <div className={`col-md-${colSize} article ${classTheme}`}>
                <div>
                    <h5>{name}</h5>
                    <span>id: {id}</span>
                </div>
                <div>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
                <div className="articleFooter center-block">
                    <div className='cardButtons'>
                        <button
                            className={`btn cardButton ${classTheme}`}
                            onClick={onModalViewUserOpen}
                        >
                            View
                        </button>
                        <button
                            className={`btn cardButton ${classTheme}`}
                            style={{borderLeft: '1px solid black', borderRadius: 0}}
                            onClick={onChangeTheme}
                        >
                            Change Color
                        </button>
                        <button
                            className={`btn cardButton ${classTheme}`}
                            style={{borderLeft: '1px solid black', borderRadius: 0}}
                            onClick={onModalDeleteUserOpen}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}