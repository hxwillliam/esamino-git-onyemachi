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

const filterTodos = (filterType, category = '') => {
    switch (filterType) {
        case 'completed':
            return todos.filter(todo => todo.completed);
        
        case 'active':
            return todos.filter(todo => !todo.completed);
            
        case 'category':
            if (!category) {
                throw new Error('Category needed for filter');
            }
            return todos.filter(todo => todo.category === category);
            
        default:
            return todos;
    }
}

function handleTodos(filterType = '', category = '') {
    const todoList = document.getElementById('todoList');
    const filteredTodos = filterTodos(filterType, category);
    
    todoList.innerHTML = '';
    
    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div>
                <span>${todo.title}</span>
                <span class="todo-category">${todo.category}</span>
            </div>
            <div class="todo-actions">
                <button onclick="toggleComplete(${todo.id}); handleTodos('${filterType}', '${category}')">
                    ${todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="delete-btn" onclick="deleteTodo(${todo.id}); handleTodos('${filterType}', '${category}')">
                    Delete
                </button>
            </div>
        `;
        
        todoList.appendChild(li);
    });
}

function filterByCategory() {
    const category = document.getElementById('categoryFilter').value;
    if (category) {
        handleTodos('category', category);
    }
}

document.getElementById('todoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('todoTitle').value;
    const category = document.getElementById('todoCategory').value;
    
    try {
        addTodo(title, category);
        handleTodos();
        e.target.reset();
    } catch (error) {
        alert(error.message);
    }
});

handleTodos();