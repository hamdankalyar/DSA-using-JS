

function breakingSentenceIntoWords(sen){
    let word=''
    let result = []
    for(let i = 0 ; i < sen.length ; i++){
        if(sen[i] !== ' '){
            word = word + sen[i] 
        }
        else{
            if(word){
                // console.log("word",word)
                result.push(word)
                word = ''
            }
        }
        if(i==sen.length-1){
            // console.log("word",word)
            result.push(word)
        }
      
    }
    
    return result ; 
}
// console.log(findPanilWords("man is fun"))


function findPanilWords(sen){
    let result = []
    let arr = breakingSentenceIntoWords(sen)
    arr.forEach((str)=>{
        let start = 0 
        let end = str.length -1
        let bool=true
        str = str.toLowerCase()
        console.log(str,start,end)
        while(end>start){
            if(str[start] !== str[end]){
                bool=false
                break;
            }else{
                end--
                start++
            }
        }
        if(bool){
            result.push(str)
        }
    })
    
    return result; 
}
console.log(findPanilWords('Madam Arora teaches malayalam'))