import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [mod, setmode] = useState("white");
  const [alert, setAlert] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
     removeBodyClasses();
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  };
  
  const togMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
     setIsDisabled(true);
      // showAlert(`${cls.charAt(0).toUpperCase() + cls.slice(1)} background enabled`, 'success');
  };

  const togglemode = () => {
    if (mod === "white") {
      document.body.style.backgroundColor = "#343a40";
      setmode("#343a40");
      showAlert("Dark Gray mode has been enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
      setmode("white");
      showAlert("Light mode has been enabled", "success");
    }
  };

  const togglmode = () => {
    if (mod === "white") {
      document.body.style.backgroundColor = "#4c0211";
      setmode("#4c0211");
      showAlert("Dark Maroon mode has been enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
      setmode("white");
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          togglemode={togglemode}
          togglmode={togglmode}
          togMode={togMode}
          mod={mod}
          isDisabled={isDisabled}
          aboutText="About TextUtils"
        />
        <Alert alert={alert} />
        <div className="container my-3">
           <Outlet context={{ showAlert, mode }} />
        </div>
    </>
  );
}

export default App;
