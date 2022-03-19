import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <LoadToDo></LoadToDo>
    </div>
  );
}

function LoadToDo() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(response => console.log(response))
  })
}

export default App;