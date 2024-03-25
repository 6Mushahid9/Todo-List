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
            <div className="addTask">
                <div className="textInputWrapper">
                    <input className="textInput" type="text" placeholder="Enter task" value={task} onChange={inputHandler}/>
                </div>
                <button className="addButton" onClick={addHandler}>Add</button>
            </div>
            <ol>
                {bundle.map((task, index) => <li key={index}>{task}
                                            <div className="buttons">
                                                <button className="move" onClick={() => upHandler(index)}>☝🏽</button>
                                                <button className="move" onClick={() => downHandler(index)}>👇🏽</button>
                                                <button className="deleteButton" onClick={() => delHandler(index)}>❌</button>
                                            </div></li>)}
            </ol>
        </div>
    ); 
}
export default App