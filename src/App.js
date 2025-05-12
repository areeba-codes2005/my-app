import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [mod, setmode] = useState("white");
  const [alert, setAlert] = useState(null);

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
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          togglemode={togglemode}
          togglmode={togglmode}
          mod={mod}
          aboutText="About TextUtils"
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              {/* } */}
            {/* /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
