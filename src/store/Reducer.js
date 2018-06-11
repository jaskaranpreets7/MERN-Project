const initialState = {
        email :String, 
}

const reducer = (state = initialState, action) => {
    if(action.type === 'LOGGED_IN'){
        return {
            ...state,
            login : action.value
        }
    }
    return state;
};

export default reducer;