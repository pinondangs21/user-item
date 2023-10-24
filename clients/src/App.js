import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import './App.css';

//components//
import Home from './components/Home';

function App() {
  return (
    <div className="container-fluid">
      <div className='container text-center'>
        <h1>Wellcome to My React Web</h1>
        <hr/>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
