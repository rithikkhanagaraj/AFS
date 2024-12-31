array = [10,20,30,140.5,50,61,"KEC",20,true];
console.log(array);

//1,for..in loop

//for(var a in array )
//{
    //console.log(a);
//}

// 2 for of loop
//for(var a in array )
  //  {
    //    console.log(a);
    //}

3// for each
//array.forEach((element,index) => {
   // console.log("Element is ",element, "and its index",index);
//});

objType1={
    "Firstname":"Hinata",
    "lastname":"Hyuga",
    "age" : "19"
}
console.log(objType1);

for (key in objType1){
    value = objType1(key)
    console.log(key,value);
}