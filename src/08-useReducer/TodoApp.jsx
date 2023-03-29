import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {
    
    const { state, pendingTodos, finishedTodos, allTodos, handleTodo, deleteTodo, addNewTodo } = useTodo();
    
    return (
        <div>
            <h1>Hooks App   Total ToDos: { allTodos }  Pendientes: { pendingTodos }  Finalizados: { finishedTodos }</h1>
            <hr />

            <div classNameName='row'>
                <div classNameName='col-7'>
                <TodoList state={ state } deleteTodo={ deleteTodo } handleTodo={ handleTodo } />
                </div>
                <div classNameName='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd addTodo={( todo ) => addNewTodo( todo )}/>
                </div>
            </div>
        </div>
    );
};
