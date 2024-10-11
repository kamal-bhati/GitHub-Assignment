let a=[2,3,4,5]
function square(a){
let b = a.map(n=>n*n);
console.log(b)
}

square(a)


let a2 = [1,2,3,4,5];
function evenNumber(a){
let b1=a.filter(n=>n%2==0?n:null);
console.log(b1)
}
evenNumber(a2)


let a3 = [1,2,3,4,5];
function sumNumber(a){
let b1=a.reduce((ac,num)=>ac+num,0);
console.log("Sum is : ",b1)
} 
sumNumber(a3)

let a4 = [1,2,3,4,5];
function sumOfEvenSquars(a){
let b1=a.filter(n=>n%2==0?n:null).map(n=>n*n).reduce((ac,num)=>ac+num,0);
console.log("Sum of even numbers squar is : ",b1)
}
sumOfEvenSquars(a4)
