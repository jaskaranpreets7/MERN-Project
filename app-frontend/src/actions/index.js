import persons from "../apis/persons";


export const fetchPersons = () =>{
    return async dispatch => {
        const response = await persons.get('/person');
        dispatch({
            type:'FETCH_PERSONS',
            payload : response.data.data
        })
    }
    
}

export const searchPerson = term => {
    return {
        type : 'SEARCH_PERSON',
        payload: term
    }
}

export const addPerson = (obj) => {
    return async dispatch => {
        const response = await persons.post('/addperson', obj);
        dispatch({
            type:'ADD_PERSON',
            payload: response.data.data
        })
    }
    
    
}

export const deletePerson = personId => {
    return {
        type: 'DELETE_PERSON',
        payload: personId
    }
}