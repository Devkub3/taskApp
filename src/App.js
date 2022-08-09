import './App.css';
import deereLogo from './images/deere.png';
import Task from './components/Task.jsx'

function App() {
  return (
    <div className='task-app'>
      <div className='task-logo-container'> 
       <img src={deereLogo} className='deereLogo' /> 
      </div> 
      <div className='task-principal-list'>
        <h1>Tasks</h1>
        <Task text='Aprender React'/>
      </div>
     </div>
    );
  }

export default App;
