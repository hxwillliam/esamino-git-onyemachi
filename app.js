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