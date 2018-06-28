import axios from 'axios';
const GET_PERSON = 'GET_PERSON';

export function getPerson(){
    console.log('**before call in action')
    return function(dispatch) {
        axios.get('http://localhost:7777/person')
        // .then(response  => response.json())
        .then(response => dispatch({
            type: GET_PERSON,
            person : response.data.data
        }))
    }
}
// const disPerson = (person) => {
//     return {
//         type: 'GET_PERSON',
//         person : person
//     }
// }
// export default getPerson