let fruit=["apple","kivi"];
let number=[3,6,7,4];
let mixed=['apple','123']
console.log(fruit[0]);
console.log(number);
console.log(mixed[mixed.length-1]);

let array1=["itm","itm"];
let array2=array1;
let aaray3=array2;
array1.push("item3");
array2.push("item6")
console.log(array1===array2);
console.log(array2);

//insert and remove element
let arr1=["arsh","dixha","moskan"];
arr1.push("bkh[0]");
 arr1.pop("arr1[1]");
console.log(arr1);
console.log(arr1.slice(0,2));
console.log();
//unshift and shift function
let arr2=["arsh","dixha","moskan"];
arr2.unshift("kiwi");
console.log(arr2);
arr2.shift();
console.log(arr2);
//how to clone a aaray  like copy
let brr1=["arsh","dixha","muskan"];
let brr2=[];
 brr2=brr1.slice(0);
console.log(brr2);
console.log(brr1==brr2);
//concate 
let crr1=["arsh","dixha","muskan"];
let crr2=[];
crr2=[].concat(crr1);
// //method 2
// crr2=[].concat(crr1,["ibu","vgu"]);

// console.log(crr2);

//for loop
let fruits3=["arsh","dixha","bhjibh"];
let new8=[];
for(let i=0;i<fruits3.length;i++)
{
     new8.push(fruits3[i]);
}
console.log(new8);

for(var j=0;j<=10;j++)
{
    console.log("hi");
}
console.log(j);

// through while------->

// let fru=["vgguv","gvvhv"];
// let new3=[];
// while(j<fru.length)
// {
//     new2.puch(fru[j]);
//      j++
// }
// console.log(new3);gtvtg
//  let yrr=["vguvh","gvhjh","bhjibh"]
// for(let i in yrr)
// {
//     console.log(yrr[i],i);
// }

const value=["itm1","itm2","itm3"];
let  value1=value[0];
let value2=value[1];
console.log('value1=',value1);
let [value3,value4,value5,value6]=value;
console.log(value3);
console.log(value6);

const fruit5=["kivi","mango","apple"];
let [sr1,,sr2,...num]=fruit5
console.log(sr1);
console.log(sr2);
console.log(num);

//object------------->
let obj={};
let arr=[];
console.log(typeof obj);
console.log(typeof arr);

console.log(Array.isArray(obj));// to check is this obj or not
 //addind details sz
const person=
{
    //key     value
    name:"dixha",
    age: 15,
    gen: "male",
    "x hobbies":["sleep","music"]
}
console.log(person);
console.log(person["age"]);// also can perform all the array operation clone tooo
person.lastname="sharma";
console.log(person);
console.log(person["x hobbies"]);// for space []notation
///acccesss the key
const key="email";
const person1=
{
    name:"dixha",
    age: 15,
    gen: "male"
}
// console.log(person1);
person1.email="dixha@gmail.com";
console.log(person1["email"]);
obj[key]="dixhu@gmail.com";
console.log(obj);
// console.log(person1);


/// from for loop iteration
for(let key in obj)
{
    console.log(obj[key]);
}
for(let key in obj)
{
    console.log(`${key} : ${obj[key]}`);
    
}
