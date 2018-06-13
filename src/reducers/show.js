const showReducerDefaultState = [];

export default (state = showReducerDefaultState, action) => {
    switch(action.type){
        case 'SHOW_ALBUMS':
            return {
                ...state,
                display: action.display
            };
        default:
            return state;
    }
};