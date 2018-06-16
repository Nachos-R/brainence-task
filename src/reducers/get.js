
const getReducerDefaultState = [];

export default (state = getReducerDefaultState, action) => {
    switch(action.type){
        case 'GET_USERNAME':
            return {
                ...state,
                username: action.username
            };
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
        default:
            return state;
    }
};