
const selectReducerDefaultState = [];

export default (state = selectReducerDefaultState, action) => {
    switch(action.type){
        case 'SELECT_USER':
            return {
                ...state,
                userId: action.userId
            };
        case 'SELECT_ALBUM':
            return {
                ...state,
                albumId: action.albumId
            };
        case 'SELECT_PHOTO':
            return {
                ...state,
                photoId: action.photoId
            };
        case 'SELECT_RANDOM_PHOTO':
            return {
                ...state,
                rndPhoto: action.rndPhoto
            };
        default:
            return state;
    }
};