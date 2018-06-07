import { actionTypes } from './blogActionTypes';

export const changePageActionCreator = newPage => ({ type: actionTypes.CHANGE_PAGE, newPage });

export const prevPage = currentPage => {
    if (currentPage > 0)
        return changePageActionCreator(currentPage - 1);
    else
        return changePageActionCreator(currentPage);
}

export const nextPage = currentPage => {
    return changePageActionCreator(currentPage + 1);
}