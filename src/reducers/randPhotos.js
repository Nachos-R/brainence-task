
const randPhotosReducerDefaultState = [];

export default (state = randPhotosReducerDefaultState, action) => {
    switch(action.type){
        case 'RAND_PHOTOS':
            return [
                ...state,
                action.randomPhotoUrl,
            ];
        case 'CLEAR_RAND_PHOTOS':
            return [];
        default:
            return state;
    }
};