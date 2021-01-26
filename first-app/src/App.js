import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import { AFcomponent } from './AFcomponent';

function App() {
    return ( <div className = "App" >
        <header className = "App-header" >
        <Fcomponent name = 'Ivan'
        surname='Dyshkin' / >   
         <Ccomponent / >
        {/* <Ccomponent numbers={[1,2,3,4,5,]}/ > */}
        <AFcomponent / >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <p>Edit < code > src / App.js </code> and save to reload. </p > 
        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >ауф</a> 
        </header > 
        </div>
    );
}

export default App;