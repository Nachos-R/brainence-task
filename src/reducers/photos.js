
const photosReducerDefaultState = [];

export default (state = photosReducerDefaultState, action) => {
    switch(action.type){
        case 'PHOTOS':
            return {
                ...state,
                [`id-${action.albumId}`]: {                    
                   photos: action.photoArr
                }
            };
        case 'CLEAR_PHOTOS':
            return {};
        default:
            return state;
    }
};