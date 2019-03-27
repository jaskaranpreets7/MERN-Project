export default ( state = [] , action) => {
    switch(action.type){
        case 'FETCH_PERSONS':
            return action.payload;
        case 'SEARCH_PERSON':
            let term = action.payload; 
            let filterState = state.filter(val => {
                return val.name.includes(term)
            });
            return filterState;
        case 'ADD_PERSON':
            return [...state, action.payload];
        case 'DELETE_PERSON':
            const personId = action.payload;
            let newState = state.filter(val => {
                return val._id !== personId;
            })
            return newState;
        default:
            return state;
    }
}

