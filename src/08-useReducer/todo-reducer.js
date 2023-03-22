export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [...initialState, action.payload];

        case 'DELETE_TODO':
            const id = action.payload;
            return initialState.filter(e => e.id !== id);

        case 'HANDLE_TODO':
            console.log(action.payload)
            return initialState.map(function (e) {
                if (e.id === action.payload) {
                    return e.done = true;
                };
            });
        // return [
        //     ...initialState,
        //     initialState.
        // ];

        default:
            return initialState;
    }
};