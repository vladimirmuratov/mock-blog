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

const initialState = {
    articles: [],
    loading: false,
    startIndex: 0,
    endIndex: 3,
    partArticles: [],
    colSize: '3'
}

export const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        case SHOWLOADER:
            return {
                ...state,
                loading: true
            }
        case HIDELOADER:
            return {
                ...state,
                loading: false
            }
        case PARTARTICLES:
            return {
                ...state,
                partArticles: [...state.partArticles, ...state.articles.slice(state.startIndex, state.endIndex)],
                startIndex: state.startIndex + 3,
                endIndex: state.endIndex + 3
            }
        case TOGGLECOLSIZE:
            return {
                ...state,
                colSize: state.colSize === '3' ? state.colSize = '4' : state.colSize = '3'
            }
        case CREATEARTICLE:
            return {
                ...state,
                articles: [...state.articles,
                    {
                        id: state.articles.length,
                        title: action.payload.title,
                        body: action.payload.text
                    }
                ]
            }
        case UPDATEARTICLE:
            return {
                ...state,
                articles: state.articles.map(article => {
                    if (article.id === action.payload.id) {
                        article.title = action.payload.title
                        article.body = action.payload.body
                    }
                    return article
                })
            }
        case DELETEARTICLE:
            return {
                ...state,
                articles: state.articles.filter(article => article.id !== action.payload),
                partArticles: state.partArticles.filter(article => article.id !== action.payload),
                startIndex: state.startIndex - 1,
                endIndex: state.endIndex - 1
            }
        default:
            return state
    }
}