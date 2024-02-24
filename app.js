
let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let plus=document.querySelector("#plus");
let minus=document.querySelector("#minus");
let multiply=document.querySelector("#multiply");
let divide=document.querySelector("#divide");
let display_result=document.querySelector("#display_result");

plus.addEventListener('click',function(){
    let x=parseInt(num1.value);
    let y=parseInt(num2.value);
    display_result.innerHTML=AddTwoNumbers(x,y);
})
minus.addEventListener('click',function(){
    let x=parseInt(num1.value);
    let y=parseInt(num2.value);
    display_result.innerHTML=SubtractTwoNumbers(x,y);
})
multiply.addEventListener('click',function(){
    let x=parseInt(num1.value);
    let y=parseInt(num2.value);
    display_result.innerHTML=MultiplyTwoNumbers(x,y);
})
divide.addEventListener('click',function(){
    let x=parseInt(num1.value);
    let y=parseInt(num2.value);
    display_result.innerHTML=DivideTwoNumbers(x,y);
})

function AddTwoNumbers(a,b){
    let sum=a+b;
    return sum;
}
function SubtractTwoNumbers(a,b){
    let diff=a-b;
    return diff;
}
function MultiplyTwoNumbers(a,b){
    let product=a*b;
    return product;
}
function DivideTwoNumbers(a,b){
    let quotient=a/b;
    return quotient;
}

