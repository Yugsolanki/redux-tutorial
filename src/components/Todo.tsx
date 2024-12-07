import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { addTodo, toggleTodo, removeTodo, todo } from "../state/todo/todoSlice";

const Todo = () => {

    const todos: todo[] = useSelector((state: RootState) => state.todos.todos)
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
        <h1>Todo</h1>
            <div className="todo-input">
                <input type="text" placeholder="Enter todo" onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        const target = e.target as HTMLInputElement;
                        dispatch(addTodo(target.value));
                        target.value = '';
                    }
                }}></input>
            </div>
            <div className="todo-list">
                {todos.map((todo: todo) => (
                    <div key={todo.id} className="todo-item">
                        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                        <button onClick={() => dispatch(toggleTodo(todo.id))}>
                            {todo.completed ? 'Completed' : 'Incomplete'}
                        </button>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Todo;
