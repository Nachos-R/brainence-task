
const addReducerDefaultState = [];

export default (state = addReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_PHOTO':
            return {
                ...state,
                [action.albumId]: [                 
                   ...action.photos
                ]
            };
        case 'CLEAR_ADDED_PHOTO':
            return [];
        default:
            return state;
    }
};