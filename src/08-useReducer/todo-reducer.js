export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case 'ADD_TODO':
            console.log( action.payload )
            return [ ...initialState, action.payload ];

    
        default:
            return initialState;
    }
};