const isNumber=(n)=>{
    return !isNaN(parseFloat(n) ) && isFinite(n)
}

module.exports={isNumber}