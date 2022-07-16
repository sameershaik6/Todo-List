import { useState, useRef } from 'react'
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    if(currentTask === "") {
      alert("please enter todo to display")
    } else {
      setTodoList([...todoList, currentTask]);
      inputTask.current.value = "";
      setCurrentTask("");
    }
  };

  const deleteTask = (taskToDelete) => {
      setTodoList(
        todoList.filter((task) => {
          return task !== taskToDelete;
        })
      )
  }

  return (
    <div className="App">
      <h1>React To-Do List</h1>
      <div className="head">
        <input className='task' ref={inputTask} type="text" placeholder="Task..." onChange={(event) => {
          setCurrentTask(event.target.value);
         }} 
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr/>
      {
        todoList.length > 0 ? (
          <ul>
            {todoList.map((val, key) => {
                return(
                  <div id="task">
                    <li key={key}>
                      <input className='checkb' type="checkbox" />
                      <span>{val}</span>
                    </li>
                    <button onClick={() => deleteTask(val)}>X</button>
                  </div>
                )
              }) 
            }
          </ul>
        ) : (
          <div style={{color: "red"}}>
            No todo's to display
          </div>
        )
      }
          </div>
  );
}

export default App;
