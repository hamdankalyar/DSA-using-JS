function printing(n){
    if(n==0){
        return ; 
    }
    
    printing(n-1)
    console.log(n)
}

printing(3)