import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="h-60 flex gap-3 flex-col">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-800 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/video/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt="Thumbnail"
            className="w-full h-46"
          />
        </Link>
      </div>
      <div className="flex gap-3">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={data.channelInfo.image.image}
              alt="Channel Image"
              className="w-8 h-8 rounded-full"
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#" className="line-clamp-2">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-sm text-gray-500">
            <div>
              <a href="#" className="hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>
            <div>
              <span className="after:contents-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
