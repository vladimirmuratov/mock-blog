import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchArticles, partArticles, toggleColSize} from "../../redux/article/actions";
import {Loader} from "../ui/Loader";
import {Article} from "./Article";
import {ModalCreateArticle} from "./ModalCreateArticle";

export const Articles = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.article.loading)
    const articles = useSelector(state => state.article.partArticles)
    const arrArticles = useSelector(state => state.article.articles)
    const endIndex = useSelector(state => state.article.endIndex)
    const colSize = useSelector(state => state.article.colSize)
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)

    let textButton = colSize === '3' ? 'Make big cards' : 'Make small cards'

    const openCreateModalHandler = () => {
        setIsOpenCreateModal(true)
    }

    const closeCreateModal = () => {
        setIsOpenCreateModal(false)
    }

    const onToggleHandler = () => {
        dispatch(toggleColSize())
    }

    const addArticlesHandler = () => {
        dispatch(partArticles())
    }

    useEffect(() => {
        dispatch(fetchArticles())
        setTimeout(() => {
            dispatch(partArticles())
        }, 100)
    }, [dispatch])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            <ModalCreateArticle createModalIsOpen={isOpenCreateModal} closeCreateModal={closeCreateModal}/>
            <div className='row' style={{marginTop: 10}}>
                <div className='col-md-6'>
                    <h6 style={{marginLeft: '11%'}}>ARTICLES</h6>
                </div>
                <div className='col-md-6 text-end'>
                    <div style={{marginRight: '11%'}}>
                        <button
                            className='btn btn-primary btn-sm'
                            onClick={onToggleHandler}
                        >
                            {textButton}
                        </button>
                        <button
                            className='btn btn-primary btn-sm'
                            style={{marginLeft: 5}}
                            onClick={openCreateModalHandler}
                        >
                            Add Article
                        </button>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                {articles &&
                articles.map((article, index) =>  (
                    <Article key={index} title={article.title} body={article.body} id={article.id} colSize={colSize}/>
                ))
                }
            </div>
            {(arrArticles.length + 3) > endIndex &&
            <div className='text-center' style={{margin: '10px 0'}}>
                <button
                    className='btn btn-success btn-sm'
                    onClick={addArticlesHandler}
                    disabled={endIndex >= arrArticles.length + 3}
                >
                    More...
                </button>
            </div>
            }
        </>
    )
}