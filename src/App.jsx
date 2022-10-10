import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import SingIn from './pages/SignIn/SingIn'
import SignUp from './pages/SignUp/SignUp'
import { selectAllMovies, selectAllTvShows, TrendingShows } from './redux/Features/ShowSlice'
import {useSelector} from 'react-redux'

function App() {

  const movies = useSelector(selectAllMovies)
  const tv = useSelector(selectAllTvShows)


  // console.log(movies)
  // console.log(tv)
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
