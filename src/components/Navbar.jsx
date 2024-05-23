
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { searchPageVideos } from "../store/reducer/searchPageVideos";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/slice/youtube";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchedTerm = useSelector((state) => state.youtube.searchedTerm);

  const handleSearch = () => {
    if (location.pathname !== "/search"){
        navigate("/search");
    }
    else {
      dispatch(actions.clearVideos());
      dispatch(searchPageVideos(false));
    }
  };

  return (
    <div className="flex justify-between items-center h-14 px-14 bg-[#212121] opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex  items-center justify-center">
          <BsYoutube className="text-3xl" />
          <span className="text-2xl ">Youtube</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}>
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
            <div className="flex gap-5 items-center pr-5">
              <input
                type="text"
                placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchedTerm}
                onChange={e => dispatch(actions.enteredSearchedTerm(e.target.value))}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
              <AiOutlineSearch className="text-xl " />
            </button>
          </div>
        </form>

        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <FaMicrophone />
        </div>
      </div>
      <div className="flex gap-8 items-center text-xl">
        <RiVideoAddLine />
          <BsBell />
        <MdAccountCircle/>
      </div>
    </div>
  );
}



