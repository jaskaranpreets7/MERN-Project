import GET_PERSON from './Action';

const initialState = {
        person : []
}

const reducer = (state = initialState, action) => {
    console.log('reducer1' , initialState)
        if(action.type === 'GET_PERSON'){
            return {
                ...state,
                person : action.person,
            }
        }
        console.log('reducer2' , initialState)
        return state;
};

export default reducer;