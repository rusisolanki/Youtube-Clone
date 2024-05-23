import './App.css'
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Search from './pages/Search';
import VideoPlayback from './pages/VideoPlayback';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/search",
    element: <Search/>
  },
  {
    path: "/video/:id",
    element: <VideoPlayback/>
  },
]);

function App() {
  

  return (
    <RouterProvider router={router} />

  )
}

export default App
