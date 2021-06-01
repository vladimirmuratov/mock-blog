import React from 'react'
import {Header} from "./components/Header";
import {Routes} from './routes'
import {withRouter} from "react-router";

function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col'>
          <Header/>
        </div>
        <div className='row'>
          <div className='col'>
            <Routes/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
