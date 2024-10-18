import { useState, useEffect } from 'react';
import Axios from 'axios';
import Style from './App.module.css'

function App() {

  const endpoint = 'https://api.agify.io/?name='

  const [name, setName] = useState('')
  const [data, setData] = useState(null)

  const getData = () => {
    Axios.get(`${endpoint}${name}`)
      .then((res) => setData(res.data))

  }

  return (
    <div className={Style.main}>
      <div className={Style.app}>
        <input
          placeholder='enter your name'
          className={Style.input}
          onChange={(event) => setName(event.target.value)}
        />

        <button
          onClick={getData}
          className={Style.button}
        >
          Proceed</button>

        <h2 className={Style.outputTxt}>Hey! {data?.name}</h2>
        <h3 className={Style.outputTxt}>Your average age: {data?.age}</h3>
      </div></div>
  );
}

export default App
