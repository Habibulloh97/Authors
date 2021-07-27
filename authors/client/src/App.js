import './App.css';
import {Router} from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home';
import Add from './views/Add';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <Add path="/add"/>
        <Edit path="/authors/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;
