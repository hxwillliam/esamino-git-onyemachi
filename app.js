let todos = [];

const STORAGE_KEY = 'todos';

const saveTodos = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

const loadTodos = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        todos = JSON.parse(stored).map(todo => {
            const newTodo = new Todo(todo.title, todo.category);
            newTodo.completed = todo.completed;
            newTodo.id = todo.id;
            return newTodo;
        });
    }
}

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
    saveTodos();
    return newTodo;
}

const deleteTodo = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    
    if (index === -1) {
        throw new Error('Todo not found');
    }
    
    const deletedTodo = todos[index];
    todos.splice(index, 1);
    saveTodos();
    return deletedTodo;
}

const toggleComplete = (id) => {
    const todo = todos.find(todo => todo.id === id);
    
    if (!todo) {
        throw new Error('Todo not found');
    }
    
    todo.completed = !todo.completed;
    saveTodos();
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

const editTodo = (id, newTitle, newCategory) => {
    const todo = todos.find(todo => todo.id === id);
    
    if (!todo) {
        throw new Error('Todo not found');
    }
    
    if (!newTitle || newTitle.trim() === '') {
        throw new Error('Title cannot be empty');
    }
    if (!newCategory || newCategory.trim() === '') {
        throw new Error('Category cannot be empty');
    }

    todo.title = newTitle.trim();
    todo.category = newCategory.trim();
    saveTodos();
    return todo;
}

function handleTodos(filterType = '', category = '') {
    const todoList = document.getElementById('todoList');
    const filteredTodos = filterTodos(filterType, category);
    
    todoList.innerHTML = '';
    
    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.id = `todo-${todo.id}`;
        
        li.innerHTML = `
            <div class="todo-content">
                <span class="todo-title">${todo.title}</span>
                <span class="todo-category">${todo.category}</span>
            </div>
            <div class="todo-form" style="display: none;">
                <input type="text" class="edit-title" value="${todo.title}">
                <input type="text" class="edit-category" value="${todo.category}">
                <button onclick="saveEdit(${todo.id})">Save</button>
                <button onclick="cancelEdit(${todo.id})">Cancel</button>
            </div>
            <div class="todo-actions">
                <button onclick="toggleComplete(${todo.id}); handleTodos('${filterType}', '${category}')">
                    ${todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button onclick="startEdit(${todo.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTodo(${todo.id}); handleTodos('${filterType}', '${category}')">
                    Delete
                </button>
            </div>
        `;
        
        todoList.appendChild(li);
    });
}

function startEdit(id) {
    const todoItem = document.getElementById(`todo-${id}`);
    todoItem.querySelector('.todo-content').style.display = 'none';
    todoItem.querySelector('.todo-form').style.display = 'flex';
}

function cancelEdit(id) {
    const todoItem = document.getElementById(`todo-${id}`);
    todoItem.querySelector('.todo-content').style.display = 'flex';
    todoItem.querySelector('.todo-form').style.display = 'none';
}

function saveEdit(id) {
    const todoItem = document.getElementById(`todo-${id}`);
    const newTitle = todoItem.querySelector('.edit-title').value;
    const newCategory = todoItem.querySelector('.edit-category').value;
    
    try {
        editTodo(id, newTitle, newCategory);
        handleTodos();
    } catch (error) {
        alert(error.message);
    }
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

loadTodos();
handleTodos();