
import './App.css';
import Features from './components/Features';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =() => {
    if( mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(3 20 62)';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>  
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert = {alert}  />
    <div className="container my-3" >
      <Routes>
        <Route exact path="/textutils" element ={<TextForm showAlert= {showAlert} heading="Enter the text to analyze below" mode = {mode} />}/>
        <Route exact path="/textutils/features" element = {<Features mode={mode} toggleMode = {toggleMode}/>}/>
      </Routes>
    </div>
    </Router>
    <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;
