import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import HeaderComponent from "./Component/HeaderComponent";
import Home from "./Component/Home/Home";
import { useEffect, useState } from "react";
import NavBar from "./Component/NavBar/NavBar";
import Profile from "./Component/Profile/Profile";
import MyNetwork from "./Component/MyNetwork/MyNetwork";
import ProfileViews from "./Component/Profile/ProfileViews";
import Groups from "./Component/MyNetwork/Groups";
import Events from "./Component/MyNetwork/Events";

function App() {
  const [show ,setShow]=useState(false)
  const localSignup=localStorage.getItem("signin")
  useEffect(() => {
    // const localSignup = localStorage.getItem("signin");
    if (localSignup === 'loggedIn') {
      setShow(false);
    }
  }, [localSignup]);
  return (
    <div className="App">
   
       
      <BrowserRouter>
    {show?<NavBar/>:null}
    
        <Routes>
          {/* <Route path='/' element={<div>ggfgf</div>} /> */}
          <Route path='/' element={<HeaderComponent/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/' element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/mynetwork" element={<MyNetwork/>} />
          <Route path="/profile-view" element={<ProfileViews/>} />
          <Route path="/groups" element={<Groups/>} />
          <Route path="/events" element={<Events/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App