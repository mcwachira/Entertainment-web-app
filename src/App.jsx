import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import SingIn from './pages/SignIn/SingIn'
import SignUp from './pages/SignUp/SignUp'

function App() {
  return (
<>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signin' element={<SingIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
  </Routes>
</>
  )
}

export default App
