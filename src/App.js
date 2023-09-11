import logo from './logo.svg';
import './App.css';
import { Login } from './component/login/Login';
import { ForgotPassword } from './component/forgotPassword/ForgotPassword';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">

<Router>
<Routes>
                <Route exact path='/' element={< Login />}></Route>
                <Route exact path='/ForgotPassword' element={< ForgotPassword />}></Route>
           
        </Routes>
  </Router>
    </div>
  );
}

export default App;
