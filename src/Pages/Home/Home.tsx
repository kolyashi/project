import React, { useState } from "react";
import { TodoItem } from "../../TypesAndInterfaces/TypesAndInterfaces";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
// создание туду листа

interface IHome {
    status:boolean;
}


const Home = () => {
    
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [newTodo, setNewTodo] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [status,setStatus] = useState(false)

    const navigate = useNavigate();

    const handleCompleteTask = (taskId: string) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === taskId) {
                return { ...todo, completed: true };
            }
            return todo;
        });
        const lastTodo = updatedTodos.find(todo => !todo.completed);
        if (!lastTodo) {
            navigate("/admin", { state: { completedTasks: updatedTodos } });
        }
    };

    const createTodo = () => {
        if(newTodo !== '') {
            const newId = crypto.randomUUID()
            const newTodoItem:TodoItem = {
                id: newId,
                text: newTodo,
                completed: false,
            };
            setTodos([...todos,newTodoItem]);
            setNewTodo('');
        }
    };

    const deleteTodo = (id:string) => {
        const updateTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updateTodos);
    }

    const toggleComplete = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                return {...todo,completed: !todo.completed};
            }
            return todo;
        });
        setTodos(updatedTodos);
        handleCompleteTask(id);
    }

    const handleClick = () => {
        setStatus(status => !status);
      }
    return (
        <div>
            <h1>Создание задач</h1>
            <div className="shared_comp">
                <Button className="main_page_from_home"><Link className="link_btn3" to='/'>Home</Link></Button>
                <Input className='input1' type="text" value={newTodo} onChange={(e) => setNewTodo(e.currentTarget.value)} />
                <Button className="add" action="add" onClick={createTodo}/>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li className={todo.completed ? "completed" : "todo_list"} key={todo.id} onClick={(e) => {
                        handleClick();
                        toggleComplete(todo.id);
                       
                    }}>
                        <span>{todo.text}</span>
                        <span className="status">   - Status:{todo.completed? 'Выполнено' : 'В процессе'}</span>
                        <Button className='delete_btn' action="delete" onClick={(e) => {
                            deleteTodo(todo.id);
                            e.stopPropagation()
                        }}>X</Button>                
                    </li>
                ))}
            </ul>
            
        </div>
    )
}


export default Home