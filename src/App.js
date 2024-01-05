import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [switchText, setSwitchText] = useState("Dark Mode")
  const [alert, setAlert] = useState(null);

  const showAlert =(message ,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }

  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(36, 36, 36)'
      setSwitchText("Light mode")
      showAlert("Dark mode has been enabled","Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      setSwitchText("Dark mode")
      showAlert("Light mode has been enabled","Success");
    }

  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText ="About us" mode={mode} toggleMode={toggleMode} switchText={switchText}/>
      <Alert alert={alert}/>
      <div>
      {/* <Routes> */}
          {/* <Route path="/about" element={<About mode={mode}/>}></Route> */}
          {/* <Route path="/" element={<TextForm heading="Enter the Text to analyze below" mode={mode} showAlert={showAlert}/>}> */}
         <TextForm heading="Enter the Text to analyze below" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
      {/* </Routes> */}
      </div>
      {/* </Router> */}
      

      
    </>
   
  );
}

export default App;
