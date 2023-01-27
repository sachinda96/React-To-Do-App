import logo from './logo.svg';
import './App.css';
import { useRef, useState, useEffect} from 'react';


const objData = '{"name":"Sachinda","address": "Galle"}';


  const opts= {
    method : "POST",
    headers: {"Content-Type" : "application/json"},
    body : JSON.stringify({objData})
  }





function App({name}) {

  const task = useRef();
  const date =  useRef();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);



  useEffect(()=>{
    fetch('https://webhook.site/9e64a9b4-3d14-40bf-a75b-3de6e25cc066',opts).then((response) => response.json())
    .then(setData)
    .catch(setError)
  },[])

  if(data){
    // return(
    //   <p1>{JSON.stringify(data)}</p1>
    // );
  }


  const submit = (e) =>{
    e.preventDefault();
    console.log(task.current.value+ " Date: "+ date.current.value);

  }

  return (
    <div className="App">
       <h1>{name} To-Do List</h1>

       <form onSubmit={submit}>

        <input ref={task} type="text" placeholder='Task'></input>
        <input ref={date} type="date" placeholder='Date'></input>
        <button >Add</button>

       </form>
      {/* <header className="App-header"> */}
       
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
