import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
          <div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input border-secondary" onClick={props.togglemode} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" disabled={props.isDisabled}/>
            <label className="form-check-label" htmlFor="inlineRadio1">{props.mod === 'white' ?'Enable Dark Gray' : 'Enable Light Mode'}</label>
          </div>
          <div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input border-secondary" onClick={props.togglmode} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" disabled={props.isDisabled}/>
            <label className="form-check-label" htmlFor="inlineRadio2">{props.mod === 'white' ? 'Enable Dark Maroon' : 'Enable Light Mode'} </label>
          </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" disabled={props.isDisabled}/>
            <label className="form-check-label" htmlFor="switchCheckDefault">
  {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
</label>
        </div>
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.togMode('primary')}} style={{height:"30px", width:"30px", cursor:"pointer"}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.togMode('danger')}} style={{height:"30px", width:"30px", cursor:"pointer"}}></div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.togMode('success')}} style={{height:"30px", width:"30px", cursor:"pointer"}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.togMode('warning')}} style={{height:"30px", width:"30px", cursor:"pointer"}}></div>
        </div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

// Navbar.defaultProps = {
//   title: 'Set title here',
//   aboutText: 'About text here'
// };
