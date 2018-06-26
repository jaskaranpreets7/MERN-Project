import axios from 'axios';

function getPerson(persons){
    console.log('**before call in action')
    axios.get('http://localhost:7777/person')
        .then(function(res){
            console.log('action ' , res);
            return {
                type: 'GET_PERSON',
                payload: res.data
            }
        })
        .catch(function (error) { 
            console.log(error);
            return {
              type: 'GET_PERSON_ERROR',
              payload: error
            };
          })
  
};
 export default getPerson;