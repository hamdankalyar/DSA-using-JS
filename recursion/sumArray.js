function sumArray(arr,index){

    if(index === arr.length-1){
        return arr[index];
    }
    return arr[index] + sumArray(arr,index+1);

}
console.log(sumArray([1,2,3,4,5],0)) // 15