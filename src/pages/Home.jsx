import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { homePageVideos } from "../store/reducer/homePageVideos";
import Spinner from "../components/Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.youtube.videos);

  useEffect(() => {
    dispatch(homePageVideos(false));
    console.log(videos);
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-auto">
      <div style={{ height:"7.5vh"}}>
        <Navbar />
        
      </div>
      <div className="flex" style={{height:'92.5vh'}}>
        <Sidebar />
        {videos.length ? (
            <div className="w-full">
            <InfiniteScroll
            dataLength={videos.length}
            next={()=> dispatch(homePageVideos(true))}
            hasMore={videos.length<500}
            loader={<Spinner/>}
            height={650}
            >
                <div className="grid grid-cols-3 gap-y-20 gap-x-8 px-5 py-4">
                    {videos.map((item) => {
                        return (
                            <Card data={item} key={item.videoId}/>
                        )
                    })}
                </div>
            </InfiniteScroll>
            </div>
        ): <Spinner/>}
      </div>
    </div>
  );
};

export default Home;
