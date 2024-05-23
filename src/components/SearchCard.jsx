import { Link } from 'react-router-dom'

const SearchCard = ({data}) => {
  return (
    <div className='flex gap-4'>
        <div className="relative">
            <span className="absolute bottom-3 right-3 text-sm bg-gray-800 px-2 py-0.5 z-10">{data.videoDuration}</span>
            <Link to={`/video/${data.videoId}`}>
            <img src={data.videoThumbnail} alt="Thumbnail" className="w-96 h-52"/>
            </Link>
        </div>
        <div className="flex gap-1 flex-col">
            <h3 className="max-w-2xl">
                <a href="#" className="line-clamp-2">{data.videoTitle}</a>
            </h3>
            <div className="text-xs text-gray-400">
                <div>
                    <div>
                    <span className="after:contents-['•'] after:mx-1">
                            {data.videoViews} views
                        </span>
                        <span>
                            {data.videoAge}
                        </span>
                    </div>
                </div>
            </div>
            <div className="min-w-fit my-2">
                <a href="#" className="flex items-center gap-2 text-xs text-gray-500">
                    <img src={data.channelInfo.image.image} alt='Channel' className="w-8 h-8 rounded-full"/>
                    <span>{data.channelInfo.name}</span>
                </a>
            </div>
            <div>
                <div className="max-w-2xl line-clamp-2 text-sm text-gray-500">
                    <p>{data.videoDescription}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SearchCard
