import React from 'react';
import { useState } from 'react';

export default () => {
    const [value, setValue] = useState('');
    const [todoList, setTodolist] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setValue(newValue);
        //console.log(newValue)
    };

    function addTodo() {
        const newTodo = { content: value };
        const newTodoList = [...todoList, newTodo];
        setTodolist(newTodoList);
        setValue("");
        /*console.log(newTodo);
        console.log(todoList);*/
    };

    return (
        <div>
            <div className="header">
                <input type="text" placeholder="enter task" value={value} onChange={handleChange} />
                <button onClick={addTodo}>add</button>
            </div>
            {todoList.map((todo, index) => {
                return (
                    <div className='list' key={index}>
                        {todo.content}
                    </div>
                );
            })}
        </div>
    )
};