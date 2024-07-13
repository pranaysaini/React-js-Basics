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
            
            <div className="w-full h-screen bg-green-500 flex flex-col justify-center items-center">
                <div>
                    <h1 className='text-center mb-12 text-4xl font-serif font-extrabold'>To Do List</h1>
                    <input type="text" placeholder="Enter a Task" value={newTasks} onChange={handleInputChange} className="w-96 h-11 border rounded-lg" />

                    <button onClick={addTask} className='ml-3 bg-yellow-500 w-20 h-10 border rounded-lg'>
                        Add
                    </button>
                </div>

                <ol className="mt-5">
                    {tasks.map ((task, index) => <li key={index} className='w-96 h-14 border rounded-lg mt-5 flex items-center'>
                                                    <span className="text ml-10">{task}</span>
                                                    
                                                    <div className="box-border ml-auto">
                                                        <button onClick={() => deleteTask(index)} className="mr-5">Delete</button>

                                                        <button onClick={() => moveTaskUp(index)} className="mx-5">👆</button>

                                                        <button onClick={() => moveTaskDown(index)} className='mr-5'>👇</button>
                                                    </div>
                                                </li> 
                        )}
                </ol>
            </div>
            
        
        </>
    );


}
export default ToDoList