const showReducerDefaultState = [];

export default (state = showReducerDefaultState, action) => {
    switch(action.type){
        case 'SHOW_ALBUMS':
            return {
                ...state,
                displayAlbums: action.display
            };
        case 'SHOW_PHOTOS':
            return {
                ...state,
                displayPhotos: action.display
            }
        default:
            return state;
    }
};