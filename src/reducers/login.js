
const loginReducerDefaultState = [];

export default (state = loginReducerDefaultState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                loggedIn: action.loggedIn
            };
        default:
            return state;
    }
};