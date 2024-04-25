import React, { useState } from "react";
import { useLocation } from "react-router";
import { LocationState, TodoItem } from "../../TypesAndInterfaces/TypesAndInterfaces";
import './Admin.css'
import Button from "../../shared/Button";
import { Link } from "react-router-dom";


// отображение выполенных задач,в каком состоянии спринт
const Admin = () => {
    
    const location = useLocation();
    const { completedTasks }: LocationState = location.state || { completedTasks: [] };

    const [tasks, setTasks] = useState(completedTasks);

    const deleteAllCompletedTasks = () => {
        setTasks([]);
    };
    


    return (
        <div>
           Панель администрации
           <h2>Выполненные задачи</h2>
           <ul>
            {tasks.map(task => (
                    <li className="list" key={task.id}>
                        <span>{task.text}</span>
                        <span>- {task.completed ? "Выполнено" : "В процессе"}</span>
                    </li>
            ))}
           </ul>
          <Button className="all_delete" onClick={deleteAllCompletedTasks}>AllDelete</Button>
          <Button className="home_page"><Link className="link_btn2" to='/home'>Home</Link></Button>
        </div>
    )
}


export default Admin