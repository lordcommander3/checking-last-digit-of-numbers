var num1=prompt("Enter first value");
var num2=prompt("Enter second value");
var num3=prompt("Enter third value");
var cal1=num1%10; //Logic: % by implementing modulus we are comparing their remainder if remainder is same after dividing them with 10 their last digit will always be same.
var cal2=num2%10;
var cal3=num3%10;
if( cal1 === cal2 && cal1 === cal3){
    document.write(`${num1},${num2} and ${num3} all have same last digit`)
}else{
    document.write(`${num1} , ${num2} and ${num3} don't have same last digit`)
}
