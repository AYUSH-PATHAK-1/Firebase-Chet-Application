import React, { useState } from 'react'
import Auth from './components/Auth'
import Chat from './components/Chat'
import Roomname from './components/Roomname'
import Cookies from "universal-cookie";
import { signOut } from 'firebase/auth';
import {auth} from '../src/firebase-config';

const cookie=new Cookies();

const App = () => {
  const [isAuth,setIsAuth]=useState(cookie.get("auth-token"))
  const [room,setRoom]=useState(null)

  const signUserOut=async()=>{
    await signOut(auth);
    cookie.remove("auth-token")
    setIsAuth(false)
    setRoom(null)
  }

  if(!isAuth){
    return (     
      <div>
      <Auth setIsAuth={setIsAuth}/>
      </div> 
    );      
  }  
  return <div>{room?<div><Chat room={room}/></div>:<div className='room'><Roomname setRoom={setRoom}/></div>}
   <div>
    <button className='' onClick={signUserOut}>SignOut</button>
  </div>
  </div>;
 
}

export default App