//Variable 

var a =10;
console.log(a);
let b = 15;
console.log(b);
const c ="3.14"
console.log(c);

//Arrow function
arrowFun = (students)=>
    {
        return students[0];
    }
    console.log(arrowFun(['AIML,CSE,IT',"AIML","CSE","IT"]));

//Destructing operator

var marks=[90,95,93]
var[m1,m2,m3]=marks
console.log(m1,m2,m3);

//Ternary operator

a=10
out=(a%2==0)?"Even":"odd"
console.log(out);

//spread operator

arr1=[10,20,30]
arr2=[40,50,60]
//arr3=[...arr1,arr2]
arr3=[...arr1,...arr2]
console.log(arr3);

//rest operator


//Scope
var a=5
const pi =3.14
console.log(a);
console.log(pi);
{
    let a=10
    let b=10.5
    console.log(a);
    console.log(b);
}
console.log(pi);
console.log(a);
console.log("..........................................................................................................");

var a=5
var i =3.14
console.log(a);
console.log(i);
{
    var a=10
    let b=10.5
    console.log(a);
    console.log(b);
}
console.log(i);
console.log(a);
