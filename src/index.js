module.exports = function reverse (n) {
        
            str=n+""
            arr = str.split('')
            arr.reverse()
          
            newStr = arr.join("")
            newStr = parseInt(newStr)
      

          return newStr
}
