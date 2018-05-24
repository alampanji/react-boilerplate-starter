import {
    ADD_POST
} from './action';

const initialState = {
    data:{
        name:'Putraning Panji Alam',
        date: '23 Mei 2018'
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            const newState = action.payload
        default:
            return state;
    }
}