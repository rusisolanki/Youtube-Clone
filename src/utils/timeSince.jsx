

const timeSince = (date) => {

    const seconds = Math.floor((new Date().valueOf() - date.valueOf())/1000)

    let postedTime = seconds/31536000 //365*24*60*60
    if(postedTime > 1){
        return Math.floor(postedTime) + 'years'
    }

    postedTime = seconds/2592000 //30*24*60*60
    if(postedTime > 1){
        return Math.floor(postedTime) + 'months'
    }

    postedTime = seconds/86400 //24*60*60
    if(postedTime > 1){
        return Math.floor(postedTime) + 'days'
    }

    postedTime = seconds/3600 //60*60
    if(postedTime > 1){
        return Math.floor(postedTime) + 'hours'
    }

    postedTime = seconds/60
    if(postedTime > 1){
        return Math.floor(postedTime) + 'minutes'
    }
  
    return Math.floor(seconds) + 'seconds'
}

export default timeSince
