
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { videoDetails } from "../store/reducer/videoDetails"
import { getRecommendedVideos } from "../store/reducer/getRecommendedVideos"
import Navbar from "../components/Navbar"


const VideoPlayback = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentPlaying = useSelector(state => state.youtube.currentPlaying)
  // const recommendedVideos = useSelector(state => state.youtube.recommendedVideos)

  useEffect(() => {
    if(id){
      dispatch(videoDetails(id))
      console.log(id, currentPlaying)
    }
    else{
      navigate('/')
    }
  }, [id, navigate, dispatch])

  useEffect(()=>{
    if(currentPlaying && id){
      dispatch(getRecommendedVideos(id))
    }
  }, [currentPlaying, id, dispatch])

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden">
          <div>
            <Navbar/>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <iframe src={`https://www.youtube.com/embed/${id}?autoplay-1`} frameBorder="0" width='800' height='500' allowFullScreen title="Youtube Player" className='m-5'></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} 
    </>
  )
}

export default VideoPlayback
