import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { searchPageVideos } from "../store/reducer/searchPageVideos";
import Spinner from "../components/Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchCard from "../components/SearchCard";
import { useNavigate } from "react-router-dom";
import { actions } from "../store/slice/youtube";

const Search = () => {
const navigate = useNavigate()
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.youtube.videos);
    const searchedTerm = useSelector((state) => state.youtube.searchedTerm)

  useEffect(() => {
    dispatch(actions.clearVideos())
    if(searchedTerm === ''){
        navigate('/')
    }
    else{
        dispatch(searchPageVideos(false))
    }
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-auto">
      <div style={{ height:"7.5vh"}}>
        <Navbar />
      </div>
      <div className="flex" style={{height:'92.5vh'}}>
        <Sidebar />
        {videos.length ? (
            <div className="pl-8 flex flex-col gap-4 w-full h-full">
            <InfiniteScroll
            dataLength={videos.length}
            next={()=> dispatch(searchPageVideos(true))}
            hasMore={videos.length<500}
            loader={<Spinner/>}
            height={600}
            >
                
                    {videos.map((item) => {
                        return (
                            <div className="my-5" key={item.videoId}>
                                <SearchCard data={item} key={item.videoId}/>
                            </div>
                        )
                    })}
                
            </InfiniteScroll>
            </div>
        ): <Spinner/>}
      </div>
    </div>
  );
};

export default Search;
