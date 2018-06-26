const initialState = {
        person : []
}

const reducer = (state = initialState, action) => {

    console.log('reducer1' , initialState)
        if(action.type === 'GET_PERSON'){
            return {
                ...state,
                person : action.payload,
            }
        }
        return state;
};

export default reducer;