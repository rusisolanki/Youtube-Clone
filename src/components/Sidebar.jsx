import{
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater,
} from 'react-icons/md';
import { SiYoutubemusic } from "react-icons/si";
import { RiPlayListAddLine } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
import {LuThumbsUp} from 'react-icons/lu';


const Sidebar = () => {
    const primaryLinks = [
        {
            icon: <MdHomeFilled className='text-xl'/>,
            name: 'Home'
        },
        {
            icon:<MdOutlineSlowMotionVideo className='text-xl'/>,
            name:'Shorts'
        },
        {
            icon:<MdSubscriptions className='text-xl'/>,
            name:'Subscriptions'
        },
        {
            icon:<SiYoutubemusic className='text-xl'/>,
            name:'YouTube Music'
        }
    ];

    const secondaryLinks = [
        {
            icon:<MdOutlineVideoLibrary className='text-xl'/>,
            name:'Library'
        },
        {
            icon:<MdHistory className='text-xl'/>,
            name:"History"
        },
        {
            icon:<RiPlayListAddLine className='text-xl'/>,
            name:"Playlist"
        },
        {
            icon:<MdOutlineWatchLater className='text-xl'/>,
            name :"Watch Later"
        },
        {
            icon:<LuThumbsUp className='text-xl'/>,
            name :"Liked Video"
        },
        {
            icon:<IoMdDownload className='text-xl'/>,
            name :"Downloads"
        }
    ]


  return (
    <div className='w-[20%] bg-[#212121] pl-3 pr-5 overflow-auto pt-4 pb-8 sidebar'>
      <ul className='flex flex-col border-b-2 pb-4 border-gray-700'>
        {primaryLinks.map(
            ({icon,name}) => {
            return(
                <li key={name} className="pl-6 py-3 hover:bg-zinc-700 rounded-xl">
                    <a href='#' className='flex items-center gap-5'> 
                    {icon}
                    <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                </li>
            )}
        )}
      </ul>
      <ul className='flex flex-col border-gray-800 mt-4'>
        {secondaryLinks.map(
            ({icon,name}) => {
            return(
                <li key={name} className={`pl-6 py-3 hover:bg-zinc-700 rounded-xl`}>
                    <a href='#' className='flex items-center gap-5'> 
                    {icon}
                    <span className='text-sm tracking-wider'>{name}</span>
                    </a>
                </li>
            )
            }
        )}
      </ul>
    </div>
  )
}

export default Sidebar