import React, {useState} from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState(["Eat ", "Breakfast"])
    const [newTasks, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    
    function addTask(){

        if(newTasks.trim() !== ""){
            setTasks(t => [...t, newTasks])
            setNewTask("");
        }
    }

    function deleteTask(index){

        const updateTasks = tasks.filter((_,i) => i !== index);
        setTasks(updateTasks)
        
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }
    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }

    return (
        <>
            
            <div>
                <h1>To Do List</h1>
                <input type="text" placeholder="Enter a Task" value={newTasks} onChange={handleInputChange} />

                <button onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map ((task, index) => <li key={index}>
                                                <span className="text">{task}</span>
                                                <button onClick={() => deleteTask(index)}>Delete</button>

                                                <button onClick={() => moveTaskUp(index)}>👆</button>

                                                <button onClick={() => moveTaskDown(index)}>👇</button>
                                             </li> 
                    )}
            </ol>
            
        
        </>
    );


}
export default ToDoList