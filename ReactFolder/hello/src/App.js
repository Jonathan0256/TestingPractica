import './App.css';
import Employee from './components/Employee';
import {useState} from 'react';
  function App() {
    const [role, setRole] = useState('dev');
    const showEmployees = true;
    return (
      <div className="App">
        {showEmployees ? (
        <>
          <input type = 'text' onChange={(e)=>{
            console.log(e.target.value);
            setRole(e.target.value);
          }}/>
          <Employee name ="Jonathan" role = "Intern"/>
          <Employee name ="Raul"/>
          <Employee name ="John" role ={role}/>
          </>
        ):(
        <p>You cannot see the employees bro!</p>
        )}
      </div>
    ); 
  }

export default App;
