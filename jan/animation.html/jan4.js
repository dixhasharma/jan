let name="aman";
console.log(name);

var firstname="arsh";
var firstname="arun";
console.log(firstname);

const pi=3.14
//pi=pi+1
console.log(pi);

let first="arsh";
let last="dixha";
console.log(first.length-1);
console.log(last[3]);
//trim
let str="   hel   ho   ";
console.log(str);
ste=str.trim();
console.log(str.trim());
//uppercase
let sr1="muskan";
let sr2="jndj";
console.log(sr1.toUpperCase());

//slice
let sc1="dixha";
console.log(sc1.slice(0,2));

//splice
console.log(2,0,5)
console.log(2,2);
//to check type
let str2="hello";
let str3=null;A
console.log(typeof str2);
console.log(typeof str3);
//number to string
let str5= 25+"";
console.log(typeof num);

let str6= +"30";
console.log(typeof str6);
//concat
let str7="arsh";
let str8="dixha";
console.log(str7+""+str8);
//addition
let str9="22";
let str0="11";
console.log(str9 + str0);
console.log( +str9 + +str0);
//string template

let first1="sdlk";
let age=16;
let data=`my name is ${first1}`;
console.log(data);

//bigint
let x= 97564645342245678;
console.log(Number.MAX_SAFE_INTEGER);
//== or=== operator
let y="4";
let z="7";
console.log(x==y);
//if else
let nm=18;
if(nm<18)
{
 console.log("tenage");   
}
else
{
console.log("adult");
}

//compare three
let nm1=3;
let nm2=4;
let nm3=8;
if(nm1>nm2&&nm1>nm3)
{
    console.log("nm1 is larger");
}
else if(nm2>nm3&&nm2>nm1)
{
    console.log("nm2 is larger");
}
else if(nm3>nm1&&nm3>nm2)
{
   console.log("nm3 is larger");
}
 
// let whether=promt("enter your number");
// console.log(typeof whether);
let whether=17;

if(whether<0)
{
    console.log("freezy");
}
else if(whether<5)
{
    console.log("cold");
}
else if(whether>10)
{
    console.log(" hot");
}

// let day=2;
// switch (day)
// {
//     case 0:console.log("sunday");
//     case 1:console.log("monday");
//     case 2:console.log("tues");
//     break;
//     case 0:console.log();
//     case 0:console.log();
//     break;

// }

// let i=0;
// while(i<=20)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }

// let j=0;
// do{
//     console.log(j);
//     j++;
// }
// while(j<=10)

// let k=0;
// for(k=0;k<=10;k++)
// {
//     if(k%2==0)
//     {
//         console.log(k);
//     }
//     // console.log(k);
// }
let nm4=0;
let i;
let c=0;
for(nm4=2;nm4<=99;nm4++)
{
    
    for(i=1;i<=nm4;i++)
{
    if(nm4%i==0)
    {
    c++;
    }
    else {}
}
if(c==2)

    {
    console.log(nm4);
    }
    c=0;
}

// let nm9 = 1234;
// let sm = 0;
// let count=0
// while(nm9>0)
//    {
       
//        let r = nm9%10; 
//        sm = sm*10 + r; 
//        nm9 =Math.floor(nm9/10);
//        count++;
//    }
//    console.log(sm);
//    console.log(count);

   let nm9="hello world"
   let sm =o;
   let count=0
   while(nm9>0)
   {
    let r =nm9%10;
    sm=sm*10 +r;
    nm9=math.floor(nm9/10);
    count++;
   }
   console.log(sm);
   console.log(nm9);



