// arr.map((item)=>console.log(item))
// let string="hello world"
// let result=string;
// let reversed=result;
// console.log(string.split(""));
// console.log(reversed.reverse(''));
// // console.log(sm.join);
//Q. String hello world output olleh dlrow
let sr = "hello world";
let result3 = sr.split("").reverse().join("");
console.log(result3);
let result1 = result3;
console.log(result1);
//function------------->
function sum(a, b, ...number) {
    console.log(a, b, number, "message");
}
console.log([..."muskan"]);
//multiply--------------->
function computation() {
    let x = 5;
    let y = 5;

    // function area(a,b)
    function area() {
        return x + y             //nesting
    }
    return area
}
// console.log(computation()());
//clouser propeerty============>
const areafunction = computation()
const result = areafunction()
console.log(result);


//------------------------->
// function computation1(xl) {
//     function sum(y) {
//         return (x + y)
//     }
//     return sum
// }
// const sumfunction = computation1(17)
// const result2 = sumfunction(18)
// console.log(result2);

//function array============>
// const sum1=(a,b)=>a+b;
// console.log(sum1(4,7));

// function sum() {
//     functuin()
// }

// console.log(sum5());
// const sum5 = () => {
//     console.log(this);
// };

//set time out---------------->
const result8=setTimeout((a)=>{
    console.log("gtvuuug");
    console.log(a);


},[1000],"hello");
console.log("bhhghbb");
console.log(result8);

//set 
const result7=setTimeout(()=>{
    console.log("hii",new Date());


},[1000],"hello");
//clearinterval(clearintervalid)

















































const obj1 =
{
    name: "dixha",
    age: 15,
    gen: "male"
}
console.log(obj1);
// arr.map((item) =>console.log(obj1[item]));


