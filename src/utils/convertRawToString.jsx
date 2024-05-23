const convertRawToString = (views) => {
    const numb = Math.abs(Number(views))

    if(numb >= 1.0e9){
        return (numb/1.0e9).toFixed(2) + 'B'
    }
    if(numb >= 1.0e6){
        return (numb/1.0e6).toFixed(2) + 'M'
    }
    if(numb >= 1.0e3){
        return (numb/1.0e3).toFixed(2) + 'K'
    }
  
}

export default convertRawToString
