let todos = [];

class Todo {
    constructor(title, category) {
        this.title = title;
        this.category = category;
        this.completed = false;
        this.id = Date.now();
    }
}

const addTodo = (title, category) => {
    if (!title || title.trim() === '') {
        throw new Error('Title cannot be empty');
    }
    if (!category || category.trim() === '') {
        throw new Error('Category cannot be empty');
    }

    const newTodo = new Todo(title.trim(), category.trim());
    todos.push(newTodo);
    return newTodo;
}

const deleteTodo = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    
    if (index === -1) {
        throw new Error('Todo not found');
    }
    
    const deletedTodo = todos[index];
    todos.splice(index, 1);
    return deletedTodo;
}

const toggleComplete = (id) => {
    const todo = todos.find(todo => todo.id === id);
    
    if (!todo) {
        throw new Error('Todo not found');
    }
    
    todo.completed = !todo.completed;
    return todo;
}