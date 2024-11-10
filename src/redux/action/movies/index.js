import { ActionType } from "../Action-types"


export const FetchData = (movies) => {
    return {
        type : ActionType.FETCH_MOVIES,
        payload : movies
    }
}

export const SelectMovie = (movie) => {
    return {
        type : ActionType.SELECT_MOVIE,
        payload : movie
    }
}