// import axios from 'axios'
// import parseVideoDuration from './parseVideoDuration'
// import convertRawtoString from './convertRawToString'
// import timeSince from './timeSince'

// const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

// export const parseRecommendedData = async (items) => {
//   try{
//     const videoIds = []
//     const channelIds = []

//     items.forEach((item) => {
//       videoIds.push(item.id.videoId)
//       channelIds.push(item.snippet.channelId)
//     })

//     const {
//       data: { items: channelData },
//     } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${channelIds.join(",")}&key=${API_KEY}`)


//     const parsedChannelData = []
//     channelData.forEach(data => parsedChannelData.push({
//       id: data.id,
//       image: data.snippet.thumbnails.default.url
//   }))


//   const {
//     data:{items:videoData},
//   } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds.join(",")}&key=${API_KEY}`)


//     const parsedVideoData = []
//     items.forEach((item, index) => {
//       const channelImage = parsedChannelData.find((data) => data.id === item.snippet.channelId)
//       if(channelImage){
//         parsedVideoData.push({
//           videoId: item.id.videoId,
//           videoTitle: item.snippet.title,
//           videoDescription: item.snippet.description,
//           videoThumbnail: item.snippet.thumbnails.medium.url,
//           videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
//           videoDuration: parseVideoDuration(videoData[index].contentDetails.duration),
//           videoViews: convertRawtoString(
//             videoData[index].statistics.viewCount
//           ),
//           videoAge: timeSince(new Date(item.snippet.publishedAt)),
//           channelInfo:{
//             id: item.snippet.channelId,
//             image: channelImage,
//             name: item.snippet.channelTitle
//           },
//         })
//       }
//     })
//     return parsedVideoData
//   }
//   catch(error){
//     console.log(error)
//   }
// }

