import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers, toggleColSize} from "../../redux/user/actions";
import {User} from "./User";

export const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)
    const colSize = useSelector(state => state.user.colSize)
    let textButton = colSize === '3' ? 'Make big cards' : 'Make small cards'

    const toggleHandler = () => {
        dispatch(toggleColSize())
    }

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <>
            <div className='row' style={{margin: '10px 0'}}>
                <div className='col-md-6'>
                    <h5 style={{marginLeft: '20%'}}>Users</h5>
                </div>
                <div className='col-md-6 text-end'>
                    <div style={{marginRight: '20%'}}>
                        {users.length !== 0 &&
                        <button
                            className='btn btn-primary btn-sm'
                            style={{width: 'auto'}}
                            onClick={toggleHandler}
                        >
                            {textButton}
                        </button>
                        }
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                {users &&
                users.map(user => <User
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    key={user.id}
                    colSize={colSize}
                />)
                }
            </div>
        </>
    )
}