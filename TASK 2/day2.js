//Task 1(Even or Odd Using Bitwise)
var a=3
if(a&1)
{
    console.log(a,"is Odd");
}
else
{
    console.log(a,"is Even");
}
//Task 2(4 types of Functions)
//Function with Parameter with return type
 
const add = (a, b) => {
    return a+b
};
let result = add(5, 3);
console.log(result);
//Function with Parameter without return type
const Add=(a,b)=>{
   console.log(a+b);
}
Add(5,3)
//Function without parameter with return type
const addition=()=>{
    let a=5,b=3;
    return a+b
}
console.log(addition());
//Function without parameter without return type
const Addition=()=>{
    let a=5,b=3;
    console.log(a+b);
}
Addition()
//Task 3(Rest Operator)
const arr = [10, 20, 30, 40, 50];
const [first, second, ...rest] = arr;
console.log(first); 
console.log(second); 
console.log(rest);   
//Task 4(CallBack)
validateCredentials=(username, password, callback)=>{
    setTimeout(() => {
        if (username === "admin" && password === "password124") {
            callback(true);  
        } else {
            callback(false); 
        }
    }, 2000); 
}
loginResponse=(isValid)=> {
    if (isValid) {
        console.log("Login successful!");
    } else {
        console.log("Invalid username or password.");
    }
}
const username = "admin";
const password = "password123";
validateCredentials(username, password, loginResponse);