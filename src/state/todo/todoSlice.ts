import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface todoState {
    todos: todo[];
}

const initialState: todoState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: todo = {
                id: state.todos.length + 1,
                text: action.payload,
                completed: false
            };
            state.todos.push(newTodo)
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
})

export const {addTodo, toggleTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;