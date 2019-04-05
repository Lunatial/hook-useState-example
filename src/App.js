import React, { useState } from 'react';

const formSubmit = (value, setValue) => {
    console.log("Submitted", value)
    setValue('')
}

const ToDoFormSubmit = (todos, setTodos, value, setValue) => {
    console.log("Submitted", value)
    setTodos([...todos, { 'text': value }])
    setValue('')
}

const deleteToDO = (index, todos, setTodos) => {
    const newToDos = [...todos]
    newToDos.splice(index, 1)
    setTodos(newToDos)
}

const UseStateExample = () => {
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('');
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }, { text: 'Learn Context' }, { text: 'Learn to drive' }]);
    console.log(todos)
    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count - 1)}>
                Click me -1
            </button>
            <button onClick={() => setCount(count + 1)}>
                Click me +1
            </button>
            <hr />

            <p>Favourite fruit: {fruit}</p>
            <form onSubmit={e => {
                e.preventDefault()
                formSubmit(fruit, setFruit)
            }}>
                <label>
                    Fruit:
                <input type="text" name="fruit" value={fruit} onChange={(event) => setFruit(event.target.value)} />
                </label>
                <input type="submit" name="fruitSubmitButton" value="Submit / Reset" />
            </form>
            <hr />

            <ul>
                {todos.map((todo, index) => <li key={index}>{todo.text}<button onClick={() => deleteToDO(index, todos, setTodos)}>X</button></li>)}
            </ul>
            <form onSubmit={e => {
                e.preventDefault()
                ToDoFormSubmit(todos, setTodos, value, setValue)
            }}>
                <label>
                    ToDo:
                <input type="text" name="todoInput" value={value} onChange={(event) => setValue(event.target.value)} />
                </label>
                <input type="submit" name="todoSubmitButton" value="Add" />
            </form>
        </div>
    );
}

export default UseStateExample