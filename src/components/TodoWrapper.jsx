import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Todo } from './Todo.jsx';
import { TodoForm } from './TodoForm.jsx';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditToDoForm.jsx';

uuidv4();

export const TodoWrapper = () => {
    const [toDos, setToDos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const navigate = useNavigate();

    // Function to add a new todo
    const addToDo = (toDo) => {
        setToDos([...toDos, {
            id: uuidv4(),
            task: toDo,
            completed: false,
            isEditing: false
        }]);
    };

    // Function to toggle completion status
    const toggleComplete = (id) => {
        setToDos(toDos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Function to delete a todo
    const deleteToDo = (id) => {
        setToDos(toDos.filter(todo => todo.id !== id));
    };

    // Function to toggle edit mode
    const editToDo = (id) => {
        setToDos(toDos.map(todo => 
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        ));
    };

    // Function to update the task text
    const editTask = (newTask, id) => {
        setToDos(toDos.map(todo => 
            todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
        ));
    };

    // Function to toggle the completed filter
    const toggleCompletedFilter = () => {
        setShowCompleted(!showCompleted);
    };

    // Filter tasks based on completion status
    const filteredTasks = showCompleted ? toDos.filter(todo => todo.completed) : toDos;

    // Function to navigate to profile
    const showProfile = () => {
        navigate('/profile');
    };

    return (
        <div className="TodoWrapper">
            <h1>To-Do List</h1>
    
            {/* New wrapper for spacing */}
            <div className="top-container">
                <button onClick={toggleCompletedFilter}>
                    {showCompleted ? "Show All" : "Show Completed"}
                </button>
    
                <div className="input-container">
                    <TodoForm addToDo={addToDo} />
                </div>
            </div>
    
            <div className="TodoList">
                {filteredTasks.map((todo) => (
                    todo.isEditing ? (
                        <EditTodoForm key={todo.id} editToDo={editTask} task={todo} />
                    ) : (
                        <div className="TodoItem" key={todo.id}>
                            <Todo 
                                task={todo} 
                                toggleComplete={toggleComplete} 
                                deleteToDo={deleteToDo} 
                                editToDo={editToDo} 
                            />
                        </div>
                    )
                ))}
            </div>
        </div>
    );      
};