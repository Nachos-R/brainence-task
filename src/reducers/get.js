
const getReducerDefaultState = [];

export default (state = getReducerDefaultState, action) => {
    switch(action.type){
        case 'GET_TITLE':
            return {
                ...state,
                title: action.title
            };
        case 'GET_ALBUMS':
            return {
                ...state,
                albums: action.albums
            };
        case 'GET_PHOTOS':
            return {
                ...state,
                photos: action.photos
            };
        default:
            return state;
    }
};