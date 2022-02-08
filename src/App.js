import './App.css';
import './Components/Navbar';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light'); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = ()=>{
    if(mode === "light")
    {
      setmode('dark');
      document.body.style.backgroundColor = '#00111a';
      showAlert(" Dark Mode Activated!","success");
      document.title= 'TextUtils- Dark Mode';
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode Activated!","success");
      document.title= 'TextUtils- Light Mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText='About TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container mt-3">
      <Routes>
          <Route exact path="/about" element={<About  mode={mode} toggleMode={toggleMode} />} >
            
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode} />} >            
            
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
