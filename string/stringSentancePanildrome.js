function stringPalindrome(str) {
    let start = 0
    let end = str.length - 1
    str = str.toLowerCase()
    while (end > start) {
      if(!(str[start]>='a' && str[start]<='z')){
          start++
          continue;
      }
      if(!(str[end]>='a' && str[end]<='z')){
           end--
           continue;
       }
       
       
      if (str[start] !== str[end]) {
                return false;
        }
        
      
       
        end--
        start++
        
    

    }
    return true
}

console.log(stringPalindrome("   Too hot to hoot."))
console.log(stringPalindrome("Abc def ghi jklm"))