import { useState, useEffect } from 'react';
import Axios from 'axios';
import Style from './App.module.css'

function App() {
  return (
    <div className={Style.main}>
      <div className={Style.app}>
        <input
          placeholder='enter your name'
          className={Style.input}
        />

        <h3 className={Style.outputTxt}>Your average age: </h3>
      </div></div>
  );
}

export default App
