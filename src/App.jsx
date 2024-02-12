import { useState } from "react";

function App(){
    const [bundle, setBundle]= useState([]);
    const [task, setTask] = useState();

    function inputHandler(e){
        setTask(e.target.value);
    }
    function addHandler(){
        if(task != ""){
            setBundle(b => [...b, task])
            setTask("")
        }
    }
    function delHandler(index){
        const newBundle= bundle.filter((element, i) => i !== index)
        setBundle(newBundle)
    }
    function upHandler(index){
        if(index > 0){
            const newBundle = [...bundle]
            const t= newBundle[index]
            newBundle[index] = newBundle[index-1]
            newBundle[index-1]=t
            setBundle(newBundle)
        }
    }
    function downHandler(index){
        if(index < bundle.length-1){
            const newBundle = [...bundle]
            const t= newBundle[index]
            newBundle[index] = newBundle[index+1]
            newBundle[index+1]=t
            setBundle(newBundle)
        }
    }
    return(
        <div className="app">
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
        </div>
    ); 
}
export default App