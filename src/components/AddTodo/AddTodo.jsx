import { useState } from "react";
import "./AddTodo.css";
import { toast } from 'react-hot-toast'; // Import toast

function AddTodo({ addTodo }) {
    const [inputText, setInputText] = useState('');

    const handleAddTodo = () => {
        if (inputText.trim()) {
            addTodo({ todoText: inputText });
            toast.success('Todo added successfully!');
            setInputText('');
        } else {
            toast.error('Please enter a valid todo!');
        }
    };

    return (
        <div className="add-wrapper">
            <input
                className="input"
                type="text"
                placeholder="Enter a new todo..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}

export default AddTodo;
