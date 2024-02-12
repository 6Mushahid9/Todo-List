import { useState } from "react";

function App(){

    const [bundle, setBundle]= useState(["Eat breakfast", "Sleep", "Study", "Eat Lunch"]);
    const [task, setTask] = useState();
    function inputHandler(e){
        setTask(e.target.value);
    }
    function addHandler(){
        if(task !== ""){
            setBundle(b => [...b, task])
            setTask("")
        }
    }
    function delHandler(index){
        const newBundle= bundle.filter((element, i) => i !== index)
        setBundle(newBundle)
    }
    function upHandler(index){
        const newBundle = [...bundle]
        [newBundle[index], newBundle[index-1]] = 
        [newBundle[index-1] ,newBundle[index]]
        setBundle(newBundle)
    }
    function downHandler(index){
        const newBundle = [...bundle]
        [newBundle[index], newBundle[index-1]] = 
        [newBundle[index-1] ,newBundle[index]]
        setBundle(newBundle)
    }
    return(
        <>
        <h1>TODO LIST</h1>
        <div>
            <input type="text" placeholder="Enter task" value={task} onChange={inputHandler}/>
            <button onClick={addHandler}>Add</button>
        </div>
        <ol>
            {bundle.map((task, index) => <li key={index}>{task}
                                        <button onClick={() => delHandler(index)}>Delete</button>
                                        <button onClick={() => upHandler(index)}>Up</button>
                                        <button onClick={() => downHandler(index)}>Down</button></li>)}
        </ol>
        </>
    ); 
}
export default App