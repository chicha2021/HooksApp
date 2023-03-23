export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [...initialState, action.payload];

        case 'DELETE_TODO':
            return initialState.filter(e => e.id !== action.payload);

        case 'HANDLE_TODO':
            const state = initialState.map( (e) => {
                if (e.id === action.payload) {
                    return {
                        ...e,
                        // done: e.done ? false : true 
                        done: !e.done,
                    };
                };
                return e;
            });
            return state;

        default:
            return initialState;
    }
};