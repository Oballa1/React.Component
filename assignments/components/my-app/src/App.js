
import logo from './logo.svg';
import './App.css';
import UserName  from './components/UserName';
import {UserAge} from './components/UserAge';
import {UserEmail} from './components/UserEmail';
import {UserWeight} from './components/UserWeight';
import Login from './components/login/Login';
function App() {
  return (
    <div className="App">
     <UserName/>
     <UserAge/>
     <UserEmail/>
     <UserWeight/>

     <Login/>
    
    </div>
  );
}

export default App;
