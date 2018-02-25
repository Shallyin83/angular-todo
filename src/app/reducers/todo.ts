export const todo = (state: any = [], action) => {
    switch (action.type) {
        case 'ADD_TODO_SUCCESS': {
            return { data: [...state.data, action.payload] }
        }
        case 'LOAD_TODOS_SUCCESS': {
            return { ...state, data: action.payload }
        }
        case 'DELETE_TODO_SUCCESS': {
            return {
                data: state.data.filter(todo => {
                    return todo.id !== action.payload.id;
                })
            };
        }
        case 'UPDATE_TODO_SUCCESS': {
            return {
                data: state.data.map((todo) => {
                    return todo.id === action.payload.id ? action.payload : todo;
                })
            };  
        }
        default: {
            return state;
        }
    }
};
