import  {GET_PERSON}  from "../Actions/Action";

const initialState = [
    {
        name : "yooman",
        age: 24,
        email : "yoo123@gmail.com",
        username : "yo",
        id : '1',
    },
    {
        name : "yeahman",
        age: 24,
        email : "yeah123@gmail.com",
        username : "yeah",
        id : '2',
    }
];


export default function getPerson (state = initialState, action){
    
        switch (action.type) {
            case GET_PERSON:
                return [ action.payload, ...state ]
        };
        return state;

};

