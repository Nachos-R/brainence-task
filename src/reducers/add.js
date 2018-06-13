
const addReducerDefaultState = [];

export default (state = addReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_PHOTO':
            return [
                ...state,
                action.photo
            ];
        default:
            return state;
    }
};