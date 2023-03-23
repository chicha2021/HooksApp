export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [...initialState, action.payload];

        case 'DELETE_TODO':
            const id = action.payload;
            return initialState.filter(e => e.id !== id);

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