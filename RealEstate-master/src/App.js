import React, { useContext, useState } from 'react';
import NavBar from './Components/NavBar';
import SearchBars from './Components/SearchBars';
import GMap from './Components/GMap';
import { StateContext, useStateValue } from './context/StateProvider';
import UserContext from './context/StateProvider'
import UserStateValue from './context/StateProvider'
import DashBoard from './Components/DashBoard';
import HouseInfo from './Components/HouseInfo';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { firebase } from './firebase';
require('firebase/auth')


function App() {

  const { houses } = useContext(StateContext);
  // const [{ user }, dispatch] = UserStateValue();
  // const { user } = useContext(UserContext)
  const [user, setUser] = useState(false)

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return setUser(true)
    }
    setUser(false)
  })

  return (
    <div className="MainWrapper" >
      {!user ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <NavBar />
          <SearchBars />
          <GMap />
          {houses.Display.DashBoard ? <DashBoard /> : <HouseInfo input={houses.Display.item} />}
        </>
      )}

    </div>
  );
}
export default App;
