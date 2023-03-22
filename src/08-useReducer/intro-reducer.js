const initialState = [
    {
        id: 1,
        todo: 'Recolectar la piedra del Alma',
        done: false,
    },
    {
        id: 2,
        todo: 'Recolectar la priedra del poder',
        done: false
    }
];

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === 'ADD_TODO') {
        return [...state, action.payload];
    };
    if (action.type === 'DELETE_TODO') {
        const found = state.filter(e => e.id !== 1)
        return [...found];
    }

    return state;
}


let todos = todoReducer();

// const newTodo = {
//     id: 2,
//     todo: 'Recolectar la priedra del poder',
//     done: false
// }

// const addTodoAction = {
//     type: 'ADD_TODO',
//     payload: newTodo,
// }

// todos = todoReducer(initialState, addTodoAction);
// console.log(todos)

const deleteTodo = {
    type: 'DELETE_TODO'
};


todos = todoReducer(initialState, deleteTodo);


// console.log(todos)