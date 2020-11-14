import * as actionTypes from '../actions';

const inititalState = {
    persons: []
}

const rootReducer = (state = inititalState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personDate.name,
                age: action.personDate.age
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.DELETE_PERSON:
            const updatedArray = state.persons.filter(person => person.id !== action.resultElId);
            return {
                ...state,
                persons: updatedArray
            }
    }
    return state;
};

export default rootReducer;