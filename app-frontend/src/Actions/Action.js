import axios from 'axios';
export const GET_PERSON = 'GET_PERSON';


export function getPerson(){
    console.log('**before call in action')
    return function(dispatch) {
        return axios.get('http://localhost:7777/person')
        .then(response => dispatch({
            type: GET_PERSON,
            payload : response.data.data
        }))
    }
}
