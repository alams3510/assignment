import React, {  useState } from 'react'
import LandingPage from './pages/LandingPage'
import ProfilePage from './pages/ProfilePage'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { MyContext } from './Context'
import Posts from './pages/Posts'
import Gallery from './pages/Gallery'
import ToDo from './pages/ToDo'
import SideMenu from './pages/SideMenu'

const App = () => {
    const [data, setData] = useState([]);
const [user, setUser] = useState("");
  React.useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then((res) => res.json())
      .then((val) => setData(val.users));
  }, []);
  return (
        <MyContext.Provider value={{data, setData,user, setUser}}>
    <BrowserRouter>
   
    <Routes>
     
        <Route exact path='/'  element={<LandingPage/>}/>
        <Route path='/menu/'  element={<SideMenu/>}>

        <Route path='profile'  element={<ProfilePage/>}/>
         <Route path="posts" element={<Posts />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="todo" element={<ToDo />} />
       </Route>
        </Routes>
    </BrowserRouter>
        </MyContext.Provider>

  )
}

export default App