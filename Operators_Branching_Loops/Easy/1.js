// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
const add = (...nums) =>{
    let sum = 0;
    for(let i = 0;i<nums.length;i++){
        sum += nums[i];
    }
    return sum;
}

console.log(`Sum : ${add(5 , 13 , 7 ,21 ,48)}`)