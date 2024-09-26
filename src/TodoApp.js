import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";

function TodoApp(){
    const [newTaskDescription, setNewTaskDescription] = useState("");

    const [tasks, setTasks] = useState([]);

    function onSubmitNewTask (event) {
        event.preventDefault();

        if(newTaskDescription === ""){
            return;
        }

        setTasks((oldState) => {
            return oldState.concat({
                id: uuidv4(),
                name: newTaskDescription,
                checked: false
            });
        })

        setNewTaskDescription("");
    }

    function onCheckboxClick (id) {
        setTasks((oldState) => {
            return oldState.map((oldTask) => {
                if(oldTask.id === id){
                    return {
                        ...oldTask,
                        checked: !oldTask.checked
                    }
                }

                return oldTask;
            })
        })
    }

    function onDeleteClick (id) {
        setTasks((oldState) => {
            return oldState.filter((oldTask) => {
                return oldTask.id !== id;
            })
        })
    }


    return <div className="todo-app">
        <TodoInput 
            description={newTaskDescription} 
            setDescription={setNewTaskDescription}
            onSubmitNewTask={onSubmitNewTask}
        />
        <TodoList >
            {tasks.map(task => {
                return (
                    <TodoItem 
                        key={task.id}
                        value={task.name}
                        checked={task.checked} 
                        id={task.id}
                        onCheckBoxClick={onCheckboxClick}
                        onDeleteClick={onDeleteClick}
                    />
                )
            })}
        </TodoList>
    </div>
}

export default TodoApp;