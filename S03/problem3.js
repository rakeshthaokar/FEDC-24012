function sumNumbers(...args){
    let sum = 0
    for(let num of args){
        sum+=num
    }
    return sum
}
let ans = sumNumbers(5,10,15)
console.log(ans)