import {fetchArticlesApi} from "../../api/api";
import {
    CREATEARTICLE,
    DELETEARTICLE,
    FETCHARTICLES,
    HIDELOADER,
    PARTARTICLES,
    SHOWLOADER,
    TOGGLECOLSIZE,
    UPDATEARTICLE
} from "./types";

export const showLoader = () => ({
    type: SHOWLOADER
})

export const hideLoader = () => ({
    type: HIDELOADER
})

export const fetchArticles = () => async dispatch => {
    dispatch(showLoader())
    const data = await fetchArticlesApi()
    dispatch({
        type: FETCHARTICLES,
        payload: data
    })
    dispatch(hideLoader())
}

export const partArticles = () => ({
    type: PARTARTICLES
})

export const toggleColSize = () => ({
    type: TOGGLECOLSIZE
})

export const createArticle = (title, text) => ({
    type: CREATEARTICLE,
    payload: {title, text}
})

export const updateArticle = (id, title, body) => ({
    type: UPDATEARTICLE,
    payload: {id, title, body}
})

export const deleteArticle = (id) => ({
    type: DELETEARTICLE,
    payload: id
})
